'use client';
import { Navigators } from "../types";
import { useDisplay } from "../_providers/DisplayProvider";
export function NavigationBar() {
  const { active, switchDisplay } = useDisplay();
  const items = [
    { id: "landing", label: "Arena" as Navigators },
    { id: "dashboard", label: "Dashboard" as Navigators },
    { id: "quiz", label: "Quick Match" as Navigators },
    { id: "solo", label: "Solo Play" as Navigators },
    { id: "logbook", label: "Logbook" as Navigators },
    { id: "leaderboard", label: "Leaderboard" as Navigators },
  ];

  return (
    <div className="w-full max-h-20 p-5 flex flex-row justify-between items-center">
      <div className="">
        <div className="">mascot.logo</div>
        <div>
          <div className="">Bunny Brawl</div>
        </div>
      </div>

      <div className="flex flex-row">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => switchDisplay(it.label)}
            className={`app-topnav-button ${active === it.id ? "app-topnav-button-active" : ""}`}
          >
            {it.label}
          </button>
        ))}
      </div>

      {/* <div className="">
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
        </div> */}
      </div>
    </div>
  );
}