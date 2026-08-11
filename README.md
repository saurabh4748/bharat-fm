# भारत-fm

A multi-room ambiance web app recreating the sound and feel of everyday Indian life through music.

## Rooms

- **सलून (Saloon)** — 90s Bollywood bangers at the barber shop
- **टपरी (Tapri)** — Music from the roadside chai stall
- **ऑटो रिक्शा (Auto Rickshaw)** — Songs blaring from auto-rickshaws
- **स्टेशन (Station)** — Old film songs on railway platforms
- **ट्रक (Truck)** — Highway truck driver anthems
- **छत (Chhat)** — Rooftop evening vibes

Each room is a static page with its own shareable URL and OG image. Music plays via the YouTube IFrame Player API from curated YouTube playlists.

## Stack

- [Astro](https://astro.build/) — static site generation
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference) — music playback
- [Satori](https://github.com/vercel/satori) + [resvg](https://github.com/yisibl/resvg-js) — build-time OG image generation

## Adding a new room

1. Add a background image to `public/rooms/` (use `.webp` for best performance).
2. Edit `src/content/rooms.ts` and add a new room object with `ytPlaylistId` and `ytMusicUrl`.
3. Run `npm run build` — the OG image is generated automatically.

No new page file or component code is required.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`prebuild` generates OG images into `public/og/` before Astro builds the static site.

## Deploy (Netlify)

1. Push the repo to GitHub.
2. Import the project in [Netlify](https://app.netlify.com/).
3. Settings are auto-detected from `netlify.toml` — no manual config needed.
4. No environment variables required.

Or deploy via CLI:

```bash
npx netlify-cli deploy --prod --dir=dist
```

## Notes

- YouTube playlists must be **public** and videos must have **embedding enabled**.
- Videos that block embedding are auto-skipped.
- No API keys, accounts, or logins required.

## License

Private. All music streams from YouTube.
