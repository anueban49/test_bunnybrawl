// PixelAvatar — 32×32 customisable pixel portrait (hair/skin/outfit/accessory/effect).
// SVG markup is intentionally preserved verbatim (will be swapped for a sprite later).
import type { AvatarConfig } from "./types";

type Props = AvatarConfig & { size?: number };

function PixelAvatar({
  size = 120,
  hair = "spike",
  hairColor = "#5ef6ff",
  skin = "#f2c7a5",
  outfit = "hoodie",
  outfitColor = "#ff4fd8",
  accessory = "none",
  effect = "none",
  bg,
}: Props) {
  const px = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect key={`${x}${y}${w}${h}${fill}`} x={x} y={y} width={w} height={h} fill={fill} />
  );
  const shade = (c: string) => {
    const m = c.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (!m) return c;
    const d = (h: string) => Math.max(0, parseInt(h, 16) - 50).toString(16).padStart(2, "0");
    return `#${d(m[1])}${d(m[2])}${d(m[3])}`;
  };

  const skinSh = shade(skin);
  const outfitSh = shade(outfitColor);

  return (
    <svg className="pixel overflow-visible" width={size} height={size} viewBox="0 0 32 32">
      {bg && <rect x="0" y="0" width="32" height="32" fill={bg} rx="2" />}

      {/* Neck */}
      {px(14, 17, 4, 2, skinSh)}

      {/* Head */}
      {px(10, 7, 12, 12, skin)}
      {px(10, 7, 1, 12, skinSh)}
      {px(21, 7, 1, 12, skinSh)}
      {px(10, 18, 12, 1, skinSh)}

      {/* Ears */}
      {px(9, 11, 1, 3, skin)}
      {px(22, 11, 1, 3, skin)}

      {/* Hair variants */}
      {hair === 'spike' && (<>
        {px(10, 5, 12, 3, hairColor)}
        {px(11, 4, 2, 1, hairColor)}
        {px(15, 3, 2, 2, hairColor)}
        {px(19, 4, 2, 1, hairColor)}
        {px(10, 7, 12, 1, shade(hairColor))}
      </>)}
      {hair === 'bob' && (<>
        {px(9, 6, 14, 4, hairColor)}
        {px(9, 9, 1, 6, hairColor)}
        {px(22, 9, 1, 6, hairColor)}
        {px(9, 6, 14, 1, shade(hairColor))}
      </>)}
      {hair === 'buzz' && (<>
        {px(10, 6, 12, 2, hairColor)}
        {px(10, 7, 12, 1, shade(hairColor))}
      </>)}
      {hair === 'long' && (<>
        {px(9, 6, 14, 3, hairColor)}
        {px(8, 8, 2, 12, hairColor)}
        {px(22, 8, 2, 12, hairColor)}
        {px(8, 19, 2, 1, shade(hairColor))}
        {px(22, 19, 2, 1, shade(hairColor))}
      </>)}
      {hair === 'mohawk' && (<>
        {px(14, 3, 4, 5, hairColor)}
        {px(15, 2, 2, 1, hairColor)}
        {px(14, 7, 4, 1, shade(hairColor))}
      </>)}

      {/* Eyes */}
      {px(13, 12, 2, 2, '#1a1024')}
      {px(17, 12, 2, 2, '#1a1024')}
      {px(13, 12, 1, 1, '#fff')}
      {px(17, 12, 1, 1, '#fff')}

      {/* Mouth */}
      {px(14, 15, 4, 1, '#b34a5a')}

      {/* Accessories */}
      {accessory === 'glasses' && (<>
        {px(12, 12, 3, 2, 'none')}
        <rect x="12" y="12" width="3" height="2" fill="none" stroke="#1a1024" strokeWidth=".5" />
        <rect x="17" y="12" width="3" height="2" fill="none" stroke="#1a1024" strokeWidth=".5" />
        {px(15, 13, 2, 1, '#1a1024')}
      </>)}
      {accessory === 'visor' && (<>
        {px(9, 10, 14, 2, '#5ef6ff')}
        {px(9, 10, 14, 1, '#fff')}
        {px(9, 11, 14, 1, shade('#5ef6ff'))}
      </>)}
      {accessory === 'headset' && (<>
        {px(9, 8, 1, 5, '#333')}
        {px(22, 8, 1, 5, '#333')}
        {px(10, 7, 12, 1, '#333')}
        {px(8, 12, 2, 2, '#ff4fd8')}
        {px(22, 12, 2, 2, '#ff4fd8')}
      </>)}
      {accessory === 'crown' && (<>
        {px(10, 3, 12, 2, '#ffd166')}
        {px(11, 2, 1, 1, '#ffd166')}
        {px(15, 1, 2, 2, '#ffd166')}
        {px(20, 2, 1, 1, '#ffd166')}
        {px(13, 4, 1, 1, '#ff4fd8')}
        {px(18, 4, 1, 1, '#5ef6ff')}
      </>)}

      {/* Outfit */}
      {outfit === 'hoodie' && (<>
        {px(8, 19, 16, 11, outfitColor)}
        {px(8, 19, 16, 1, shade(outfitColor))}
        {/* hood */}
        {px(9, 17, 14, 3, outfitColor)}
        {px(14, 19, 4, 2, skinSh)}
        {/* drawstrings */}
        {px(14, 21, 1, 4, '#fff')}
        {px(17, 21, 1, 4, '#fff')}
      </>)}
      {outfit === 'tee' && (<>
        {px(8, 19, 16, 11, outfitColor)}
        {px(8, 19, 16, 1, shade(outfitColor))}
        {px(15, 19, 2, 3, skin)}
      </>)}
      {outfit === 'jacket' && (<>
        {px(8, 19, 16, 11, outfitSh)}
        {px(14, 19, 1, 11, '#ffd166')}
        {px(17, 19, 1, 11, '#ffd166')}
        {px(15, 19, 2, 3, '#fff')}
      </>)}
      {outfit === 'robe' && (<>
        {px(7, 19, 18, 11, outfitColor)}
        {px(7, 19, 18, 1, '#ffd166')}
        {px(15, 19, 2, 11, '#ffd166')}
      </>)}

      {/* Effects */}
      {effect === 'sparkle' && (<>
        {px(3, 6, 1, 1, '#ffd166')}
        {px(28, 10, 1, 1, '#5ef6ff')}
        {px(4, 20, 1, 1, '#ff4fd8')}
        {px(29, 22, 1, 1, '#fff')}
      </>)}
      {effect === 'flame' && (<>
        {px(6, 22, 1, 4, '#ff9566')}
        {px(25, 22, 1, 4, '#ff4fd8')}
        {px(5, 24, 1, 2, '#ffd166')}
      </>)}
      {effect === 'electric' && (<>
        {px(2, 14, 2, 1, '#5ef6ff')}
        {px(28, 14, 2, 1, '#5ef6ff')}
        {px(4, 15, 1, 1, '#fff')}
        {px(27, 15, 1, 1, '#fff')}
      </>)}
    </svg>
  );
}

export default PixelAvatar;