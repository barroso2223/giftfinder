import { useState } from "react";
import "./App.css";

const AFFILIATE_TAG = "barroso093-20";

const buildAmazonUrl = (search) => {
  const query = search.replace(/ /g, "+");
  return `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;
};

const GIFT_CATEGORIES = {
  tech: [
    { name: "Phone Stand", price_range: "$8-$15", search: "phone stand desk" },
    {
      name: "Cable Organizer",
      price_range: "$8-$15",
      search: "cable organizer set",
    },
    {
      name: "Wireless Mouse",
      price_range: "$15-$35",
      search: "wireless mouse",
    },
    {
      name: "Laptop Stand",
      price_range: "$20-$45",
      search: "laptop stand adjustable",
    },
    {
      name: "Wireless Earbuds",
      price_range: "$20-$50",
      search: "wireless earbuds",
    },
    {
      name: "Portable Charger",
      price_range: "$15-$40",
      search: "portable charger power bank",
    },
    {
      name: "Bluetooth Speaker",
      price_range: "$25-$80",
      search: "bluetooth speaker",
    },
    { name: "Smart Watch", price_range: "$50-$150", search: "smart watch" },
    {
      name: "LED Desk Lamp",
      price_range: "$15-$40",
      search: "led desk lamp usb",
    },
    { name: "Smart Plug", price_range: "$10-$25", search: "smart plug wifi" },
  ],
  gaming: [
    {
      name: "Controller Thumb Grips",
      price_range: "$8-$12",
      search: "controller thumb grips",
    },
    {
      name: "Gaming Mousepad",
      price_range: "$10-$25",
      search: "gaming mousepad large",
    },
    {
      name: "Gaming Headset",
      price_range: "$25-$80",
      search: "gaming headset",
    },
    { name: "Gaming Mouse", price_range: "$20-$80", search: "gaming mouse" },
    {
      name: "RGB LED Strip",
      price_range: "$10-$25",
      search: "rgb led strip gaming setup",
    },
    { name: "Headset Stand", price_range: "$12-$25", search: "headset stand" },
    {
      name: "Gift Card",
      price_range: "$25-$100",
      search: "playstation xbox gift card",
    },
    {
      name: "Gaming Glasses",
      price_range: "$15-$30",
      search: "blue light gaming glasses",
    },
    {
      name: "Retro Mini Console",
      price_range: "$25-$50",
      search: "retro mini game console",
    },
  ],
  fitness: [
    {
      name: "Resistance Bands",
      price_range: "$10-$25",
      search: "resistance bands set",
    },
    { name: "Yoga Mat", price_range: "$20-$60", search: "yoga mat non slip" },
    {
      name: "Water Bottle",
      price_range: "$12-$35",
      search: "insulated water bottle",
    },
    {
      name: "Jump Rope",
      price_range: "$8-$20",
      search: "jump rope fitness speed",
    },
    {
      name: "Foam Roller",
      price_range: "$15-$35",
      search: "foam roller muscle recovery",
    },
    {
      name: "Workout Gloves",
      price_range: "$10-$25",
      search: "workout gloves gym",
    },
    {
      name: "Protein Shaker",
      price_range: "$8-$15",
      search: "protein shaker bottle",
    },
    { name: "Gym Bag", price_range: "$20-$50", search: "gym bag duffel" },
    {
      name: "Massage Gun",
      price_range: "$35-$80",
      search: "massage gun percussion",
    },
    {
      name: "Pull Up Bar",
      price_range: "$20-$45",
      search: "pull up bar doorway",
    },
  ],
  cooking: [
    {
      name: "Herb Garden Kit",
      price_range: "$12-$25",
      search: "indoor herb garden kit",
    },
    {
      name: "Silicone Utensil Set",
      price_range: "$12-$25",
      search: "silicone cooking utensil set",
    },
    {
      name: "Cookbook",
      price_range: "$15-$35",
      search: "bestseller cookbook 2026",
    },
    { name: "Spice Set", price_range: "$15-$35", search: "gourmet spice set" },
    {
      name: "Cutting Board",
      price_range: "$15-$40",
      search: "bamboo cutting board",
    },
    {
      name: "Cast Iron Pan",
      price_range: "$20-$50",
      search: "cast iron skillet pan",
    },
    { name: "Air Fryer", price_range: "$40-$100", search: "air fryer" },
    { name: "Coffee Maker", price_range: "$25-$80", search: "coffee maker" },
    {
      name: "Food Scale",
      price_range: "$10-$20",
      search: "digital food kitchen scale",
    },
    {
      name: "Meal Prep Containers",
      price_range: "$15-$30",
      search: "meal prep containers set",
    },
  ],
  outdoors: [
    {
      name: "Pocket Knife",
      price_range: "$12-$30",
      search: "pocket knife folding",
    },
    {
      name: "Camping Lantern",
      price_range: "$12-$35",
      search: "camping lantern led",
    },
    {
      name: "Hammock",
      price_range: "$20-$50",
      search: "camping hammock lightweight",
    },
    {
      name: "Hiking Backpack",
      price_range: "$35-$100",
      search: "hiking backpack daypack",
    },
    {
      name: "Sunglasses",
      price_range: "$15-$60",
      search: "polarized sunglasses uv400",
    },
    {
      name: "Multi Tool",
      price_range: "$15-$50",
      search: "multitool pocket tool",
    },
    {
      name: "Headlamp",
      price_range: "$12-$30",
      search: "led headlamp rechargeable",
    },
    {
      name: "Insulated Flask",
      price_range: "$15-$35",
      search: "insulated flask thermos",
    },
    {
      name: "Trekking Poles",
      price_range: "$25-$60",
      search: "trekking poles collapsible",
    },
  ],
  books: [
    {
      name: "Bookmark Set",
      price_range: "$8-$15",
      search: "magnetic bookmark set",
    },
    {
      name: "Book Light",
      price_range: "$8-$20",
      search: "book light reading rechargeable",
    },
    {
      name: "Reading Journal",
      price_range: "$10-$20",
      search: "reading journal book log",
    },
    {
      name: "Bestseller Fiction",
      price_range: "$10-$25",
      search: "bestseller fiction books 2026",
    },
    {
      name: "Self Help Book",
      price_range: "$10-$25",
      search: "self help books bestseller",
    },
    { name: "Kindle", price_range: "$80-$140", search: "kindle paperwhite" },
    { name: "Bookends", price_range: "$12-$30", search: "decorative bookends" },
    {
      name: "Audiobook Credit",
      price_range: "$15-$30",
      search: "audible gift card",
    },
  ],
  music: [
    {
      name: "Guitar Pick Set",
      price_range: "$8-$12",
      search: "guitar pick variety set",
    },
    {
      name: "Clip-On Tuner",
      price_range: "$8-$15",
      search: "clip on guitar tuner",
    },
    { name: "Ukulele", price_range: "$35-$80", search: "ukulele beginner" },
    {
      name: "Vinyl Record",
      price_range: "$15-$30",
      search: "vinyl record album",
    },
    {
      name: "Headphones",
      price_range: "$20-$80",
      search: "over ear headphones",
    },
    {
      name: "Keyboard Piano",
      price_range: "$30-$80",
      search: "mini keyboard piano beginner",
    },
    {
      name: "Music Theory Book",
      price_range: "$10-$20",
      search: "music theory book beginner",
    },
  ],
  art: [
    {
      name: "Sketchbook",
      price_range: "$8-$15",
      search: "sketchbook drawing pad",
    },
    {
      name: "Colored Pencils",
      price_range: "$10-$25",
      search: "professional colored pencils set",
    },
    {
      name: "Watercolor Set",
      price_range: "$12-$30",
      search: "watercolor paint set",
    },
    {
      name: "Drawing Tablet",
      price_range: "$30-$80",
      search: "drawing tablet digital art",
    },
    {
      name: "Acrylic Paint Set",
      price_range: "$15-$35",
      search: "acrylic paint set",
    },
    {
      name: "Calligraphy Set",
      price_range: "$12-$25",
      search: "calligraphy pen set",
    },
    {
      name: "Coloring Book",
      price_range: "$8-$15",
      search: "adult coloring book stress relief",
    },
  ],
};

const INTERESTS = [
  "tech",
  "gaming",
  "fitness",
  "cooking",
  "outdoors",
  "books",
  "music",
  "art",
];

function getGifts(interests, budget) {
  const results = [];
  for (const interest of interests) {
    const category = GIFT_CATEGORIES[interest.toLowerCase()];
    if (category) {
      for (const gift of category) {
        const minPrice = parseInt(
          gift.price_range.split("-")[0].replace("$", ""),
        );
        if (minPrice <= budget) {
          results.push({
            ...gift,
            category: interest,
            amazon_url: buildAmazonUrl(gift.search),
          });
        }
      }
    }
  }
  return results;
}

function App() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState(50);
  const [gifts, setGifts] = useState([]);
  const [searched, setSearched] = useState(false);

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const findGifts = () => {
    if (selected.length === 0) return;
    const results = getGifts(selected, budget);
    setGifts(results);
    setSearched(true);
  };

  return (
    <div className="app">
      <header>
        <h1>🎁 GiftFinder</h1>
        <p>Find the perfect gift for anyone</p>
      </header>

      <div className="card">
        <h2>What are they into?</h2>
        <div className="interests">
          {INTERESTS.map((i) => (
            <button
              key={i}
              className={`interest-btn ${selected.includes(i) ? "active" : ""}`}
              onClick={() => toggleInterest(i)}
            >
              {i}
            </button>
          ))}
        </div>

        <h2>Budget</h2>
        <div className="budget">
          <input
            type="range"
            min="10"
            max="200"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <span>${budget}</span>
        </div>

        <button
          className="search-btn"
          onClick={findGifts}
          disabled={selected.length === 0}
        >
          Find Gifts 🎁
        </button>
      </div>

      {searched && gifts.length === 0 && (
        <div className="no-results">
          <p>😕 No gifts found for this budget.</p>
          <p>Try increasing your budget or selecting different interests.</p>
        </div>
      )}

      {gifts.length > 0 && (
        <div className="results">
          {gifts.map((gift, i) => (
            <div className="gift-card" key={i}>
              <h3>{gift.name}</h3>
              <p className="price">{gift.price_range}</p>
              <p className="category">{gift.category}</p>
              <a
                href={gift.amazon_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Amazon →
              </a>
            </div>
          ))}
        </div>
      )}

      <footer>
        <p>This site contains affiliate links. We may earn a commission.</p>
      </footer>
    </div>
  );
}

export default App;
