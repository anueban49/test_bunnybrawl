// FriendRow — friend-list item (avatar + online dot + status + challenge button).
import PixelAvatar from "./PixelAvatar";
import type { MockFriend } from "../mocks/friends";

function FriendRow({ name, status, avatar }: MockFriend) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative shrink-0">
        <div className="rounded-lg overflow-hidden border border-(--border) p-0.5 bg-(--bg-2)">
          <PixelAvatar size={36} {...avatar} />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-(--bg-1) bg-(--win) shadow-[0_0_6px_var(--win)]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold">{name}</div>
        <div className="text-[11px] text-(--text-dim)">{status}</div>
      </div>
      <button className="bg-transparent border border-(--border) text-(--text-dim) rounded-md px-2 py-1 text-[10px] cursor-pointer font-pixel-mini tracking-[.15em]">
        CHALLENGE
      </button>
    </div>
  );
}

export default FriendRow;
