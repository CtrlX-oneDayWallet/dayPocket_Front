import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Main, Asset1, Account1, Account2, Account3 } from "./pages";
import { Layout } from "./components";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/asset/1" element={<Asset1 />} />
          <Route path="/asset/account/1" element={<Account1 />} />
          <Route path="/asset/account/2" element={<Account2 />} />
          <Route path="/asset/account/3" element={<Account3 />} />
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

