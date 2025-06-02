import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BottomNav from "@/components/common/BottomNav";
import "@/styles/main/MainLayout.css";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = location.pathname.split("/")[2] || "Home";
  const handleTabChange = (tab: string) => {
    navigate(`/main/${tab}`);
  };
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <Outlet />
      </div>
      <BottomNav activeTab={currentTab} setActiveTab={handleTabChange} />
    </div>
  );
};

export default Main;