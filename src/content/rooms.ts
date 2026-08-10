import type { Room } from '../types/room';

export const rooms: Room[] = [
  {
    id: 'saloon',
    slug: 'saloon',
    name: 'Saloon',
    nameDevanagari: 'सैलून',
    subtitle: 'Barber shop Bollywood',
    description: '90s Bollywood bangers that play at Indian barber shops.',
    icon: 'scissors',
    colors: {
      background: '#0f172a',
      primary: '#ef4444',
      accent: '#f59e0b',
      text: '#f8fafc',
    },
    player: {
      type: 'spotify',
      playlistId: '2AVjI8Z57bqMJVtU3V9X1Q',
      playlistUrl: 'https://open.spotify.com/playlist/2AVjI8Z57bqMJVtU3V9X1Q',
    },
    ytPlaylistId: 'PLJH8qKmRMHa4',
    ytMusicUrl: 'https://music.youtube.com/playlist?list=PLJH8qKmRMHa4',
    backgroundImage: '/rooms/saloon.webp',
    meta: {
      title: 'Saloon | bharat-fm',
      description: '90s Bollywood bangers that play at Indian barber shops.',
    },
  },
  {
    id: 'tapri',
    slug: 'tapri',
    name: 'Tapri',
    nameDevanagari: 'टपरी',
    subtitle: 'Roadside chai stall',
    description: 'The music you hear while waiting for your cutting chai and Parle-G.',
    icon: 'coffee',
    colors: {
      background: '#451a03',
      primary: '#fb923c',
      accent: '#facc15',
      text: '#fffbeb',
    },
    player: {
      type: 'spotify',
      playlistId: '14ghp69TCPlp5M5EpYTCao',
      playlistUrl: 'https://open.spotify.com/playlist/14ghp69TCPlp5M5EpYTCao',
    },
    ytPlaylistId: 'PLKUuJnyQ6FoA',
    ytMusicUrl: 'https://music.youtube.com/playlist?list=PLKUuJnyQ6FoA',
    backgroundImage: '/rooms/tapri.webp',
    meta: {
      title: 'Tapri | bharat-fm',
      description: 'The music you hear while waiting for your cutting chai and Parle-G.',
    },
  },
  {
    id: 'auto',
    slug: 'auto',
    name: 'Auto Rickshaw',
    nameDevanagari: 'ऑटो रिक्शा',
    subtitle: 'Auto-rickshaw rides',
    description: 'The music blaring from auto-rickshaws on busy Indian streets.',
    icon: 'car',
    colors: {
      background: '#1c1206',
      primary: '#f59e0b',
      accent: '#16a34a',
      text: '#fefce8',
    },
    player: {
      type: 'spotify',
      playlistId: '2AVjI8Z57bqMJVtU3V9X1Q',
    },
    ytPlaylistId: 'PLGVN5SGd8U8g',
    ytMusicUrl: 'https://music.youtube.com/playlist?list=PLGVN5SGd8U8g',
    backgroundImage: '/rooms/auto.webp',
    meta: {
      title: 'Auto Rickshaw | bharat-fm',
      description: 'The music blaring from auto-rickshaws on busy Indian streets.',
    },
  },
  {
    id: 'station',
    slug: 'station',
    name: 'Station',
    nameDevanagari: 'स्टेशन',
    subtitle: 'Railway station platform',
    description: 'Waiting on the platform, chai, announcements, and old film songs.',
    icon: 'train',
    colors: {
      background: '#0f1a0f',
      primary: '#4ade80',
      accent: '#facc15',
      text: '#f0fdf4',
    },
    player: {
      type: 'spotify',
      playlistId: '14ghp69TCPlp5M5EpYTCao',
    },
    ytPlaylistId: 'PLFHnzV6U3WMQ',
    ytMusicUrl: 'https://music.youtube.com/playlist?list=PLFHnzV6U3WMQ',
    backgroundImage: '/rooms/station.webp',
    meta: {
      title: 'Station | bharat-fm',
      description: 'Waiting on the platform, chai, announcements, and old film songs.',
    },
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getAllRoomSlugs(): string[] {
  return rooms.map((room) => room.slug);
}
