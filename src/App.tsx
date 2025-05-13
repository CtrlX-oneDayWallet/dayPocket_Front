import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import HomePage from "./pages/main/HomePage";
import ChallengePage from "./pages/main/ChallengePage";
import AssetPage from "./pages/main/AssetPage";
import SettingsPage from "./pages/main/SettingsPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/asset" element={<AssetPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

