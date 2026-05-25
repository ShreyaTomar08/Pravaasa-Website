export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  rating: string;
  category: string;
  tag: string;
  packageIds: string[];
}

export const destinations: Destination[] = [
  { id: "kashmir", name: "Kashmir", subtitle: "Paradise on Earth", description: "Snow-capped peaks, serene lakes, and lush meadows make Kashmir a timeless destination.", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Char_Chinar_(viewed_from_Lake).jpg", price: "From ₹34,999", duration: "5–7 days", rating: "4.9", category: "Mountains", tag: "Best Seller", packageIds: ["kashmir-escape"] },
  { id: "goa", name: "Goa", subtitle: "Sun, Sand & Serenity", description: "Golden beaches, vibrant nightlife, and Portuguese heritage await you in Goa.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", price: "From ₹24,999", duration: "4–6 days", rating: "4.8", category: "Beaches", tag: "Popular", packageIds: ["goa-beach-holiday"] },
  { id: "himachal", name: "Himachal Pradesh", subtitle: "Mountains Are Calling", description: "From Shimla's colonial charm to Manali's adventure trails, Himachal is a mountain lover's dream.", image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800", price: "From ₹29,999", duration: "6–8 days", rating: "4.8", category: "Mountains", tag: "Adventure", packageIds: ["himachal-adventure"] },
  { id: "rajasthan", name: "Rajasthan", subtitle: "Land of Kings", description: "Royal palaces, golden deserts, and colorful festivals define the spirit of Rajasthan.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", price: "From ₹39,999", duration: "7–10 days", rating: "4.9", category: "Heritage", tag: "Heritage", packageIds: ["rajasthan-heritage"] },
  { id: "kerala", name: "Kerala", subtitle: "God's Own Country", description: "Backwaters, tea gardens, Ayurveda — Kerala is India's most soothing destination.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800", price: "From ₹32,999", duration: "5–7 days", rating: "4.9", category: "Wellness", tag: "Wellness", packageIds: ["kerala-backwaters"] },
  { id: "dubai", name: "Dubai", subtitle: "City of the Future", description: "Futuristic skylines, desert adventures, and world-class shopping in one sparkling city.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", price: "From ₹54,999", duration: "4–6 days", rating: "4.8", category: "International", tag: "Family", packageIds: ["dubai-family-trip"] },
];

export const destinationCategories = ["All", "Mountains", "Beaches", "Heritage", "Wellness", "International"];
