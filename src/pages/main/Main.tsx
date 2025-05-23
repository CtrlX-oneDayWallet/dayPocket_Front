import { useState } from "react";
import HomePage from "./HomePage";
import ChallengePage from "./ChallengePage";
import AssetPage from "./AssetPage";
import SettingsPage from "./SettingsPage";
import BottomNav from "@/components/common/BottomNav";

const Main = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "challenge":
        return <ChallengePage />;
      case "asset":
        return <AssetPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

    return (
        <>
            {renderPage()}
            <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
    );
};

export default Main;
