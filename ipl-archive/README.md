# IPL Archive — Secure Static Frontend

A three-page, frontend-only IPL reference website covering IPL seasons **2008–2026** and the **2025 squads**.

## Pages

1. `index.html` — About the website and project.
2. `stats.html` — Season-by-season IPL statistics from 2008 to 2026.
3. `teams.html` — Searchable 2025 squads for all ten teams.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Local JavaScript data files
- No backend
- No database
- No external JavaScript libraries
- No CDN
- No runtime API calls
- No login or user data collection

## Project structure

```text
ipl-archive/
├── index.html
├── stats.html
├── teams.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── stats.js
│   └── teams.js
├── data/
│   ├── seasons.js
│   └── squads.js
└── config/
    └── nginx-security.conf
```

## How to run

### Option A — VS Code Live Server

1. Install VS Code.
2. Open the `ipl-archive` folder.
3. Install the **Live Server** extension if you already use it.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. Open the displayed local address.

### Option B — Python local server

If Python is installed:

```bash
cd ipl-archive
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/
```

Do not double-click the HTML files if you want to test the site exactly like a web server; using a local server avoids browser restrictions around local files.

### Option C — Node.js static server

If Node.js is installed:

```bash
npx serve .
```

Then open the local URL printed by the command.

## Security design

Because this is a frontend-only website, there is no server-side attack surface such as an API or database. The project still follows several security principles:

- No third-party JavaScript or CDN dependencies.
- No `eval()`, `new Function()`, or dynamic script execution.
- User search input is never inserted with `innerHTML`.
- Dynamic text is rendered with `textContent`.
- A restrictive Content Security Policy is included in the HTML.
- No forms, authentication, cookies, local storage, or personal data are used.
- `object-src 'none'` blocks embedded plugins.
- `frame-src 'none'` prevents framed content.
- `connect-src 'self'` prevents the page from calling arbitrary external APIs.
- `base-uri 'self'` protects against base-tag injection.
- The optional Nginx configuration adds stronger HTTP response headers.

### Important security limitation

A static frontend cannot be described as "100% secure." HTML `<meta>` security policies cannot replace HTTP response headers, and anyone who controls the hosting server can change the files.

For production hosting, configure the headers in `config/nginx-security.conf` (or equivalent headers in your hosting platform). In particular, serve the website over HTTPS.

## Updating IPL data

The website intentionally stores data locally so it has no runtime dependency on an API.

- Season history: `data/seasons.js`
- 2025 squads: `data/squads.js`

If you update the data, keep the same object property names so the existing JavaScript continues to work.

## Data notes

The 2026 season is treated as completed: Royal Challengers Bengaluru defeated Gujarat Titans by five wickets in the final on 31 May 2026. The 2026 Orange Cap was won by Vaibhav Sooryavanshi (776 runs), while Kagiso Rabada won the Purple Cap with 29 wickets.

The squad page is specifically an **IPL 2025 archive**, i.e. the last completed season before 2026.

## Data sources

The data was checked against current IPL/statistical reporting, including:

- IPL.com — IPL 2026 final and 2025 squad pages.
- IPL.com — 2025 complete squads.
- Gujarat Titans official site — 2026 season/final report.
- Wisden — IPL 2026 Purple Cap final table.
- Business Standard — IPL 2008–2026 Orange Cap and winners history.

For a production/public website, review the latest official IPL records before publishing any future-season update.

## Deployment

For a static host such as GitHub Pages, Netlify, Cloudflare Pages, or similar:

1. Upload the complete folder.
2. Make sure `index.html` is the site entry point.
3. Keep the relative directory structure unchanged.
4. Enable HTTPS.
5. Configure equivalent security headers if the host supports custom headers.

## License / branding

This is a learning/project template. IPL, team names, logos, player names, and related trademarks belong to their respective owners. Do not present this project as an official IPL website or use protected logos without permission.
