import { useState } from "react";
import "./App.css";

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

function App() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState(50);
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const findGifts = async () => {
    if (selected.length === 0) return;
    setLoading(true);
    const response = await fetch("http://127.0.0.1:8080/api/gifts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interests: selected, budget }),
    });
    const data = await response.json();
    setGifts(data);
    setLoading(false);
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

        <button className="search-btn" onClick={findGifts} disabled={loading}>
          {loading ? "Finding gifts..." : "Find Gifts 🎁"}
        </button>
      </div>

      {gifts.length === 0 && !loading && selected.length > 0 && (
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
