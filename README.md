# Knockout Crew Website

A complete static website ready for GitHub Pages.

## Before publishing

1. Search all files for `contact@knockoutcrew.eu.org` and replace it with your real working business email.
2. Review every statement and remove anything that is not accurate.
3. Do not add your home address, personal phone number, Seller ID, Partner Center screenshots, passwords, keys or certificates.

## Upload to GitHub Pages

1. Create a new public GitHub repository, for example `knockout-crew-website`.
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the top level.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then Save.
6. GitHub will provide a URL such as `https://USERNAME.github.io/knockout-crew-website/`.

## Connect a custom domain

After your domain is approved and DNS is active:

1. In GitHub: **Repository Settings → Pages → Custom domain**.
2. Enter your domain, for example `knockoutcrew.eu.org`.
3. Create a file named `CNAME` in the repository root containing only:

   `knockoutcrew.eu.org`

4. At your DNS provider, follow GitHub's current custom-domain instructions. For a subdomain, this commonly means a CNAME record pointing to `USERNAME.github.io`.
5. Wait for DNS verification, then enable **Enforce HTTPS**.

Do not guess DNS records if your provider gives different instructions. Follow GitHub Pages' current documentation.

## Local preview

Double-click `index.html`, or run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` — homepage
- `styles.css` — responsive design
- `script.js` — mobile menu, reveal animations and gallery lightbox
- `privacy.html` — basic static privacy notice
- `assets/images/` — screenshots and game artwork
