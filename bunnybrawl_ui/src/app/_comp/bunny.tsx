// bunny.jsx — Brawler Bunny mascot + pixel avatars
// All SVG-based, rendered pixelated so they look hand-drawn pixel art.

// ─────────── Brawler Bunny (the mascot / app logo) ───────────
// A 32x32 hand-authored pixel bunny with red bandana and scholar robe.
// Expressions: 'ready' | 'cheer' | 'run' | 'rest' | 'think'
function BrawlerBunny({ size = 120, expression = 'ready', glow = true, aura }) {
  // Palette
  const FUR = '#f4e4cc';
  const FUR_SHADE = '#d9c2a4';
  const FUR_DARK = '#a88b6b';
  const INNER_EAR = '#e8a3bf';
  const EYE = '#1a1024';
  const NOSE = '#d36b8a';
  const BAND = '#e53950';
  const BAND_SHADE = '#b02132';
  const ROBE = '#3b2f7a';
  const ROBE_SHADE = '#241a54';
  const ROBE_TRIM = '#ffd166';
  const WHITE = '#ffffff';
  const T = 'none';

  // 32x32 grid. Expression toggles change the face + pose.
  // Use a compact helper: rect(x,y,w,h,fill)
  const px = (x, y, w, h, fill) => (
    <rect key={`${x}-${y}-${w}-${h}-${fill}`} x={x} y={y} width={w} height={h} fill={fill} />
  );

  const eyeOpen = (cx) => (<>
    {px(cx, 11, 2, 3, EYE)}
    {px(cx, 11, 1, 1, WHITE)}
  </>);
  const eyeClosed = (cx) => px(cx, 12, 2, 1, EYE);
  const eyeStar = (cx) => (<>
    {px(cx, 11, 2, 3, EYE)}
    {px(cx, 11, 1, 1, '#ffd166')}
  </>);

  // Mouth variants
  const mouthSmile = (<>{px(14, 16, 4, 1, EYE)}{px(15, 17, 2, 1, NOSE)}</>);
  const mouthOpen = (<>{px(14, 16, 4, 2, EYE)}{px(15, 17, 2, 1, '#ff4fd8')}</>);
  const mouthFlat = px(14, 16, 4, 1, EYE);

  let leftEye, rightEye, mouth;
  if (expression === 'cheer') { leftEye = eyeStar(11); rightEye = eyeStar(19); mouth = mouthOpen; }
  else if (expression === 'rest') { leftEye = eyeClosed(11); rightEye = eyeClosed(19); mouth = mouthSmile; }
  else if (expression === 'run') { leftEye = eyeOpen(11); rightEye = eyeOpen(19); mouth = mouthOpen; }
  else if (expression === 'think') { leftEye = eyeClosed(11); rightEye = eyeOpen(19); mouth = mouthFlat; }
  else { leftEye = eyeOpen(11); rightEye = eyeOpen(19); mouth = mouthSmile; }

  return (
    <svg className="pixel" width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
         style={{ filter: glow ? 'drop-shadow(0 0 10px rgba(94,246,255,.45)) drop-shadow(0 0 24px rgba(255,79,216,.3))' : 'none',
                  overflow: 'visible' }}>
      {aura}
      {/* Ears (long, upright) */}
      {px(8, 1, 3, 8, FUR)}
      {px(9, 2, 1, 6, INNER_EAR)}
      {px(21, 1, 3, 8, FUR)}
      {px(22, 2, 1, 6, INNER_EAR)}
      {/* Ear shading */}
      {px(10, 1, 1, 8, FUR_SHADE)}
      {px(23, 1, 1, 8, FUR_SHADE)}

      {/* Head */}
      {px(9, 8, 14, 9, FUR)}
      {px(9, 8, 1, 9, FUR_SHADE)}
      {px(22, 8, 1, 9, FUR_SHADE)}
      {px(9, 16, 14, 1, FUR_SHADE)}

      {/* Bandana (red, tied) */}
      {px(8, 8, 16, 2, BAND)}
      {px(8, 9, 16, 1, BAND_SHADE)}
      {/* Bandana knot on side */}
      {px(7, 9, 1, 2, BAND)}
      {px(6, 10, 1, 1, BAND_SHADE)}
      {/* Bandana dots */}
      {px(11, 8, 1, 1, WHITE)}
      {px(15, 8, 1, 1, WHITE)}
      {px(19, 8, 1, 1, WHITE)}

      {/* Eyes */}
      {leftEye}
      {rightEye}

      {/* Cheeks */}
      {px(10, 14, 1, 1, '#ff9fb8')}
      {px(21, 14, 1, 1, '#ff9fb8')}

      {/* Nose + mouth */}
      {px(15, 15, 2, 1, NOSE)}
      {mouth}

      {/* Robe body (scholar) */}
      {px(8, 17, 16, 10, ROBE)}
      {px(8, 17, 16, 1, ROBE_TRIM)}      {/* shoulder trim */}
      {px(15, 17, 2, 10, '#ffd166')}     {/* sash/neckline gold */}
      {px(15, 18, 2, 1, '#b38023')}      {/* sash shade */}
      {px(8, 17, 1, 10, ROBE_SHADE)}
      {px(23, 17, 1, 10, ROBE_SHADE)}
      {/* Robe hem */}
      {px(7, 26, 18, 2, ROBE)}
      {px(7, 27, 18, 1, ROBE_TRIM)}

      {/* Arms / sleeves */}
      {expression === 'cheer' ? (
        <>
          {px(5, 14, 3, 3, ROBE)}
          {px(4, 13, 3, 2, FUR)}
          {px(24, 14, 3, 3, ROBE)}
          {px(25, 13, 3, 2, FUR)}
        </>
      ) : expression === 'run' ? (
        <>
          {px(5, 19, 4, 3, ROBE)}
          {px(4, 20, 2, 2, FUR)}
          {px(24, 17, 3, 3, ROBE)}
          {px(26, 16, 2, 2, FUR)}
        </>
      ) : (
        <>
          {px(6, 19, 3, 4, ROBE)}
          {px(6, 22, 3, 2, FUR)}
          {px(23, 19, 3, 4, ROBE)}
          {px(23, 22, 3, 2, FUR)}
        </>
      )}

      {/* Feet */}
      {expression === 'rest' ? (
        <>
          {px(9, 28, 5, 2, FUR)}
          {px(18, 28, 5, 2, FUR)}
          {px(9, 29, 5, 1, FUR_SHADE)}
          {px(18, 29, 5, 1, FUR_SHADE)}
        </>
      ) : expression === 'run' ? (
        <>
          {px(10, 28, 4, 2, FUR)}
          {px(18, 27, 4, 3, FUR)}
          {px(10, 29, 4, 1, FUR_DARK)}
        </>
      ) : (
        <>
          {px(11, 28, 3, 2, FUR)}
          {px(18, 28, 3, 2, FUR)}
          {px(11, 29, 3, 1, FUR_SHADE)}
          {px(18, 29, 3, 1, FUR_SHADE)}
        </>
      )}
    </svg>
  );
}

