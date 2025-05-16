import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
} from "./pages";
import { Layout } from "./components";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/asset/1" element={<Asset1 />} />
          <Route path="/trade/main" element={<TradeMain />} />
          <Route path="/trade/success" element={<TradeSuccess />} />
          <Route path="/trade/fail" element={<TradeFail />} />
          <Route path="/asset/accountsuccess" element={<AccountSuccess />} />
          <Route path="/asset/accountfail" element={<AccountFail />} />
          <Route path="/asset/depositsuccess" element={<DepositSuccess />} />
          <Route path="/asset/depositfail" element={<DepositFail />} />
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
