#!/bin/bash

# Скрипт для автоматичної відправки URL до Google Search Console

SITEMAP_URL="https://103med.taxi/sitemap.xml"

echo "🚀 Submitting sitemap to Google..."

# Метод 1: Через Google Search Console API (потрібен API key)
# curl -X POST "https://www.googleapis.com/webmasters/v3/sites/https%3A%2F%2F103med.taxi/sitemaps/$SITEMAP_URL"

# Метод 2: Через ping (старий спосіб, але працює)
curl "https://www.google.com/ping?sitemap=$SITEMAP_URL"

echo "✅ Done! Check Google Search Console in 24-48 hours"