// ─────────── Generic pixel avatar ───────────
// A 64x64-equivalent pixel character built from a small grid.
// Supports hair, outfit, accessories for the customization screen.
function PixelAvatar({
  size = 120,
  hair = 'spike',       // 'spike' | 'bob' | 'buzz' | 'long' | 'mohawk'
  hairColor = '#5ef6ff',
  skin = '#f2c7a5',
  outfit = 'hoodie',    // 'hoodie' | 'tee' | 'jacket' | 'robe'
  outfitColor = '#ff4fd8',
  accessory = 'none',   // 'none' | 'glasses' | 'visor' | 'headset' | 'crown'
  effect = 'none',      // 'none' | 'sparkle' | 'flame' | 'electric'
  bg,                   // optional color chip behind
}) {
  const px = (x, y, w, h, fill) => (
    <rect key={`${x}${y}${w}${h}${fill}`} x={x} y={y} width={w} height={h} fill={fill} />
  );
  const shade = (c) => {
    // rough darken via mix
    const m = c.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (!m) return c;
    const d = (h) => Math.max(0, parseInt(h, 16) - 50).toString(16).padStart(2, '0');
    return `#${d(m[1])}${d(m[2])}${d(m[3])}`;
  };

  const skinSh = shade(skin);
  const outfitSh = shade(outfitColor);

  return (
    <svg className="pixel" width={size} height={size} viewBox="0 0 32 32"
         style={{ overflow: 'visible' }}>
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

// ─────────── Bunny running animation ───────────
// Simple CSS-driven "run" state: alternates leg poses via CSS keyframes
function RunningBunny({ size = 80 }) {
  return (
    <div className="bunny-runner" style={{ display: 'inline-block' }}>
      <BrawlerBunny size={size} expression="run" />
    </div>
  );
}

Object.assign(window, { BrawlerBunny, PixelAvatar, RunningBunny });
