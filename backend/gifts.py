AFFILIATE_TAG = "barroso093-20"


def build_amazon_url(search_term):
    base = "https://amazon.com/s?k="
    query = search_term.replace(" ", "+")
    return f"{base}{query}&tag={AFFILIATE_TAG}"


GIFT_CATEGORIES = {
    "tech": [
        {
            "name": "Wireless Earbuds",
            "price_range": "$20-$50",
            "search": "wireless earbuds",
        },
        {"name": "Smart Watch", "price_range": "$50-$150", "search": "smart watch"},
        {
            "name": "Portable Charger",
            "price_range": "$15-$40",
            "search": "portable charger power bank",
        },
        {
            "name": "Bluetooth Speaker",
            "price_range": "$25-$80",
            "search": "bluetooth speaker",
        },
    ],
    "fitness": [
        {
            "name": "Resistance Bands",
            "price_range": "$10-$30",
            "search": "resistance bands set",
        },
        {"name": "Yoga Mat", "price_range": "$20-$60", "search": "yoga mat"},
        {
            "name": "Water Bottle",
            "price_range": "$15-$40",
            "search": "insulated water bottle",
        },
        {"name": "Jump Rope", "price_range": "$10-$25", "search": "jump rope fitness"},
    ],
    "gaming": [
        {
            "name": "Gaming Headset",
            "price_range": "$30-$100",
            "search": "gaming headset",
        },
        {"name": "Gaming Mouse", "price_range": "$20-$80", "search": "gaming mouse"},
        {
            "name": "Controller Stand",
            "price_range": "$15-$35",
            "search": "controller stand",
        },
        {
            "name": "Gift Card",
            "price_range": "$25-$100",
            "search": "playstation xbox gift card",
        },
    ],
    "cooking": [
        {"name": "Air Fryer", "price_range": "$40-$100", "search": "air fryer"},
        {"name": "Cookbook", "price_range": "$15-$35", "search": "bestseller cookbook"},
        {"name": "Spice Set", "price_range": "$20-$50", "search": "gourmet spice set"},
        {"name": "Coffee Maker", "price_range": "$30-$100", "search": "coffee maker"},
    ],
    "outdoors": [
        {
            "name": "Hiking Backpack",
            "price_range": "$40-$120",
            "search": "hiking backpack",
        },
        {
            "name": "Camping Lantern",
            "price_range": "$15-$40",
            "search": "camping lantern led",
        },
        {
            "name": "Sunglasses",
            "price_range": "$20-$80",
            "search": "polarized sunglasses",
        },
        {"name": "Hammock", "price_range": "$25-$60", "search": "camping hammock"},
    ],
    "books": [
        {
            "name": "Bestseller Fiction",
            "price_range": "$10-$25",
            "search": "bestseller fiction books 2026",
        },
        {
            "name": "Self Help Book",
            "price_range": "$10-$25",
            "search": "self help books bestseller",
        },
        {"name": "Kindle", "price_range": "$80-$140", "search": "amazon kindle"},
        {
            "name": "Book Light",
            "price_range": "$10-$25",
            "search": "book light reading",
        },
    ],
}


def get_gifts(interests, budget):
    results = []
    for interest in interests:
        interest = interest.lower().strip()
        if interest in GIFT_CATEGORIES:
            for gift in GIFT_CATEGORIES[interest]:
                results.append(
                    {
                        "name": gift["name"],
                        "price_range": gift["price_range"],
                        "amazon_url": build_amazon_url(gift["search"]),
                        "category": interest,
                    }
                )
    return results
