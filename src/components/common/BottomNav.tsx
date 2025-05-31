import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/Home.svg";
import { ReactComponent as ChallengeIcon } from "../../assets/icons/Challenge.svg";
import { ReactComponent as AssetIcon } from "../../assets/icons/Asset.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Setting.svg";
import "./BottomNav.css";

interface BottomNavProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => {
    const tabs = [
        { key: "Home", icon: <HomeIcon /> },
        { key: "Challenge", icon: <ChallengeIcon /> },
        { key: "Asset", icon: <AssetIcon /> },
        { key: "Settings", icon: <SettingsIcon /> },
    ];

    return (
        <nav className="bottom-nav">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`tab ${activeTab === tab.key ? "active" : ""}`}
                >
                    <div className="icon">{tab.icon}</div>
                </button>
            ))}
        </nav>
    );
};

export default BottomNav;
