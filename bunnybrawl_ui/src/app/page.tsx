"use client";
// page.tsx — root router. Picks the screen component based on DisplayProvider state.
import { useDisplay } from "./_providers/DisplayProvider";
import DashboardCommand from "./_comp/DashboardCommand";
import LandingHero from "./_comp/landing";
import QuizBattle from "./_comp/quiz";
import SoloPlay from "./_comp/solo";
import Logbook from "./_comp/logbook";
import Leaderboard from "./_comp/leaderboard";
import ResultScreen from "./_comp/result";
import AvatarCustomize from "./_comp/avatar";

function RenderContent() {
  const { active } = useDisplay();
  switch (active) {
    case "landing":     return <LandingHero />;
    case "dashboard":   return <DashboardCommand />;
    case "quiz":        return <QuizBattle />;
    case "solo":        return <SoloPlay />;
    case "leaderboard": return <Leaderboard />;
    case "logbook":     return <Logbook />;
    case "avatar":      return <AvatarCustomize />;
    case "result":      return <ResultScreen />;
    default:            return <DashboardCommand />;
  }
}

export default function Page() {
  return <RenderContent />;
}
