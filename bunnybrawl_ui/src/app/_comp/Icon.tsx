// Icon.tsx — thin wrapper around a switch of hand-authored SVG paths.
// SVG markup intentionally left as-is (will be replaced later with a proper icon set).

export type IconName =
  | "bolt" | "crown" | "target" | "trophy" | "shield" | "sword" | "book"
  | "user" | "users" | "play"  | "flame" | "spark"  | "wand"  | "arrow"
  | "check" | "x"    | "plus"  | "note"  | "clock"  | "gear"  | "medal"
  | "up"   | "link"  | "headset" | "moon" | "sun";

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: number;
};

function Icon({ name, size = 18, color = "currentColor", stroke = 1.8 }: IconProps) {
  const s = {
    width: size,
    height: size,
    stroke: color,
    fill: "none" as const,
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "bolt":    return <svg viewBox="0 0 24 24" {...s}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill={color} stroke="none" /></svg>;
    case "crown":   return <svg viewBox="0 0 24 24" {...s}><path d="M3 18h18M3 18 5 7l5 5 2-7 2 7 5-5 2 11" /></svg>;
    case "target":  return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color}/></svg>;
    case "trophy":  return <svg viewBox="0 0 24 24" {...s}><path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4zM6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3"/></svg>;
    case "shield":  return <svg viewBox="0 0 24 24" {...s}><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z"/></svg>;
    case "sword":   return <svg viewBox="0 0 24 24" {...s}><path d="m14 4 6 6-9 9-3 1 1-3 9-9-4-4zM8 18l-4 4M6 16l-3 3"/></svg>;
    case "book":    return <svg viewBox="0 0 24 24" {...s}><path d="M4 4h9a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4zM4 17a3 3 0 0 1 3-3h9"/></svg>;
    case "user":    return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/></svg>;
    case "users":   return <svg viewBox="0 0 24 24" {...s}><circle cx="9" cy="8" r="3.5"/><path d="M2 21c.5-4 3.5-6 7-6s6.5 2 7 6"/><circle cx="17" cy="7" r="3"/><path d="M22 18c-.5-3-2.5-4.5-5-4.5"/></svg>;
    case "play":    return <svg viewBox="0 0 24 24" {...s}><path d="M7 4v16l13-8L7 4z" fill={color} stroke="none"/></svg>;
    case "flame":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 2c2 4-2 5 0 9 1 2 5 1 6 5 1 5-4 6-6 6s-7-1-7-6c0-4 3-5 3-8 0-2 2-4 4-6z"/></svg>;
    case "spark":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>;
    case "wand":    return <svg viewBox="0 0 24 24" {...s}><path d="m4 20 14-14M16 4l4 4M13 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM19 10l.8 1.5 1.5.8-1.5.8L19 14.5l-.8-1.5-1.5-.8 1.5-.8L19 10z"/></svg>;
    case "arrow":   return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "check":   return <svg viewBox="0 0 24 24" {...s}><path d="m5 13 4 4L19 7"/></svg>;
    case "x":       return <svg viewBox="0 0 24 24" {...s}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case "plus":    return <svg viewBox="0 0 24 24" {...s}><path d="M12 5v14M5 12h14"/></svg>;
    case "note":    return <svg viewBox="0 0 24 24" {...s}><path d="M4 4h12l4 4v12H4V4zM16 4v4h4M8 12h8M8 16h6"/></svg>;
    case "clock":   return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "gear":    return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "medal":   return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="15" r="6"/><path d="M8 10 5 3h4l3 5M16 10l3-7h-4l-3 5"/></svg>;
    case "up":      return <svg viewBox="0 0 24 24" {...s}><path d="M6 15l6-6 6 6"/></svg>;
    case "link":    return <svg viewBox="0 0 24 24" {...s}><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>;
    case "headset": return <svg viewBox="0 0 24 24" {...s}><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H4v-6zM17 14h3v6h-3v-6zM20 18v1a3 3 0 0 1-3 3h-2"/></svg>;
    case "moon":    return <svg viewBox="0 0 24 24" {...s}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>;
    case "sun":     return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></svg>;
    default:        return null;
  }
}

export default Icon;
