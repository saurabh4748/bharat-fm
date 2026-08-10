import type { Room } from '../types/room';

export function getRoomSpotifyEmbedUrl(room: Room): string {
  if (room.player.type !== 'spotify') {
    throw new Error(`Unsupported player type for room ${room.id}: ${room.player.type}`);
  }
  return `https://open.spotify.com/embed/playlist/${room.player.playlistId}`;
}

export function getRoomPageUrl(room: Room, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, '');
  return `${base}/${room.slug}/`;
}

export function getRoomOgImageUrl(room: Room, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, '');
  return `${base}/og/${room.slug}.png`;
}

export function getRoomShareText(room: Room): string {
  return `${room.meta.title}: ${room.meta.description}`;
}
