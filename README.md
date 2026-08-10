# bharat-fm

A multi-room ambiance web app recreating the sound and feel of 90s Indian everyday life.

## Rooms

- **Saloon** — 90s Bollywood bangers at the barber shop
- **Tapri** — Music from the roadside chai stall

Each room is a static page with its own shareable URL and OG image. Audio streams from Spotify via an embedded iframe — no audio files are self-hosted.

## Stack

- [Astro](https://astro.build/) — static site generation
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Satori](https://github.com/vercel/satori) + [resvg](https://github.com/yisibl/resvg-js) — build-time OG image generation

## Adding a new room

1. Edit `src/content/rooms.ts` and add a new room object.
2. Choose an `icon` value and add a matching inline SVG in `src/components/RoomCard.astro`.
3. Provide a Spotify playlist ID.
4. Run `npm run build` — the OG image is generated automatically.

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

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/).
3. Use the default settings — Astro is detected automatically.
4. Optional: set `SITE_URL` environment variable to your production domain (e.g. `https://bharat-fm.com`). If unset, `https://bharat-fm.com` is used as fallback.

### Netlify / Cloudflare Pages

Both work with the static `dist/` output:

- Build command: `npm run build`
- Publish directory: `dist`

## Environment variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `SITE_URL` | Used for absolute canonical and OG image URLs | `https://bharat-fm.com` |

## License

Private. All music/audio streams from Spotify.
