"use client";
import SceneBG from "../_comp/SceneBG";
import { NavigationBar } from "../_comp/NavigationBar";
export default function Page() {
  return (
    <>
      <SceneBG particleCount={22} />
      <NavigationBar/>
    </>
  );
}
