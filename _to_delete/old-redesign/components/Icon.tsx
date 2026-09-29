type Props = { name: string; size?: number };

const paths: Record<string, React.ReactNode> = {
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z M9 12l2 2 4-4" />,
  check: <path d="M9 11l3 3 8-8 M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9" />,
  search: <path d="M11 4a7 7 0 100 14 7 7 0 000-14z M21 21l-4.3-4.3" />,
  gauge: <path d="M12 14l4-4 M3.3 17a9 9 0 1117.4 0 M12 5v2 M5.6 8.6l1.4 1.4 M18.4 8.6L17 10" />,
  handshake: <path d="M11 17l-2 2a2 2 0 01-3-3l4-4 M14 8l-3 3a1.5 1.5 0 002 2l3-3 3 3 3-3-6-6-2 2 M3 11l3-3 3 1 M21 14l-6 6" />,
  chart: <path d="M3 3v18h18 M7 15l4-4 3 3 6-6 M16 8h4v4" />,
  alert: <path d="M12 3l9.5 17h-19L12 3z M12 10v4 M12 17h.01" />,
  arrow: <path d="M5 12h14 M13 6l6 6-6 6" />,
  pin: <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z M12 7.5a2 2 0 100 4 2 2 0 000-4z" />,
  phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />,
  award: <path d="M12 3a6 6 0 100 12 6 6 0 000-12z M8.5 14L7 22l5-3 5 3-1.5-8" />,
  menu: <path d="M4 6h16 M4 12h16 M4 18h16" />,
  close: <path d="M6 6l12 12 M18 6L6 18" />,
  users: <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M9 3a4 4 0 100 8 4 4 0 000-8z M22 21v-2a4 4 0 00-3-3.9 M16 3.1a4 4 0 010 7.8" />,
  target: <path d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 7a5 5 0 100 10 5 5 0 000-10z M12 11a1 1 0 100 2 1 1 0 000-2z" />,
  book: <path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14z M4 19.5A2.5 2.5 0 006.5 22H20v-5" />,
};

export default function Icon({ name, size = 24 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.check}
    </svg>
  );
}
