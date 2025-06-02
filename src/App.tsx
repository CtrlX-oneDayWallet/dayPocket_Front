import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Layout, Splash } from "./components";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  Main,
  HomePage,
  ChallengePage,
  AssetPage,
  SettingsPage,
  Asset1,
  AccountFail,
  AccountSuccess,
  DepositFail,
  DepositSuccess,
  TradeMain,
  TradeSuccess,
  TradeFail,
  Account1,
  Account2,
  Account3,
  Login,
  SignUp,
  Explanation,
  Correct,
  QuizMain,
  Finish1,
  Finish2,
  ReceiptMain,
  ReceiptSuccess,
  ReceiptFail,
  UserInfo,
} from "./pages";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/main" element={<Main />}>
            <Route path="Home" element={<HomePage />} />
            <Route path="Challenge" element={<ChallengePage />} />
            <Route path="Asset" element={<AssetPage />} />
            <Route path="Settings" element={<SettingsPage />} />
            <Route path="Userinfo" element={<UserInfo />} />
          </Route>
          <Route path="/asset/1" element={<Asset1 />} />
          <Route path="/quiz/explanation" element={<Explanation />} />\
          <Route path="/quiz/correct" element={<Correct />} />
          <Route path="/trade/main" element={<TradeMain />} />
          <Route path="/trade/success" element={<TradeSuccess />} />
          <Route path="/trade/fail" element={<TradeFail />} />
          <Route path="/asset/accountsuccess" element={<AccountSuccess />} />
          <Route path="/asset/accountfail" element={<AccountFail />} />
          <Route path="/asset/depositsuccess" element={<DepositSuccess />} />
          <Route path="/asset/depositfail" element={<DepositFail />} />
          <Route path="/asset/account/1" element={<Account1 />} />
          <Route path="/asset/account/2" element={<Account2 />} />
          <Route path="/asset/account/3" element={<Account3 />} />
          <Route path="/quiz/main" element={<QuizMain />} />
          <Route path="/quiz/finish1" element={<Finish1 />} />
          <Route path="/quiz/finish2" element={<Finish2 />} />
          <Route path="/receipt/main" element={<ReceiptMain />} />
          <Route path="/receipt/success" element={<ReceiptSuccess />} />
          <Route path="/receipt/fail" element={<ReceiptFail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isFreshVisit = navEntry?.type === "navigate";

    if (location.pathname === "/login" && isFreshVisit) {
      setShowSplash(true);
      const timer = setTimeout(() => setShowSplash(false), 3500);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [location.pathname]);

  if (showSplash) return <Splash />;
  return <AnimatedRoutes />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
