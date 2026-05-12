import requests
import pytest

BASE_URL = "http://127.0.0.1:8080"


def test_health_check():
    response = requests.get(f"{BASE_URL}/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_gifts_returns_results():
    response = requests.post(
        f"{BASE_URL}/api/gifts", json={"interests": ["tech"], "budget": 50}
    )
    assert response.status_code == 200
    assert len(response.json()) > 0


def test_gifts_contain_affiliate_tag():
    response = requests.post(
        f"{BASE_URL}/api/gifts", json={"interests": ["gaming"], "budget": 50}
    )
    results = response.json()
    for gift in results:
        assert "barroso093-20" in gift["amazon_url"]


def test_gifts_have_required_fields():
    response = requests.post(
        f"{BASE_URL}/api/gifts", json={"interests": ["fitness"], "budget": 50}
    )
    results = response.json()
    for gift in results:
        assert "name" in gift
        assert "price_range" in gift
        assert "amazon_url" in gift
        assert "category" in gift


def test_unknown_interest_return_empty():
    response = requests.post(
        f"{BASE_URL}/api/gifts",
        json={"interests": ["underwater basket weaving"], "budget": 50},
    )
    assert response.status_code == 200
    assert len(response.json()) == 0
