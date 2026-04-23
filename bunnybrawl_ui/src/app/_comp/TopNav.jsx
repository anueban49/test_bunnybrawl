// TopNav.jsx — TopNav component

import Icon from "./Icon";
import NeonChip from "./NeonChip";
import PixelAvatar from "./PixelAvatar";
import BrawlerBunny from "./BrawlerBunny";
function TopNav({ onNav, active }) {
  const items = [
    { id: "landing", label: "Arena" },
    { id: "dashboard", label: "Dashboard" },
    { id: "quiz", label: "Quick Match" },
    { id: "solo", label: "Solo Play" },
    { id: "logbook", label: "Logbook" },
    { id: "leaderboard", label: "Leaderboard" },
  ];
  return (
    <div className="app-topnav">
      <div
        className="app-topnav-brand row gap-10"
        onClick={() => onNav("landing")}
      >
        <div className="app-topnav-brand-icon">
          <BrawlerBunny size={34} expression="ready" glow={false} />
        </div>
        <div>
          <div className="app-topnav-brand-title">Bunny Brawl</div>
          <div className="app-topnav-brand-subtitle">SEASON 4</div>
        </div>
      </div>

      <div className="app-topnav-items">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => onNav(it.id)}
            className={`app-topnav-button ${active === it.id ? "app-topnav-button-active" : ""}`}
          >
            {it.label}
          </button>
        ))}
      </div>

      <div className="app-topnav-actions row gap-10">
        <NeonChip color="gold">★ 2,480 XP</NeonChip>
        <button
          type="button"
          onClick={() =>
            window.dispatchEvent(new CustomEvent("bb:toggle-theme"))
          }
          className="app-icon-button"
        >
          <Icon name="moon" size={16} />
        </button>
        <div className="app-avatar-frame">
          <div className="app-avatar-inner">
            <PixelAvatar
              size={36}
              hair="spike"
              hairColor="#ffd166"
              outfit="hoodie"
              outfitColor="#ff4fd8"
              accessory="glasses"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
