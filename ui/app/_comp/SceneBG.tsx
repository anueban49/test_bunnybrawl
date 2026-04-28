// SceneBG — full-screen decorative layer: grid + scanlines + glow streaks + floating dots.
// Each layer is an absolutely-positioned Tailwind div; Particles is client-only.
import Particles from "./Particles";

type Props = {
  grid?: boolean;
  scan?: boolean;
  streaks?: boolean;
  particles?: boolean;
  particleCount?: number;
};

function SceneBG({
  grid = true,
  scan = false,
  streaks = true,
  particles = true,
  particleCount = 36,
}: Props) {
  return (
    <>
      {grid && (
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      )}
      {scan && (
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(0deg,transparent_49%,rgba(94,246,255,.05)_50%,transparent_51%)] animate-[scan_4s_linear_infinite]" />
      )}
      {streaks && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(255,79,216,.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(94,246,255,.1)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(255,209,102,.1)_0%,transparent_50%)]" />
      )}
      {particles && <Particles count={particleCount} />}
    </>
  );
}

export default SceneBG;
