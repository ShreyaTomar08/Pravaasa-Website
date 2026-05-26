require('dotenv').config();
const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();

app.use(cors());
app.use(express.json());

// =========================================
// ACCESS TOKEN CACHE
// =========================================

let cachedAccessToken = null;
let tokenExpiryTime = 0;

// =========================================
// HTTP REQUEST HELPER
// =========================================

function httpRequest(urlString, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);

    const requestOptions = {
      method: options.method || 'GET',
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      headers: options.headers || {},
    };

    const req = https.request(requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const status = res.statusCode || 0;

        if (status >= 200 && status < 300) {
          try {
            resolve(JSON.parse(data));
          } catch {
            resolve(data);
          }
        } else {
          reject(
            new Error(
              `Request failed ${status}: ${data}`
            )
          );
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(body);
    }

    req.end();
  });
}

// =========================================
// GET ACCESS TOKEN (CACHED)
// =========================================

async function getAccessToken() {
  const now = Date.now();

  // REUSE TOKEN IF NOT EXPIRED
  if (
    cachedAccessToken &&
    now < tokenExpiryTime
  ) {
    console.log('Using cached access token');

    return cachedAccessToken;
  }

  console.log('Generating new access token');

  const tokenBody = new URLSearchParams({
    grant_type: 'refresh_token',

    client_id:
      process.env.BIGIN_CLIENT_ID,

    client_secret:
      process.env.BIGIN_CLIENT_SECRET,

    refresh_token:
      process.env.BIGIN_REFRESH_TOKEN,
  }).toString();

  const tokenData = await httpRequest(
    'https://accounts.zoho.in/oauth/v2/token',
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded',

        'Content-Length':
          Buffer.byteLength(tokenBody),
      },
    },
    tokenBody
  );

  if (!tokenData?.access_token) {
    throw new Error(
      'Unable to generate access token'
    );
  }

  cachedAccessToken =
    tokenData.access_token;

  // REFRESH 5 MINUTES EARLY
  tokenExpiryTime =
    Date.now() +
    (tokenData.expires_in - 300) *
      1000;

  return cachedAccessToken;
}

// =========================================
// SEND TO BIGIN
// =========================================

async function sendToBigin(inquiry) {
  const accessToken =
    await getAccessToken();

  // =========================================
  // FIND EXISTING CONTACT
  // =========================================

  let contactId = null;

  try {
    const searchResponse =
      await httpRequest(
        `https://www.zohoapis.in/bigin/v2/Contacts/search?email=${encodeURIComponent(
          inquiry.email
        )}`,
        {
          method: 'GET',

          headers: {
            Authorization:
              `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

    if (
      searchResponse?.data?.length > 0
    ) {
      contactId =
        searchResponse.data[0].id;

      console.log(
        'Existing contact found:',
        contactId
      );
    }
  } catch {
    console.log(
      'No existing contact found'
    );
  }

  // =========================================
  // CREATE CONTACT
  // =========================================

  if (!contactId) {
    const contactPayload = {
      data: [
        {
          Last_Name:
            inquiry.name ||
            'Website Inquiry',

          Email:
            inquiry.email || '',

          Phone:
            inquiry.phone || '',
        },
      ],
    };

    const contactResponse =
      await httpRequest(
        'https://www.zohoapis.in/bigin/v2/Contacts',
        {
          method: 'POST',

          headers: {
            Authorization:
              `Zoho-oauthtoken ${accessToken}`,

            'Content-Type':
              'application/json',
          },
        },
        JSON.stringify(contactPayload)
      );

    contactId =
      contactResponse?.data?.[0]
        ?.details?.id;

    console.log(
      'New contact created:',
      contactId
    );
  }

  // =========================================
  // CREATE PIPELINE RECORD
  // =========================================

  const dealRecord = {
    Deal_Name:
      `${inquiry.name} - ${
        inquiry.package ||
        'Travel Inquiry'
      }`,

    Layout: {
      id: '1209015000000720216',
    },

    Sub_Pipeline:
      'Travel Inquiry Pipeline Standard',

    Stage:
      'New Inquiry',

    ...(contactId
      ? {
          Contact_Name: {
            id: contactId,
          },
        }
      : {}),

    // FIELD MAPPINGS

    Travel_Date:
      inquiry.travelDate || null,

    Number_of_Travellers:
      inquiry.travelers || null,

    Package_Destinations:
      inquiry.package || null,

    Dream_Trip_Details_Message:
      inquiry.message || null,

    Phone_Number:
      inquiry.phone || null,

    Email_Address:
      inquiry.email || null,

    Your_Name:
      inquiry.name || null,

    Description:
      `Website Inquiry from ${inquiry.name}`,
  };

  const dealResponse =
    await httpRequest(
      'https://www.zohoapis.in/bigin/v2/Pipelines',
      {
        method: 'POST',

        headers: {
          Authorization:
            `Zoho-oauthtoken ${accessToken}`,

          'Content-Type':
            'application/json',
        },
      },
      JSON.stringify({
        data: [dealRecord],
      })
    );

  console.log(
    'Pipeline Record Created:',
    JSON.stringify(
      dealResponse,
      null,
      2
    )
  );

  return dealResponse;
}

// =========================================
// API ROUTE
// =========================================

app.post(
  '/api/inquiry',
  async (req, res) => {
    const inquiry = req.body || {};

    if (
      !inquiry.name ||
      !inquiry.email
    ) {
      return res
        .status(400)
        .send(
          'Missing required fields'
        );
    }

    let biginSuccess = false;

    try {
      await sendToBigin(inquiry);

      biginSuccess = true;

      console.log(
        'Bigin CRM updated successfully'
      );
    } catch (e) {
      console.error(
        'Bigin sync failed:',
        e?.message || e
      );
    }

    return res.json({
      ok: true,

      bigin: biginSuccess,

      message: biginSuccess
        ? 'Inquiry received and CRM updated.'
        : 'Inquiry received. CRM sync failed.',
    });
  }
);

// =========================================
// HEALTH CHECK
// =========================================

app.get('/health', (req, res) =>
  res.json({
    ok: true,
  })
);

// =========================================
// EXPORT FOR VERCEL
// =========================================

module.exports = app;