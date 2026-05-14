AFFILIATE_TAG = "barroso093-20"


def build_amazon_url(search_term):
    base = "https://www.amazon.com/s?k="
    query = search_term.replace(" ", "+")
    return f"{base}{query}&tag={AFFILIATE_TAG}"


GIFT_CATEGORIES = {
    "tech": [
        {"name": "Phone Stand", "price_range": "$8-$15", "search": "phone stand desk"},
        {
            "name": "Cable Organizer",
            "price_range": "$8-$15",
            "search": "cable organizer set",
        },
        {
            "name": "Screen Cleaner Kit",
            "price_range": "$8-$15",
            "search": "screen cleaner kit",
        },
        {"name": "USB Hub", "price_range": "$12-$25", "search": "usb hub 4 port"},
        {
            "name": "Webcam Cover",
            "price_range": "$8-$12",
            "search": "webcam privacy cover",
        },
        {
            "name": "Wireless Mouse",
            "price_range": "$15-$35",
            "search": "wireless mouse",
        },
        {
            "name": "Laptop Stand",
            "price_range": "$20-$45",
            "search": "laptop stand adjustable",
        },
        {
            "name": "Mechanical Keyboard",
            "price_range": "$25-$80",
            "search": "mechanical keyboard",
        },
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
        {
            "name": "LED Desk Lamp",
            "price_range": "$15-$40",
            "search": "led desk lamp usb",
        },
        {
            "name": "Streaming Light",
            "price_range": "$15-$35",
            "search": "ring light streaming",
        },
        {"name": "Smart Plug", "price_range": "$10-$25", "search": "smart plug wifi"},
        {
            "name": "Tile Tracker",
            "price_range": "$20-$35",
            "search": "tile bluetooth tracker",
        },
        {"name": "Kindle", "price_range": "$80-$140", "search": "amazon kindle"},
    ],
    "gaming": [
        {
            "name": "Controller Thumb Grips",
            "price_range": "$8-$12",
            "search": "controller thumb grips",
        },
        {
            "name": "Gaming Mousepad",
            "price_range": "$10-$25",
            "search": "gaming mousepad large",
        },
        {
            "name": "Controller Stand",
            "price_range": "$12-$25",
            "search": "controller stand",
        },
        {
            "name": "Gaming Headset",
            "price_range": "$25-$80",
            "search": "gaming headset",
        },
        {"name": "Gaming Mouse", "price_range": "$20-$80", "search": "gaming mouse"},
        {
            "name": "RGB LED Strip",
            "price_range": "$10-$25",
            "search": "rgb led strip gaming setup",
        },
        {
            "name": "Game Storage Case",
            "price_range": "$10-$20",
            "search": "game card storage case",
        },
        {
            "name": "Gift Card",
            "price_range": "$25-$100",
            "search": "playstation xbox gift card",
        },
        {
            "name": "Gaming Chair Cushion",
            "price_range": "$20-$45",
            "search": "gaming chair cushion lumbar",
        },
        {"name": "Headset Stand", "price_range": "$12-$25", "search": "headset stand"},
        {
            "name": "Cooling Fan for Console",
            "price_range": "$10-$20",
            "search": "ps5 xbox cooling fan",
        },
        {
            "name": "Nintendo Switch Case",
            "price_range": "$10-$20",
            "search": "nintendo switch case",
        },
        {
            "name": "Gaming Glasses",
            "price_range": "$15-$30",
            "search": "blue light gaming glasses",
        },
        {
            "name": "Retro Mini Console",
            "price_range": "$25-$50",
            "search": "retro mini game console",
        },
        {
            "name": "Game Strategy Guide",
            "price_range": "$10-$25",
            "search": "game strategy guide book",
        },
    ],
    "fitness": [
        {
            "name": "Fitness Tracker Band",
            "price_range": "$15-$30",
            "search": "fitness tracker band",
        },
        {
            "name": "Resistance Bands",
            "price_range": "$10-$25",
            "search": "resistance bands set",
        },
        {"name": "Yoga Mat", "price_range": "$20-$60", "search": "yoga mat non slip"},
        {
            "name": "Water Bottle",
            "price_range": "$12-$35",
            "search": "insulated water bottle",
        },
        {
            "name": "Jump Rope",
            "price_range": "$8-$20",
            "search": "jump rope fitness speed",
        },
        {
            "name": "Foam Roller",
            "price_range": "$15-$35",
            "search": "foam roller muscle recovery",
        },
        {
            "name": "Push Up Bars",
            "price_range": "$10-$20",
            "search": "push up bars handles",
        },
        {"name": "Ab Roller", "price_range": "$12-$25", "search": "ab roller wheel"},
        {
            "name": "Workout Gloves",
            "price_range": "$10-$25",
            "search": "workout gloves gym",
        },
        {
            "name": "Protein Shaker Bottle",
            "price_range": "$8-$15",
            "search": "protein shaker bottle",
        },
        {
            "name": "Running Belt",
            "price_range": "$10-$20",
            "search": "running belt phone holder",
        },
        {"name": "Gym Bag", "price_range": "$20-$50", "search": "gym bag duffel"},
        {
            "name": "Ankle Weights",
            "price_range": "$12-$25",
            "search": "ankle weights set",
        },
        {
            "name": "Massage Gun",
            "price_range": "$35-$80",
            "search": "massage gun percussion",
        },
        {
            "name": "Pull Up Bar",
            "price_range": "$20-$45",
            "search": "pull up bar doorway",
        },
    ],
    "cooking": [
        {
            "name": "Herb Garden Kit",
            "price_range": "$12-$25",
            "search": "indoor herb garden kit",
        },
        {
            "name": "Spice Labels Set",
            "price_range": "$8-$15",
            "search": "spice jar labels set",
        },
        {
            "name": "Silicone Utensil Set",
            "price_range": "$12-$25",
            "search": "silicone cooking utensil set",
        },
        {
            "name": "Cookbook",
            "price_range": "$15-$35",
            "search": "bestseller cookbook 2026",
        },
        {"name": "Spice Set", "price_range": "$15-$35", "search": "gourmet spice set"},
        {
            "name": "Olive Oil Set",
            "price_range": "$15-$30",
            "search": "gourmet olive oil gift set",
        },
        {
            "name": "Wine Opener Set",
            "price_range": "$10-$25",
            "search": "wine opener set",
        },
        {
            "name": "Cutting Board",
            "price_range": "$15-$40",
            "search": "bamboo cutting board",
        },
        {
            "name": "Cast Iron Pan",
            "price_range": "$20-$50",
            "search": "cast iron skillet pan",
        },
        {"name": "Air Fryer", "price_range": "$40-$100", "search": "air fryer"},
        {"name": "Coffee Maker", "price_range": "$25-$80", "search": "coffee maker"},
        {
            "name": "Instant Pot",
            "price_range": "$60-$120",
            "search": "instant pot pressure cooker",
        },
        {
            "name": "Pasta Maker",
            "price_range": "$25-$60",
            "search": "pasta maker machine",
        },
        {
            "name": "Food Scale",
            "price_range": "$10-$20",
            "search": "digital food kitchen scale",
        },
        {
            "name": "Meal Prep Containers",
            "price_range": "$15-$30",
            "search": "meal prep containers set",
        },
    ],
    "outdoors": [
        {
            "name": "Carabiner Clips",
            "price_range": "$8-$15",
            "search": "carabiner clips set",
        },
        {
            "name": "Paracord Bracelet",
            "price_range": "$8-$15",
            "search": "paracord survival bracelet",
        },
        {
            "name": "Pocket Knife",
            "price_range": "$12-$30",
            "search": "pocket knife folding",
        },
        {
            "name": "Camping Lantern",
            "price_range": "$12-$35",
            "search": "camping lantern led",
        },
        {
            "name": "Hammock",
            "price_range": "$20-$50",
            "search": "camping hammock lightweight",
        },
        {
            "name": "Hiking Backpack",
            "price_range": "$35-$100",
            "search": "hiking backpack daypack",
        },
        {
            "name": "Sunglasses",
            "price_range": "$15-$60",
            "search": "polarized sunglasses uv400",
        },
        {
            "name": "Water Filter Bottle",
            "price_range": "$20-$45",
            "search": "water filter bottle hiking",
        },
        {
            "name": "Multi Tool",
            "price_range": "$15-$50",
            "search": "multitool pocket tool",
        },
        {
            "name": "Headlamp",
            "price_range": "$12-$30",
            "search": "led headlamp rechargeable",
        },
        {
            "name": "Waterproof Phone Pouch",
            "price_range": "$8-$15",
            "search": "waterproof phone pouch",
        },
        {
            "name": "Portable Grill",
            "price_range": "$25-$60",
            "search": "portable camping grill",
        },
        {
            "name": "Insulated Flask",
            "price_range": "$15-$35",
            "search": "insulated flask thermos",
        },
        {
            "name": "Rain Jacket",
            "price_range": "$30-$80",
            "search": "lightweight rain jacket",
        },
        {
            "name": "Trekking Poles",
            "price_range": "$25-$60",
            "search": "trekking poles collapsible",
        },
    ],
    "books": [
        {
            "name": "Bookmark Set",
            "price_range": "$8-$15",
            "search": "magnetic bookmark set",
        },
        {
            "name": "Book Light",
            "price_range": "$8-$20",
            "search": "book light reading rechargeable",
        },
        {
            "name": "Reading Journal",
            "price_range": "$10-$20",
            "search": "reading journal book log",
        },
        {
            "name": "Kindle Paperwhite",
            "price_range": "$80-$140",
            "search": "kindle paperwhite",
        },
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
        {
            "name": "Book Subscription Box",
            "price_range": "$30-$50",
            "search": "book subscription box gift",
        },
        {"name": "Bookends", "price_range": "$12-$30", "search": "decorative bookends"},
        {
            "name": "Book Stand",
            "price_range": "$12-$25",
            "search": "book stand holder reading",
        },
        {
            "name": "Audiobook Credit",
            "price_range": "$15-$30",
            "search": "audible gift card",
        },
    ],
    "music": [
        {
            "name": "Guitar Pick Set",
            "price_range": "$8-$12",
            "search": "guitar pick variety set",
        },
        {"name": "Capo", "price_range": "$8-$15", "search": "guitar capo"},
        {
            "name": "Tuner Clip-On",
            "price_range": "$8-$15",
            "search": "clip on guitar tuner",
        },
        {"name": "Ukulele", "price_range": "$35-$80", "search": "ukulele beginner"},
        {
            "name": "Bluetooth Speaker",
            "price_range": "$20-$60",
            "search": "portable bluetooth speaker",
        },
        {
            "name": "Vinyl Record",
            "price_range": "$15-$30",
            "search": "vinyl record album",
        },
        {
            "name": "Record Cleaning Kit",
            "price_range": "$12-$25",
            "search": "vinyl record cleaning kit",
        },
        {
            "name": "Headphones",
            "price_range": "$20-$80",
            "search": "over ear headphones",
        },
        {
            "name": "Keyboard Piano",
            "price_range": "$30-$80",
            "search": "mini keyboard piano beginner",
        },
        {
            "name": "Music Theory Book",
            "price_range": "$10-$20",
            "search": "music theory book beginner",
        },
    ],
    "art": [
        {
            "name": "Sketchbook",
            "price_range": "$8-$15",
            "search": "sketchbook drawing pad",
        },
        {
            "name": "Colored Pencils",
            "price_range": "$10-$25",
            "search": "professional colored pencils set",
        },
        {
            "name": "Watercolor Set",
            "price_range": "$12-$30",
            "search": "watercolor paint set",
        },
        {
            "name": "Canvas Pack",
            "price_range": "$12-$25",
            "search": "canvas pack painting",
        },
        {
            "name": "Paint Brush Set",
            "price_range": "$10-$20",
            "search": "paint brush set art",
        },
        {
            "name": "Drawing Tablet",
            "price_range": "$30-$80",
            "search": "drawing tablet digital art",
        },
        {
            "name": "Acrylic Paint Set",
            "price_range": "$15-$35",
            "search": "acrylic paint set",
        },
        {
            "name": "Calligraphy Set",
            "price_range": "$12-$25",
            "search": "calligraphy pen set",
        },
        {
            "name": "Art Supply Organizer",
            "price_range": "$15-$30",
            "search": "art supply organizer case",
        },
        {
            "name": "Coloring Book Adults",
            "price_range": "$8-$15",
            "search": "adult coloring book stress relief",
        },
    ],
}


def get_gifts(interests, budget):
    results = []
    for interest in interests:
        interest = interest.lower().strip()
        if interest in GIFT_CATEGORIES:
            for gift in GIFT_CATEGORIES[interest]:
                min_price = int(gift["price_range"].split("-")[0].replace("$", ""))
                if min_price <= budget:
                    results.append(
                        {
                            "name": gift["name"],
                            "price_range": gift["price_range"],
                            "amazon_url": build_amazon_url(gift["search"]),
                            "category": interest,
                        }
                    )
    return results
