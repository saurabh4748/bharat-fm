import type { Room } from '../types/room';

function h(type: string, props: Record<string, unknown> = {}, ...children: unknown[]) {
  return {
    type,
    props: {
      ...props,
      children: children.length <= 1 ? children[0] : children,
    },
  };
}

export function ogTemplate(room: Room) {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${room.colors.background} 0%, ${room.colors.primary} 100%)`,
        color: room.colors.text,
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        padding: '60px',
      },
    },
    h(
      'div',
      {
        style: {
          fontSize: '40px',
          textTransform: 'uppercase',
          letterSpacing: '6px',
          opacity: 0.8,
          marginBottom: '24px',
        },
      },
      'bharat-fm'
    ),
    h(
      'div',
      {
        style: {
          fontSize: '110px',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '24px',
        },
      },
      room.name
    ),
    h(
      'div',
      {
        style: {
          fontSize: '44px',
          opacity: 0.9,
          maxWidth: '900px',
          lineHeight: 1.3,
        },
      },
      room.subtitle
    ),
    h(
      'div',
      {
        style: {
          position: 'absolute',
          bottom: '48px',
          fontSize: '28px',
          opacity: 0.7,
        },
      },
      room.description
    )
  );
}
