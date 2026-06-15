# Soccer API — World Cup 2022

A small page that pulls live data from the [API-Sports Football API](https://www.api-football.com/) and displays World Cup 2022 fixtures and group standings.

## Features

- **Fixtures** — see all 64 matches with scores and dates
- **Standings** — see all 8 groups (A–H) with each team's rank, points, and W/D/L record
- Two separate GET requests so each view only fetches the data it needs

## Setup

1. **Clone the repo** and open the `soccer/` folder.

2. **Get a free API key** at [api-sports.io](https://dashboard.api-football.com/register).

3. **Create your config file** — copy the example file:

   ```bash
   cp config.example.js config.js
   ```

   Then open `config.js` and replace the placeholder with your real key:

   ```js
   const API_KEY = "your-real-key-here";
   ```

   `config.js` is gitignored, so your key stays private.

4. **Open `index.html`** in any browser. Click **Fixtures** or **Standings** to see the data.

## File structure

```
soccer/
├── index.html          # Page markup
├── index.css           # Styling
├── index.js            # Fetch + render logic
├── config.example.js   # Template config (safe to commit)
├── config.js           # Your real key (gitignored)
└── README.md
```

## Notes

- No build step required — just open `index.html` in a browser.
- The free API tier allows 100 requests/day.
