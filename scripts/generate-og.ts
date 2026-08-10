import fs from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { rooms } from '../src/content/rooms';
import { ogTemplate } from '../src/lib/og-template';
import type { Room } from '../src/types/room';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OUT_DIR = path.resolve(process.cwd(), 'public', 'og');

const defaultRoom: Room = {
  id: 'default',
  slug: 'default',
  name: 'bharat-fm',
  nameDevanagari: 'भारत एफएम',
  subtitle: 'everyday Indian ambiance',
  description: 'A growing series of rooms that recreate the sound and feel of 90s Indian everyday life.',
  icon: 'radio',
  colors: {
    background: '#0f172a',
    primary: '#f59e0b',
    accent: '#22d3ee',
    text: '#f8fafc',
  },
  player: { type: 'spotify', playlistId: '' },
  meta: {
    title: 'bharat-fm',
    description: 'A growing series of rooms that recreate the sound and feel of 90s Indian everyday life.',
  },
};

async function fetchInterFont(weight: 400 | 700) {
  const url = new URL('https://fonts.googleapis.com/css2');
  url.searchParams.set('family', `Inter:wght@${weight}`);

  const css = await fetch(url.toString(), {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
    },
  }).then((res) => res.text());

  const match = css.match(/src: url\((https:\/\/[^)]+)\)/);
  if (!match) {
    throw new Error(`Could not resolve Inter ${weight} font URL from Google Fonts CSS`);
  }

  const buffer = await fetch(match[1]).then((res) => res.arrayBuffer());
  return { name: 'Inter', data: buffer, weight, style: 'normal' as const };
}

async function generatePng(room: Room, filename: string, fonts: Awaited<ReturnType<typeof fetchInterFont>>[]) {
  const svg = await satori(ogTemplate(room), {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: OG_WIDTH },
  });
  const png = resvg.render();

  const outPath = path.join(OUT_DIR, `${filename}.png`);
  await fs.writeFile(outPath, png.asPng());
  console.log(`Generated OG image: ${outPath}`);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const fonts = await Promise.all([fetchInterFont(400), fetchInterFont(700)]);

  await generatePng(defaultRoom, 'default', fonts);

  for (const room of rooms) {
    await generatePng(room, room.slug, fonts);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
