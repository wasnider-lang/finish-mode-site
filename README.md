# Finish Mode storefront

A responsive three-page static storefront for **Finish Mode: The 25-Minute AI Focus Sprint Kit**.

## Pages

- `index.html` — main landing page
- `sales.html` — complete sales page and checkout CTA
- `delivery.html` — buyer delivery help and quick-start hub

## Activate checkout

Open `assets/js/config.js` and set:

```js
checkoutUrl: "YOUR_GUMROAD_PRODUCT_URL",
supportEmail: "YOUR_SUPPORT_EMAIL"
```

The delivery page uses the buyer's Gumroad Library instead of publishing the paid ZIP on this public website.

## GitHub Pages

1. In repository settings, open **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` or run the included workflow manually.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
