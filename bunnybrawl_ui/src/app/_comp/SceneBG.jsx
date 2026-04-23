// SceneBG.jsx — SceneBG component

import Particles from './Particles';

function SceneBG({ grid = true, scan = false, streaks = true, particles = true, particleCount = 36 }) {
  return (
    <>
      {grid && <div className="bg-grid" />}
      {scan && <div className="bg-scan" />}
      {streaks && <div className="bg-streaks" />}
      {particles && <Particles count={particleCount} />}
    </>
  );
}

export default SceneBG;