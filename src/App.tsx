import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Main, SetPage } from "./pages";
import { Layout } from "./components";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/assets/set" element={<SetPage />} />
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
