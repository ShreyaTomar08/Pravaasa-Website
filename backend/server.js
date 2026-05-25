require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const inquiriesLog = path.join(__dirname, 'inquiries.jsonl');

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
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const status = res.statusCode || 0;
        if (status >= 200 && status < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            resolve(data);
          }
        } else {
          reject(new Error(`Request failed ${status}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function sendToBigin(inquiry) {
  const tokenBody = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: process.env.BIGIN_CLIENT_ID,
    client_secret: process.env.BIGIN_CLIENT_SECRET,
    refresh_token: process.env.BIGIN_REFRESH_TOKEN,
  }).toString();

  const tokenData = await httpRequest('https://accounts.zoho.in/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(tokenBody),
    },
  }, tokenBody);

  const accessToken = tokenData?.access_token;
  if (!accessToken) {
    throw new Error('Unable to obtain Zoho access token.');
  }

  let contactId = null;
  try {
    const contactData = await httpRequest('https://www.zohoapis.in/bigin/v2/Contacts', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }, JSON.stringify({
      data: [
        {
          Last_Name: inquiry.name,
          Email: inquiry.email,
          Phone: inquiry.phone,
        },
      ],
    }));

    contactId = contactData?.data?.[0]?.details?.id || null;
  } catch (error) {
    console.warn('Bigin contact creation failed:', error);
  }

  const dealRecord = {
    Deal_Name: `${inquiry.name} — ${inquiry.package || 'Travel Inquiry'}`,
    Stage: process.env.BIGIN_STAGE_ID,
    Description:
      'Destination: ' + (inquiry.package || '') +
      '\nTravel Date: ' + (inquiry.travelDate || '') +
      '\nTravelers: ' + (inquiry.travelers || '') +
      '\nMessage: ' + (inquiry.message || ''),
    ...(contactId ? { Contact_Name: { id: contactId } } : {}),
  };

  const dealBody = JSON.stringify({ data: [dealRecord] });

  const dealResponse = await httpRequest('https://www.zohoapis.in/bigin/v2/Pipelines', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }, dealBody);

  const dealStatus = dealResponse?.data?.[0]?.status;
  if (dealStatus && dealStatus !== 'success') {
    const code = dealResponse?.data?.[0]?.code;
    const message = dealResponse?.data?.[0]?.message;
    throw new Error(`Bigin deal creation failed — code: ${code}, message: ${message}`);
  }

  return dealResponse;
}

app.post('/api/inquiry', async (req, res) => {
  const inquiry = req.body || {};
  if (!inquiry.name || !inquiry.email) {
    return res.status(400).send('Missing required fields');
  }

  try {
    fs.appendFileSync(inquiriesLog, JSON.stringify({ receivedAt: new Date().toISOString(), inquiry }) + '\n');
  } catch (e) {
    console.warn('Failed to write inquiry log', e);
  }

  let biginSuccess = false;
  try {
    await sendToBigin(inquiry);
    biginSuccess = true;
    console.log('Bigin CRM updated successfully');
  } catch (e) {
    console.error('Bigin sync failed:', e?.message || e);
  }

  return res.json({
    ok: true,
    bigin: biginSuccess,
    message: biginSuccess
      ? 'Inquiry received and CRM updated.'
      : 'Inquiry received. CRM sync failed — check server logs.',
  });
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Inquiry server listening on http://localhost:${PORT}`));