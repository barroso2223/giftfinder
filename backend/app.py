from flask import Flask, request, jsonify
from flask_cors import CORS
from gifts import get_gifts

app = Flask(__name__)
CORS(app)


@app.route("/api/gifts", methods=["POST"])
def gifts():
    data = request.json
    interests = data.get("interests", [])
    budget = data.get("budget", 50)
    results = get_gifts(interests, budget)
    return jsonify(results)


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
