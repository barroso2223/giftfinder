import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../backend"))

from gifts import get_gifts, build_amazon_url, AFFILIATE_TAG


def test_affiliate_tag_exists():
    assert AFFILIATE_TAG == "barroso093-20"


def test_build_amazon_url_contains_tag():
    url = build_amazon_url("wireless earbuds")
    assert AFFILIATE_TAG in url


def test_build_amazon_url_formats_spaces():
    url = build_amazon_url("wireless earbuds")
    assert "+" in url


def test_get_gifts_return_list():
    results = get_gifts(["tech"], 50)
    assert isinstance(results, list)


def test_get_gifts_multiple_interests():
    results = get_gifts(["tech", "gaming"], 50)
    categories = [r["category"] for r in results]
    assert "tech" in categories
    assert "gaming" in categories


def test_get_gifts_invalid_interests():
    results = get_gifts(["invalid"], 50)
    assert results == []
