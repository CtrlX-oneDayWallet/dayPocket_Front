import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Main, Asset1 } from "./pages";
import { Layout, Splash } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/asset/1" element={<Asset1 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isFreshVisit = navEntry?.type === "navigate";

    if (isFreshVisit) {
      const timer = setTimeout(() => setShowSplash(false), 3500);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, []);

  if (showSplash) return <Splash />;

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
