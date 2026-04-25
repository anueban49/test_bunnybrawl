// BrawlerBunny — the app mascot. Pre-authored 32×32 pixel art with 5 expression poses.
// SVG markup left as-is; only the React signature got typed.
import type { ReactNode } from "react";
import type { BunnyExpression } from "./types";

type Props = {
  size?: number;
  expression?: BunnyExpression;
  glow?: boolean;
  aura?: ReactNode;
};

function BrawlerBunny({ size = 120, expression = "ready", glow = true, aura }: Props) {
  const FUR = "#f4e4cc";
  const FUR_SHADE = "#d9c2a4";
  const FUR_DARK = "#a88b6b";
  const INNER_EAR = "#e8a3bf";
  const EYE = "#1a1024";
  const NOSE = "#d36b8a";
  const BAND = "#e53950";
  const BAND_SHADE = "#b02132";
  const ROBE = "#3b2f7a";
  const ROBE_SHADE = "#241a54";
  const ROBE_TRIM = "#ffd166";
  const WHITE = "#ffffff";

  const px = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect key={`${x}-${y}-${w}-${h}-${fill}`} x={x} y={y} width={w} height={h} fill={fill} />
  );

  const eyeOpen = (cx: number) => (<>
    {px(cx, 11, 2, 3, EYE)}
    {px(cx, 11, 1, 1, WHITE)}
  </>);
  const eyeClosed = (cx: number) => px(cx, 12, 2, 1, EYE);
  const eyeStar = (cx: number) => (<>
    {px(cx, 11, 2, 3, EYE)}
    {px(cx, 11, 1, 1, "#ffd166")}
  </>);

  // Mouth variants
  const mouthSmile = (<>{px(14, 16, 4, 1, EYE)}{px(15, 17, 2, 1, NOSE)}</>);
  const mouthOpen = (<>{px(14, 16, 4, 2, EYE)}{px(15, 17, 2, 1, '#ff4fd8')}</>);
  const mouthFlat = px(14, 16, 4, 1, EYE);

  let leftEye: ReactNode, rightEye: ReactNode, mouth: ReactNode;
  if (expression === "cheer")      { leftEye = eyeStar(11);   rightEye = eyeStar(19);   mouth = mouthOpen;  }
  else if (expression === "rest")  { leftEye = eyeClosed(11); rightEye = eyeClosed(19); mouth = mouthSmile; }
  else if (expression === "run")   { leftEye = eyeOpen(11);   rightEye = eyeOpen(19);   mouth = mouthOpen;  }
  else if (expression === "think") { leftEye = eyeClosed(11); rightEye = eyeOpen(19);   mouth = mouthFlat;  }
  else                              { leftEye = eyeOpen(11);   rightEye = eyeOpen(19);   mouth = mouthSmile; }

  const glowClass = glow
    ? "[filter:drop-shadow(0_0_10px_rgba(94,246,255,.45))_drop-shadow(0_0_24px_rgba(255,79,216,.3))]"
    : "";

  return (
    <svg className={`pixel overflow-visible ${glowClass}`} width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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

export default BrawlerBunny;