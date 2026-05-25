export interface PackageDay {
  day: number;
  title: string;
  description: string;
}

export interface PackageFAQ {
  question: string;
  answer: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  tag: string;
  gradient: string;
  heroImage: string;
  images: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageDay[];
  faqs: PackageFAQ[];
}

export const packages: TravelPackage[] = [
  {
    id: "kashmir-escape",
    name: "Kashmir Escape",
    tagline: "Paradise on Earth",
    description: "Immerse yourself in the breathtaking beauty of Kashmir — from serene Dal Lake houseboats to snow-capped Himalayan peaks. This carefully curated journey combines natural splendor with warm Kashmiri hospitality for an unforgettable escape.",
    duration: "6 Days / 5 Nights",
    groupSize: "2–6 People",
    price: "₹34,999",
    originalPrice: "₹42,999",
    tag: "Best Seller",
    gradient: "from-emerald-900/80 to-navy/90",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/4/47/Char_Chinar_(viewed_from_Lake).jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Char_Chinar_(viewed_from_Lake).jpg",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Dal_Lake%2C_Srinagar%2C_July_2012.jpg",
    ],
    highlights: ["Shikara ride on Dal Lake", "Gulmarg gondola experience", "Mughal Gardens tour", "Pahalgam valley excursion", "Authentic Wazwan dinner"],
    inclusions: ["5-night accommodation in premium hotels/houseboats", "Daily breakfast and dinner", "All sightseeing transfers by private car", "Shikara ride on Dal Lake", "Gulmarg gondola tickets", "Dedicated tour guide", "Airport pickup and drop"],
    exclusions: ["Airfare to/from Srinagar", "Lunch and personal expenses", "Travel insurance", "Activities not mentioned in itinerary", "Tips and gratuities"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Welcome at Srinagar airport. Transfer to your luxury houseboat on Dal Lake. Evening Shikara ride watching the sunset over the Himalayas. Overnight on the houseboat." },
      { day: 2, title: "Mughal Gardens & Old City", description: "Visit the iconic Mughal Gardens — Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Explore the old city bazaars and Jamia Masjid. Evening at leisure." },
      { day: 3, title: "Gulmarg Day Trip", description: "Drive to Gulmarg, the 'Meadow of Flowers.' Ride the Gulmarg Gondola for panoramic mountain views. Enjoy the alpine meadows and snow activities. Return to Srinagar." },
      { day: 4, title: "Pahalgam Excursion", description: "Full-day excursion to Pahalgam via saffron fields. Visit Betaab Valley and Aru Valley. Optional pony ride along the Lidder River. Return to Srinagar." },
      { day: 5, title: "Sonmarg & Thajiwas Glacier", description: "Day trip to Sonmarg, the 'Meadow of Gold.' Trek to Thajiwas Glacier. Enjoy the pristine landscape and mountain streams. Farewell dinner with traditional Wazwan cuisine." },
      { day: 6, title: "Departure", description: "Leisurely breakfast. Last-minute shopping for Kashmiri shawls and dry fruits. Transfer to Srinagar airport for departure." },
    ],
    faqs: [
      { question: "What is the best time to visit Kashmir?", answer: "March to August for pleasant weather and blooming gardens. December to February for snowfall experiences." },
      { question: "Is Kashmir safe for tourists?", answer: "Yes, Kashmir is very safe for tourists. The region has a strong tourism infrastructure and welcoming locals." },
      { question: "What should I pack?", answer: "Layers of warm clothing, comfortable walking shoes, sunscreen, and a good camera. Even summers can be cool in the evenings." },
    ],
  },
  {
    id: "goa-beach-holiday",
    name: "Goa Beach Holiday",
    tagline: "Sun, Sand & Serenity",
    description: "Experience the vibrant charm of Goa — golden beaches, Portuguese heritage, thrilling water sports, and legendary nightlife. From tranquil North Goa shores to historic South Goa churches, this trip has it all.",
    duration: "5 Days / 4 Nights",
    groupSize: "2–8 People",
    price: "₹24,999",
    originalPrice: "₹31,999",
    tag: "Popular",
    gradient: "from-amber-900/80 to-navy/90",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
    ],
    highlights: ["Beach hopping across North & South Goa", "Water sports adventure", "Old Goa heritage walk", "Sunset cruise on Mandovi River", "Spice plantation visit"],
    inclusions: ["4-night stay at beachside resort", "Daily breakfast", "Airport/station transfers", "North & South Goa sightseeing", "Sunset cruise with snacks", "Water sports package", "Spice plantation tour with lunch"],
    exclusions: ["Airfare/train tickets", "Lunch and dinner (except mentioned)", "Nightlife/party expenses", "Personal shopping", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival & Beach Vibes", description: "Arrive in Goa and check into your beachside resort. Spend the afternoon at Calangute or Baga Beach. Welcome dinner at a beach shack." },
      { day: 2, title: "North Goa Explorer", description: "Visit Aguada Fort, Anjuna Beach, and Vagator. Try water sports — jet ski, parasailing, and banana ride. Evening at the famous Saturday Night Market (seasonal)." },
      { day: 3, title: "Old Goa Heritage", description: "Explore the UNESCO World Heritage churches of Old Goa — Basilica of Bom Jesus and Se Cathedral. Visit a spice plantation with traditional Goan lunch. Evening sunset cruise on the Mandovi River." },
      { day: 4, title: "South Goa Serenity", description: "Day trip to the quieter South Goa beaches — Palolem, Colva, and Benaulim. Visit the Cabo de Rama Fort. Farewell beachside dinner under the stars." },
      { day: 5, title: "Departure", description: "Relaxed morning at the resort pool. Check out and transfer to the airport/station." },
    ],
    faqs: [
      { question: "What's the best season to visit Goa?", answer: "October to March for ideal beach weather. The monsoon season (June-September) offers lush greenery and fewer crowds." },
      { question: "Are water sports safe?", answer: "Yes, all water sports are conducted by licensed operators with safety equipment. We only partner with certified providers." },
      { question: "Is this trip suitable for families?", answer: "Absolutely! Goa is family-friendly with options for all ages. We can customize activities accordingly." },
    ],
  },
  {
    id: "himachal-adventure",
    name: "Himachal Adventure",
    tagline: "Mountains Are Calling",
    description: "From the bustling Mall Road of Shimla to the snow-draped peaks of Manali, this adventure through Himachal Pradesh is a feast for the senses. Conquer mountain passes, explore ancient temples, and breathe in the purest mountain air.",
    duration: "7 Days / 6 Nights",
    groupSize: "2–6 People",
    price: "₹29,999",
    originalPrice: "₹37,999",
    tag: "Adventure",
    gradient: "from-blue-900/80 to-navy/90",
    heroImage: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=1200",
    images: [
      "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    ],
    highlights: ["Rohtang Pass excursion", "Solang Valley adventures", "Shimla heritage walk", "Hadimba Temple visit", "River rafting in Kullu"],
    inclusions: ["6-night accommodation in premium hotels", "Daily breakfast and dinner", "Shimla–Manali transfers by private vehicle", "All sightseeing as per itinerary", "Solang Valley activity pass", "River rafting in Kullu", "Local guide services"],
    exclusions: ["Airfare/train to Chandigarh/Shimla", "Rohtang Pass permit fees (seasonal)", "Personal expenses and shopping", "Travel insurance", "Meals not mentioned"],
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Arrive in Chandigarh/Shimla. Transfer to your hotel. Evening stroll on Mall Road and Ridge. Overnight in Shimla." },
      { day: 2, title: "Shimla Sightseeing", description: "Visit Jakhoo Temple, Christ Church, and the Viceregal Lodge. Explore the local markets. Optional toy train ride to Kalka." },
      { day: 3, title: "Shimla to Manali", description: "Scenic drive from Shimla to Manali through pine forests and river valleys. Stop at Kullu for river rafting. Check into your Manali hotel." },
      { day: 4, title: "Manali Local Sightseeing", description: "Visit Hadimba Temple, Manu Temple, and Vashisht hot springs. Explore Old Manali's charming cafes. Evening at the riverside." },
      { day: 5, title: "Solang Valley & Atal Tunnel", description: "Adventure day at Solang Valley — paragliding, zorbing, and zip-lining. Drive through the Atal Tunnel for stunning views of Sissu." },
      { day: 6, title: "Rohtang Pass / Gulaba", description: "Excursion to Rohtang Pass (subject to permits) or Gulaba viewpoint. Experience snow activities and panoramic Himalayan views. Farewell dinner." },
      { day: 7, title: "Departure", description: "Morning at leisure. Check out and transfer to Chandigarh/Shimla for departure." },
    ],
    faqs: [
      { question: "Is Rohtang Pass always accessible?", answer: "Rohtang Pass is open from May to November. In winter, we include Gulaba or Solang Valley as alternatives." },
      { question: "What fitness level is required?", answer: "Moderate fitness is sufficient. Most activities are accessible to regular travelers. We customize based on your comfort." },
      { question: "Can I extend the trip?", answer: "Yes! We can add Dharamshala, Dalhousie, or Spiti Valley extensions." },
    ],
  },
  {
    id: "rajasthan-heritage",
    name: "Rajasthan Heritage Tour",
    tagline: "Land of Kings & Colors",
    description: "Step into a world of royal palaces, desert safaris, and vibrant bazaars. Rajasthan's golden heritage comes alive as you journey through Jaipur, Jodhpur, and Udaipur — three jewels of this majestic state.",
    duration: "8 Days / 7 Nights",
    groupSize: "2–8 People",
    price: "₹39,999",
    originalPrice: "₹49,999",
    tag: "Heritage",
    gradient: "from-orange-900/80 to-navy/90",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Amber_Fort%2C_Baradhari_Pavilion_at_Man_Singh_Palace_Square%2C_2010.jpg",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    ],
    highlights: ["Amber Fort elephant ride", "Thar Desert camel safari", "Lake Pichola boat ride", "Mehrangarh Fort exploration", "Traditional Rajasthani dinner"],
    inclusions: ["7-night heritage hotel accommodation", "Daily breakfast and dinner", "All intercity transfers by AC vehicle", "Monument entry tickets", "Desert safari with cultural evening", "Lake Pichola boat ride", "English-speaking guide"],
    exclusions: ["Flights to/from Rajasthan", "Lunch and beverages", "Camera fees at monuments", "Personal shopping", "Tips and travel insurance"],
    itinerary: [
      { day: 1, title: "Arrive in Jaipur", description: "Welcome at Jaipur airport. Check into your heritage hotel. Evening visit to Birla Mandir and local bazaar. Welcome dinner with Rajasthani folk music." },
      { day: 2, title: "Jaipur — The Pink City", description: "Full-day sightseeing: Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar. Evening shopping at Johari Bazaar for jewelry and textiles." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur, the 'Blue City.' En route visit Ajmer Sharif and Pushkar Lake. Check into your hotel in Jodhpur." },
      { day: 4, title: "Jodhpur Exploration", description: "Visit the magnificent Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace museum. Explore the vibrant old city and clock tower market." },
      { day: 5, title: "Jodhpur to Jaisalmer", description: "Drive to the Golden City of Jaisalmer. Visit Jaisalmer Fort and Patwon Ki Haveli. Evening at Sam Sand Dunes — camel safari and desert camp dinner under the stars." },
      { day: 6, title: "Jaisalmer to Udaipur", description: "Long scenic drive to Udaipur through the Aravalli hills. En route visit Ranakpur Jain Temples. Arrive in the 'City of Lakes.'" },
      { day: 7, title: "Udaipur — Venice of the East", description: "Explore City Palace, Saheliyon Ki Bari, and Jagdish Temple. Sunset boat ride on Lake Pichola with views of Lake Palace. Grand farewell dinner at a lakeside restaurant." },
      { day: 8, title: "Departure", description: "Morning at leisure. Transfer to Udaipur airport for your onward journey." },
    ],
    faqs: [
      { question: "Best time to visit Rajasthan?", answer: "October to March when temperatures are pleasant. Avoid May–July due to extreme heat." },
      { question: "Is this suitable for elderly travelers?", answer: "Yes, we provide comfortable AC vehicles and can arrange wheelchair assistance at major forts." },
      { question: "Can we add a Taj Mahal visit?", answer: "Absolutely! We offer an Agra extension with Taj Mahal and Fatehpur Sikri." },
    ],
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    tagline: "God's Own Country",
    description: "Drift along tranquil backwaters on a luxury houseboat, rejuvenate with authentic Ayurveda treatments, and witness the lush tea plantations of Munnar. Kerala offers a perfect blend of nature, culture, and wellness.",
    duration: "6 Days / 5 Nights",
    groupSize: "2–6 People",
    price: "₹32,999",
    originalPrice: "₹39,999",
    tag: "Wellness",
    gradient: "from-teal-900/80 to-navy/90",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
      "https://upload.wikimedia.org/wikipedia/commons/1/17/KeralaHouseBoat.JPG",
    ],
    highlights: ["Luxury houseboat cruise", "Ayurveda spa experience", "Munnar tea plantation tour", "Kathakali dance show", "Periyar wildlife safari"],
    inclusions: ["5-night accommodation including 1 night houseboat", "Daily breakfast and dinner", "Houseboat cruise with all meals", "Ayurveda massage session", "Munnar sightseeing", "Periyar boat safari", "All transfers by private vehicle"],
    exclusions: ["Flights to/from Kochi", "Lunch (except houseboat day)", "Personal spa treatments beyond included", "Shopping and tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrive in Kochi", description: "Welcome at Cochin airport. Explore Fort Kochi — Chinese fishing nets, St. Francis Church, and Jewish Synagogue. Evening Kathakali dance performance." },
      { day: 2, title: "Kochi to Munnar", description: "Scenic drive to Munnar through spice gardens and waterfalls. Visit Cheeyappara and Valara Falls en route. Check into your hillside resort." },
      { day: 3, title: "Munnar Exploration", description: "Visit Eravikulam National Park, tea museum, and Mattupetty Dam. Walk through the rolling tea estates. Evening at leisure in the cool mountain air." },
      { day: 4, title: "Munnar to Alleppey", description: "Drive to Alleppey (Alappuzha). Board your luxury houseboat for a serene cruise through the Kerala backwaters. All meals on board. Overnight on the houseboat." },
      { day: 5, title: "Alleppey to Kovalam", description: "Disembark and drive to Kovalam/Trivandrum. Afternoon Ayurveda spa session. Visit Kovalam Beach for sunset. Farewell dinner at a seaside restaurant." },
      { day: 6, title: "Departure", description: "Morning at leisure. Transfer to Trivandrum airport for departure." },
    ],
    faqs: [
      { question: "When is the best time to visit Kerala?", answer: "September to March for pleasant weather. The monsoon (June-August) is ideal for Ayurveda retreats." },
      { question: "Is the houseboat comfortable?", answer: "Our houseboats are premium with AC bedrooms, attached bathrooms, a sundeck, and a private chef." },
      { question: "Can we extend the Ayurveda experience?", answer: "Yes, we offer 3-day and 7-day Ayurveda wellness extensions at certified retreats." },
    ],
  },
  {
    id: "dubai-family-trip",
    name: "Dubai Family Trip",
    tagline: "City of the Future",
    description: "Experience the dazzling glamour of Dubai with your family — from the world's tallest tower to desert adventures and aquatic theme parks. This trip blends luxury, entertainment, and Arabian culture for all ages.",
    duration: "5 Days / 4 Nights",
    groupSize: "2–8 People",
    price: "₹54,999",
    originalPrice: "₹65,999",
    tag: "Family",
    gradient: "from-purple-900/80 to-navy/90",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    ],
    highlights: ["Burj Khalifa at the Top tickets", "Desert safari with BBQ dinner", "Dubai Mall & Aquarium visit", "Dhow cruise dinner", "Abu Dhabi day trip option"],
    inclusions: ["4-night stay at 4-star family hotel", "Daily breakfast", "Airport transfers", "Burj Khalifa At the Top tickets", "Desert safari with BBQ dinner & shows", "Dubai city tour", "Dhow cruise with dinner", "Dubai Mall guided visit"],
    exclusions: ["International airfare & visa fees", "Lunch and personal expenses", "Theme park tickets (can be added)", "Travel insurance", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Welcome at Dubai International Airport. Transfer to your hotel. Evening visit to Dubai Marina and JBR Beach Walk. Welcome dinner." },
      { day: 2, title: "Dubai City Tour", description: "Visit Burj Khalifa observation deck, Dubai Mall with aquarium and underwater zoo, Dubai Fountain show. Afternoon at leisure for shopping." },
      { day: 3, title: "Desert Safari Adventure", description: "Morning at leisure by the pool. Afternoon desert safari with dune bashing, camel riding, sandboarding, and henna painting. BBQ dinner under the stars with belly dance and fire shows." },
      { day: 4, title: "Old Dubai & Dhow Cruise", description: "Explore the traditional side — Gold Souk, Spice Souk, and Al Fahidi Historical District. Abra ride across Dubai Creek. Evening Dhow cruise dinner along the Marina." },
      { day: 5, title: "Departure", description: "Free morning for last-minute shopping at outlet malls. Transfer to Dubai airport for your flight home." },
    ],
    faqs: [
      { question: "Do we need a visa for Dubai?", answer: "Indian nationals need a UAE visa. We assist with the visa process as an add-on service." },
      { question: "Is this trip kid-friendly?", answer: "Absolutely! Dubai is one of the most family-friendly destinations. We can add theme parks like Atlantis, Legoland, or IMG Worlds." },
      { question: "What currency is used?", answer: "UAE Dirham (AED). USD and cards are widely accepted. We recommend carrying some AED for local markets." },
    ],
  },
];

export const getPackageById = (id: string): TravelPackage | undefined => {
  return packages.find((p) => p.id === id);
};
