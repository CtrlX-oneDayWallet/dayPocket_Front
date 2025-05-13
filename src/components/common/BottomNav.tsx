import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/Home.svg";
import { ReactComponent as ChallengeIcon } from "../../assets/icons/Challenge.svg";
import { ReactComponent as AssetIcon } from "../../assets/icons/Asset.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Setting.svg";
import "./BottomNav.css";

const BottomNav = () => {
    const location = useLocation();

    const tabs = [
        { to: "/", icon: <HomeIcon /> },
        { to: "/challenge", icon: <ChallengeIcon /> },
        { to: "/asset", icon: <AssetIcon /> },
        { to: "/settings", icon: <SettingsIcon /> },
    ];

    return (
        <nav className="bottom-nav">
        {tabs.map((tab) => {
            const isActive = location.pathname === tab.to;
            return (
                <Link
                    key={tab.to}
                    to={tab.to}
                    className={`tab ${isActive ? "active" : ""}`}
                >
                    <div className="icon">{tab.icon}</div>
                </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
