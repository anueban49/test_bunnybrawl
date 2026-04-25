// AvatarEditor — right-hand tabbed editor (hair / body / outfit / extras).
import PixelAvatar from "../PixelAvatar";
import { PanelLabel, OptionGrid, OptionCard, SwatchRow } from "./AvatarPanels";
import type { AvatarConfig, HairStyle, OutfitStyle, Accessory, Effect } from "../types";

const HAIR:    HairStyle[]   = ["spike", "bob", "buzz", "long", "mohawk"];
const OUTFIT:  OutfitStyle[] = ["hoodie", "tee", "jacket", "robe"];
const ACC:     Accessory[]   = ["glasses", "visor", "headset", "crown"];
const EFFECTS: Effect[]      = ["sparkle", "flame", "none"];

const HAIR_COLORS   = ["#5ef6ff", "#ff4fd8", "#ffd166", "#b6ff6e", "#9f7bff", "#ff9566", "#1a1024", "#f4e4cc"];
const SKIN_COLORS   = ["#f9dcc0", "#f2c7a5", "#e0a888", "#c18867", "#8a5a3d", "#5a3d2a"];
const OUTFIT_COLORS = ["#ff4fd8", "#5ef6ff", "#ffd166", "#b6ff6e", "#9f7bff", "#ff9566", "#3b2f7a", "#e53950"];

export type AvatarTab = "hair" | "body" | "outfit" | "extras";

type Props = {
  tab: AvatarTab;
  state: AvatarConfig;
  set: <K extends keyof AvatarConfig>(k: K, v: AvatarConfig[K]) => void;
};

function AvatarEditor({ tab, state, set }: Props) {
  return (
    <>
      {tab === "hair" && (
        <>
          <PanelLabel>STYLE</PanelLabel>
          <OptionGrid items={HAIR} cols={5} render={(v) => (
            <OptionCard key={v} active={state.hair === v} onClick={() => set("hair", v)} label={v}>
              <PixelAvatar size={70} hair={v} hairColor={state.hairColor} skin={state.skin} outfit="tee" outfitColor="#333333" />
            </OptionCard>
          )} />
          <PanelLabel className="mt-4">COLOR</PanelLabel>
          <SwatchRow colors={HAIR_COLORS} active={state.hairColor!} onPick={(c) => set("hairColor", c)} />
        </>
      )}

      {tab === "body" && (
        <>
          <PanelLabel>SKIN TONE</PanelLabel>
          <SwatchRow colors={SKIN_COLORS} active={state.skin!} onPick={(c) => set("skin", c)} />
          <div className="flex justify-center mt-6">
            <PixelAvatar size={120} {...state} />
          </div>
        </>
      )}

      {tab === "outfit" && (
        <>
          <PanelLabel>STYLE</PanelLabel>
          <OptionGrid items={OUTFIT} cols={4} render={(v) => (
            <OptionCard key={v} active={state.outfit === v} onClick={() => set("outfit", v)} label={v}>
              <PixelAvatar size={70} {...state} outfit={v} />
            </OptionCard>
          )} />
          <PanelLabel className="mt-4">COLOR</PanelLabel>
          <SwatchRow colors={OUTFIT_COLORS} active={state.outfitColor!} onPick={(c) => set("outfitColor", c)} />
        </>
      )}

      {tab === "extras" && (
        <>
          <PanelLabel>ACCESSORY</PanelLabel>
          <OptionGrid items={ACC} cols={4} render={(v) => (
            <OptionCard key={v} active={state.accessory === v} onClick={() => set("accessory", v)} label={v}>
              <PixelAvatar size={70} {...state} accessory={v} />
            </OptionCard>
          )} />
          <PanelLabel className="mt-4">EFFECT</PanelLabel>
          <OptionGrid items={EFFECTS} cols={3} render={(v) => (
            <OptionCard
              key={v}
              active={(state.effect ?? "none") === v}
              onClick={() => set("effect", v === "none" ? "none" : v)}
              label={v}
            >
              <PixelAvatar size={70} {...state} effect={v === "none" ? undefined : v} />
            </OptionCard>
          )} />
        </>
      )}
    </>
  );
}

export default AvatarEditor;
