import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Layout, Splash } from "./components";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Main,
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
  SignUp
  Explanation,
  Correct,
  QuizMain,
  Finish1,
  Finish2,
  ReceiptMain,
  ReceiptSuccess,
  ReceiptFail,
} from "./pages";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
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
