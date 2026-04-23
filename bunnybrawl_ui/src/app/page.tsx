"use client";
import { useDisplay } from "./_providers/DisplayProvider";
import DashboardCommand from "./_comp/DashboardCommand";
import LandingHero from "./_comp/landing";
import QuizBattle from "./_comp/quiz";
import SoloPlay from "./_comp/solo";
import Logbook from "./_comp/logbook";
import Leaderboard from "./_comp/leaderboard";
import ResultScreen from "./_comp/result";
import AvatarCustomize from "./_comp/avatar";

const RenderContent = () => {
  const { active, switchDisplay } = useDisplay();
  switch (active) {
    case "landing":
      return <LandingHero onNav={switchDisplay} />;
    case "dashboard":
      return <DashboardCommand onNav={switchDisplay} />;
    case "quiz":
      return <QuizBattle onNav={switchDisplay} />;
    case "solo":
      return <SoloPlay onNav={switchDisplay} />;
    case "leaderboard":
      return <Leaderboard onNav={switchDisplay} />;
    case "logbook":
      return <Logbook onNav={switchDisplay} />;
    case "avatar":
      return <AvatarCustomize onNav={switchDisplay} />;
    case "result":
      return <ResultScreen onNav={switchDisplay} />;
    default:
      return <DashboardCommand onNav={switchDisplay} />;
  }
};

export default function Page() {
  return <RenderContent />;
}
