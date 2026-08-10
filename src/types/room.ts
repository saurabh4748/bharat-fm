export interface RoomColors {
  background: string;
  primary: string;
  accent: string;
  text: string;
}

export interface RoomPlayer {
  type: 'spotify' | 'youtube';
  playlistId: string;
  playlistUrl?: string;
}

export interface RoomMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  nameDevanagari: string;
  subtitle: string;
  description: string;
  icon: string;
  colors: RoomColors;
  player: RoomPlayer;
  ytPlaylistId?: string;
  ytMusicUrl?: string;
  backgroundImage?: string;
  meta: RoomMeta;
}
