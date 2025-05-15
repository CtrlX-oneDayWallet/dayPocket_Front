import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Main, Asset1 } from "./pages";
import { Layout } from "./components";

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
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
