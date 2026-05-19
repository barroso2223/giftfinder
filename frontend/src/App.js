import { useState, useEffect } from "react";
import "./App.css";

const AFFILIATE_TAG = "barroso093-20";
const APP_URL = "https://gifts.barrosodigital.website";

const buildAmazonUrl = (search) => {
  const query = search.replace(/ /g, "+");
  return `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;
};

// ─── FEATURED BOOKS ───────────────────────────────────────────────────────────
const FEATURED_BOOKS = [
  {
    name: "🌟 Liot & Aviani: The Magical Garden (Baby-5yrs)",
    price_range: "$10-$15",
    amazon_url: "https://amzn.to/4uZvdFC",
    age_min: 0,
    age_max: 5,
  },
  {
    name: "🌟 Liot & Aviani: Adventure Begins (Ages 4-8)",
    price_range: "$10-$15",
    amazon_url: "https://amzn.to/49bPteG",
    age_min: 4,
    age_max: 8,
  },
  {
    name: "🌟 Animal Coloring & Letter Tracing Book (Ages 2-6)",
    price_range: "$8-$12",
    amazon_url: "https://amzn.to/4nDzDiQ",
    age_min: 2,
    age_max: 6,
  },
];

// ─── CURATED GIFT DATA ────────────────────────────────────────────────────────
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
    { name: "Ring Light", price_range: "$15-$35", search: "ring light selfie" },
    {
      name: "Tile Tracker",
      price_range: "$20-$35",
      search: "tile bluetooth tracker",
    },
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
      name: "PlayStation Gift Card",
      price_range: "$25-$100",
      search: "playstation gift card",
    },
    {
      name: "Xbox Gift Card",
      price_range: "$25-$100",
      search: "xbox gift card",
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
    {
      name: "Gourmet Spice Set",
      price_range: "$15-$35",
      search: "gourmet spice set",
    },
    {
      name: "Bamboo Cutting Board",
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
      name: "Polarized Sunglasses",
      price_range: "$15-$60",
      search: "polarized sunglasses uv400",
    },
    {
      name: "Multi Tool",
      price_range: "$15-$50",
      search: "multitool pocket tool",
    },
    {
      name: "LED Headlamp",
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
    {
      name: "Waterproof Phone Pouch",
      price_range: "$8-$15",
      search: "waterproof phone pouch",
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
    {
      name: "Kindle Paperwhite",
      price_range: "$80-$140",
      search: "kindle paperwhite",
    },
    {
      name: "Decorative Bookends",
      price_range: "$12-$30",
      search: "decorative bookends",
    },
    {
      name: "Audible Gift Card",
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
      name: "Over-Ear Headphones",
      price_range: "$20-$80",
      search: "over ear headphones",
    },
    {
      name: "Mini Keyboard Piano",
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
      name: "Adult Coloring Book",
      price_range: "$8-$15",
      search: "adult coloring book stress relief",
    },
  ],
  kids: [
    { name: "LEGO Set", price_range: "$10-$50", search: "lego set kids" },
    {
      name: "Stuffed Animal",
      price_range: "$10-$25",
      search: "stuffed animal plush toy",
    },
    {
      name: "Art Supply Kit",
      price_range: "$10-$25",
      search: "kids art supply kit",
    },
    {
      name: "Kids Board Game",
      price_range: "$12-$30",
      search: "kids board game family",
    },
    {
      name: "Puzzle Set",
      price_range: "$10-$20",
      search: "kids puzzle set educational",
    },
    {
      name: "Slime Kit",
      price_range: "$10-$20",
      search: "slime making kit kids",
    },
    {
      name: "Science Experiment Kit",
      price_range: "$15-$35",
      search: "science experiment kit kids",
    },
    {
      name: "Remote Control Car",
      price_range: "$15-$40",
      search: "remote control car kids",
    },
    {
      name: "Kinetic Sand",
      price_range: "$10-$20",
      search: "kinetic sand kids",
    },
    {
      name: "Play-Doh Set",
      price_range: "$8-$20",
      search: "play-doh set kids",
    },
    {
      name: "Dinosaur Figures",
      price_range: "$10-$25",
      search: "dinosaur figures set kids",
    },
    {
      name: "Magnetic Drawing Board",
      price_range: "$10-$20",
      search: "magnetic drawing board kids",
    },
    {
      name: "Kids Headphones",
      price_range: "$15-$30",
      search: "kids headphones volume limit",
    },
    {
      name: "Barbie Doll",
      price_range: "$10-$35",
      search: "barbie doll set girls",
    },
    {
      name: "Action Figures",
      price_range: "$12-$30",
      search: "superhero action figures kids",
    },
    {
      name: "Dance Mat",
      price_range: "$20-$45",
      search: "dance mat kids music",
    },
    {
      name: "Kids Microphone",
      price_range: "$15-$30",
      search: "kids microphone singing karaoke",
    },
    {
      name: "Soccer Ball Set",
      price_range: "$15-$30",
      search: "kids soccer ball cones set",
    },
    {
      name: "Monster Truck Set",
      price_range: "$10-$30",
      search: "monster truck toy kids",
    },
    {
      name: "Kids Race Car Track",
      price_range: "$20-$50",
      search: "kids race car track set",
    },
    {
      name: "Karate Set",
      price_range: "$15-$40",
      search: "kids karate martial arts set",
    },
  ],
};

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const INTERESTS = [
  "tech",
  "gaming",
  "fitness",
  "cooking",
  "outdoors",
  "books",
  "music",
  "art",
  "kids",
];
const RELATIONSHIPS = [
  "Parent",
  "Child",
  "Sibling",
  "Partner",
  "Friend",
  "Coworker",
  "Nephew/Niece",
  "Grandparent",
  "Other",
];
const OCCASIONS = [
  "Birthday",
  "Holiday",
  "Anniversary",
  "Graduation",
  "Just Because",
  "Wedding",
  "Baby Shower",
];
const GENDERS = [
  "Boy / Man",
  "Girl / Woman",
  "Non-binary",
  "Prefer not to say",
];

// ─── DYNAMIC GIFT LOGIC ───────────────────────────────────────────────────────
function buildAgeGenderContext(age, gender) {
  const ageNum = parseInt(age) || 0;
  let ageContext = "";
  let genderContext = "";

  if (ageNum > 0) {
    if (ageNum <= 1) ageContext = "baby infant";
    else if (ageNum <= 3) ageContext = `${ageNum} year old toddler`;
    else if (ageNum <= 12) ageContext = `${ageNum} year old kid`;
    else if (ageNum <= 17) ageContext = `${ageNum} year old teen`;
    else ageContext = `${ageNum} year old`;
  }

  if (gender) {
    const g = gender.toLowerCase();
    if (g.includes("girl") || g.includes("woman")) genderContext = "girl woman";
    else if (g.includes("boy") || g.includes("man")) genderContext = "boy man";
  }

  return `${ageContext} ${genderContext}`.trim();
}

function parseNotesToGifts(notes, age, gender, budget) {
  if (!notes || !notes.trim()) return [];

  const context = buildAgeGenderContext(age, gender);
  const excludePhrases = [
    "already has",
    "doesn't like",
    "does not like",
    "hates",
    "not into",
    "dislikes",
    "allergic to",
    "avoid",
    "can't have",
  ];

  // Split notes by commas, semicolons, or "and"
  const rawItems = notes
    .split(/[,;]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 1);

  const gifts = [];

  rawItems.forEach((item) => {
    // Skip exclusion phrases
    const isExclusion = excludePhrases.some((p) =>
      item.toLowerCase().includes(p),
    );
    if (isExclusion) return;

    // Clean the item — remove "likes", "loves", "into", "enjoys" prefixes
    const cleaned = item
      .replace(
        /^(likes?|loves?|into|enjoys?|obsessed with|crazy about|really likes?)\s+/i,
        "",
      )
      .trim();

    if (cleaned.length < 2) return;

    // Build smart search query
    const searchQuery = context
      ? `${cleaned} gift ${context}`.trim()
      : `${cleaned} gift`;

    gifts.push({
      name: `🔍 ${cleaned.charAt(0).toUpperCase() + cleaned.slice(1)} Gift`,
      price_range: "Varies",
      category: "personalized",
      amazon_url: buildAmazonUrl(searchQuery),
      isDynamic: true,
    });
  });

  return gifts.slice(0, 8); // max 8 dynamic results
}

function getCuratedGifts(interests, budget) {
  const results = [];
  const seen = new Set();
  for (const interest of interests) {
    const category = GIFT_CATEGORIES[interest.toLowerCase()];
    if (category) {
      category.forEach((gift) => {
        const minPrice = parseInt(
          gift.price_range.split("-")[0].replace("$", ""),
        );
        if (minPrice <= budget && !seen.has(gift.name)) {
          seen.add(gift.name);
          results.push({
            ...gift,
            category: interest,
            amazon_url: gift.affiliate_url || buildAmazonUrl(gift.search),
          });
        }
      });
    }
  }
  return results;
}

function getPersonalizedGifts(form) {
  const {
    interests = [],
    budget = 50,
    age = "",
    gender = "",
    notes = "",
  } = form;

  // Dynamic gifts from notes — always first
  const dynamicGifts = parseNotesToGifts(notes, age, gender, budget);

  // Curated gifts from interests
  const curatedGifts = getCuratedGifts(interests, budget);

  // Merge — dynamic first, then curated, deduplicated, max 10
  const seen = new Set(dynamicGifts.map((g) => g.name));
  const merged = [...dynamicGifts];

  for (const gift of curatedGifts) {
    if (merged.length >= 10) break;
    if (!seen.has(gift.name)) {
      seen.add(gift.name);
      merged.push(gift);
    }
  }

  return merged;
}

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const today = new Date();
  const date = new Date(dateStr);
  date.setFullYear(today.getFullYear());
  if (date < today) date.setFullYear(today.getFullYear() + 1);
  return Math.ceil((date - today) / (1000 * 60 * 60 * 24));
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
function BirthdayBanner({ people, onFindGifts }) {
  const upcoming = people
    .filter((p) => {
      const d = getDaysUntil(p.birthday);
      return d !== null && d <= 14;
    })
    .sort((a, b) => getDaysUntil(a.birthday) - getDaysUntil(b.birthday));
  if (!upcoming.length) return null;
  return (
    <div className="birthday-banner">
      {upcoming.map((p) => {
        const days = getDaysUntil(p.birthday);
        return (
          <div key={p.id} className="birthday-alert">
            <span>
              🎂 {p.name}'s birthday is in {days} day{days !== 1 ? "s" : ""}!
            </span>
            <button onClick={() => onFindGifts(p)} className="birthday-btn">
              Find {p.name} a gift →
            </button>
          </div>
        );
      })}
    </div>
  );
}

function PersonForm({ person, onSave, onCancel, isPersonalized = false }) {
  const [form, setForm] = useState(
    person || {
      name: "",
      relationship: "",
      age: "",
      gender: "",
      occasion: "",
      interests: [],
      budget: 50,
      birthday: "",
      notes: "",
    },
  );

  const toggleInterest = (i) =>
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(i)
        ? prev.interests.filter((x) => x !== i)
        : [...prev.interests, i],
    }));

  return (
    <div className="person-form">
      <h3>
        {isPersonalized
          ? "🎯 Tell us about them"
          : person
            ? "Edit Profile"
            : "Add a Person"}
      </h3>
      {isPersonalized && (
        <p className="form-subtitle">
          We'll find personalized gifts based on their interests and save them
          for future reminders.
        </p>
      )}

      <div className="form-row">
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            placeholder="e.g. Leilani"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Relationship</label>
          <select
            value={form.relationship}
            onChange={(e) => setForm({ ...form, relationship: e.target.value })}
          >
            <option value="">Select...</option>
            {RELATIONSHIPS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="e.g. 4"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value="">Select...</option>
            {GENDERS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isPersonalized && (
        <div className="form-group">
          <label>Occasion</label>
          <div className="occasion-btns">
            {OCCASIONS.map((o) => (
              <button
                key={o}
                className={`occasion-btn ${form.occasion === o ? "active" : ""}`}
                onClick={() => setForm({ ...form, occasion: o })}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="form-group">
        <label>Birthday (for reminders)</label>
        <input
          type="date"
          value={form.birthday}
          onChange={(e) => setForm({ ...form, birthday: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>General Interests</label>
        <div className="interests">
          {INTERESTS.map((i) => (
            <button
              key={i}
              className={`interest-btn ${form.interests.includes(i) ? "active" : ""}`}
              onClick={() => toggleInterest(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Budget: ${form.budget}</label>
        <input
          type="range"
          min="10"
          max="200"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: Number(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>
          {isPersonalized
            ? "What do they love? 🎯 (this drives the gift search!)"
            : "Notes (likes, dislikes, allergies, etc.)"}
        </label>
        <textarea
          placeholder={
            isPersonalized
              ? 'e.g. "monster trucks, barbies, karate, singing, soccer, k-pop"\nOr: "already has LEGO, allergic to latex, loves dinosaurs"'
              : 'e.g. "loves dinosaurs, already has LEGO, allergic to nuts"'
          }
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        {isPersonalized && (
          <p className="notes-hint">
            💡 Each item you list becomes a personalized Amazon gift search —
            the more specific, the better!
          </p>
        )}
      </div>

      <div className="form-actions">
        <button
          className="search-btn"
          onClick={() => form.name && onSave(form)}
        >
          {isPersonalized
            ? "Find Perfect Gifts 🎯"
            : person
              ? "Save Changes"
              : "Add Person"}
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
function App() {
  const [activeTab, setActiveTab] = useState("find");
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState(50);
  const [gifts, setGifts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [people, setPeople] = useState(() => {
    const s = localStorage.getItem("giftfinder-people");
    return s ? JSON.parse(s) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [giftingFor, setGiftingFor] = useState(null);

  useEffect(() => {
    localStorage.setItem("giftfinder-people", JSON.stringify(people));
  }, [people]);

  const toggleInterest = (i) =>
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const findGifts = () => {
    if (!selected.length) return;
    if (giftingFor) {
      setGifts(
        getPersonalizedGifts({ ...giftingFor, interests: selected, budget }),
      );
    } else {
      setGifts(getCuratedGifts(selected, budget));
    }
    setSearched(true);
  };

  const findGiftsForPerson = (person) => {
    setSelected(person.interests.length ? person.interests : []);
    setBudget(person.budget || 50);
    setGiftingFor(person);
    setActiveTab("find");
    setGifts(getPersonalizedGifts(person));
    setSearched(true);
  };

  const savePerson = (form) => {
    if (editingPerson) {
      setPeople((prev) =>
        prev.map((p) =>
          p.id === editingPerson.id
            ? { ...form, id: p.id, updatedAt: new Date().toISOString() }
            : p,
        ),
      );
    } else {
      setPeople((prev) => [
        ...prev,
        { ...form, id: Date.now(), createdAt: new Date().toISOString() },
      ]);
    }
    setShowForm(false);
    setEditingPerson(null);
  };

  const deletePerson = (id) => {
    if (window.confirm("Remove this person?"))
      setPeople((prev) => prev.filter((p) => p.id !== id));
  };

  const relevantBooks = (age) => {
    const a = parseInt(age) || 0;
    return FEATURED_BOOKS.filter((b) => a >= b.age_min && a <= b.age_max);
  };

  return (
    <div className="app">
      <header>
        <h1>🎁 GiftFinder</h1>
        <p>Find the perfect gift for anyone</p>
      </header>

      <BirthdayBanner people={people} onFindGifts={findGiftsForPerson} />

      <div className="tabs">
        <button
          className={`tab ${activeTab === "find" ? "active" : ""}`}
          onClick={() => setActiveTab("find")}
        >
          Find Gifts
        </button>
        <button
          className={`tab ${activeTab === "personalized" ? "active" : ""}`}
          onClick={() => setActiveTab("personalized")}
        >
          🎯 Personalized
        </button>
        <button
          className={`tab ${activeTab === "people" ? "active" : ""}`}
          onClick={() => setActiveTab("people")}
        >
          My People{" "}
          {people.length > 0 && <span className="badge">{people.length}</span>}
        </button>
      </div>

      {/* ── FIND GIFTS TAB ── */}
      {activeTab === "find" && (
        <>
          {giftingFor && (
            <div className="gifting-for-banner">
              🎁 Finding gifts for <strong>{giftingFor.name}</strong>
              <button
                onClick={() => {
                  setGiftingFor(null);
                  setGifts([]);
                  setSearched(false);
                }}
                className="clear-btn"
              >
                ✕
              </button>
            </div>
          )}

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
              disabled={!selected.length}
            >
              Find Gifts 🎁
            </button>
          </div>

          {selected.includes("kids") && (
            <div className="featured-card">
              <h3>⭐ Featured Kids Books</h3>
              <p>Amazing children's books — perfect gifts!</p>
              <div className="featured-books">
                {FEATURED_BOOKS.map((book, i) => (
                  <a
                    key={i}
                    href={book.amazon_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-book"
                  >
                    <span>{book.name}</span>
                    <span className="price">{book.price_range}</span>
                    <span className="view-link">View on Amazon →</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {searched && !gifts.length && (
            <div className="no-results">
              <p>😕 No gifts found for this budget.</p>
              <p>
                Try increasing your budget or selecting different interests.
              </p>
            </div>
          )}

          {gifts.length > 0 && (
            <div className="results">
              {gifts.map((gift, i) => (
                <div
                  className={`gift-card ${gift.isDynamic ? "dynamic" : ""}`}
                  key={i}
                >
                  {gift.isDynamic && (
                    <span className="dynamic-badge">Personalized</span>
                  )}
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
        </>
      )}

      {/* ── PERSONALIZED TAB ── */}
      {activeTab === "personalized" && (
        <PersonForm
          person={null}
          isPersonalized={true}
          onSave={(form) => {
            savePerson(form);
            setGifts(getPersonalizedGifts(form));
            setGiftingFor({ ...form, id: Date.now() });
            setSearched(true);
            setActiveTab("find");
          }}
          onCancel={() => setActiveTab("find")}
        />
      )}

      {/* ── MY PEOPLE TAB ── */}
      {activeTab === "people" && (
        <div className="people-tab">
          {!showForm && (
            <button
              className="search-btn add-btn"
              onClick={() => {
                setEditingPerson(null);
                setShowForm(true);
              }}
            >
              + Add a Person
            </button>
          )}
          {showForm && (
            <PersonForm
              person={editingPerson}
              onSave={savePerson}
              onCancel={() => {
                setShowForm(false);
                setEditingPerson(null);
              }}
            />
          )}
          {!people.length && !showForm && (
            <div className="no-results">
              <p>👥 No people saved yet.</p>
              <p>
                Add people you shop for to get personalized gift recommendations
                and birthday reminders!
              </p>
            </div>
          )}
          <div className="people-list">
            {people.map((person) => {
              const days = getDaysUntil(person.birthday);
              const books = relevantBooks(person.age);
              return (
                <div key={person.id} className="person-card">
                  <div className="person-info">
                    <h3>
                      {person.name}
                      {days !== null && days <= 14 && (
                        <span className="birthday-soon">🎂 {days}d</span>
                      )}
                    </h3>
                    {person.relationship && (
                      <p className="person-meta">
                        {person.relationship}
                        {person.age ? `, Age ${person.age}` : ""}
                        {person.gender ? ` · ${person.gender}` : ""}
                      </p>
                    )}
                    {person.interests.length > 0 && (
                      <p className="person-interests">
                        {person.interests.join(", ")}
                      </p>
                    )}
                    {person.occasion && (
                      <p className="person-meta">🎉 {person.occasion}</p>
                    )}
                    {person.birthday && (
                      <p className="person-meta">
                        🎂{" "}
                        {new Date(person.birthday).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                    {person.notes && (
                      <p className="person-notes">📝 {person.notes}</p>
                    )}
                    {books.length > 0 && (
                      <div className="person-books">
                        {books.map((b, i) => (
                          <a
                            key={i}
                            href={b.amazon_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="person-book-link"
                          >
                            ⭐ {b.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="person-actions">
                    <button
                      className="action-btn find"
                      onClick={() => findGiftsForPerson(person)}
                    >
                      Find Gifts
                    </button>
                    <button
                      className="action-btn edit"
                      onClick={() => {
                        setEditingPerson(person);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => deletePerson(person.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <footer>
        <p>This site contains affiliate links. We may earn a commission.</p>
        <p>
          <a href={APP_URL}>{APP_URL}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
