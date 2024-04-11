import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home.page";
import { Welcome } from "./pages/welcome_/welcome.page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
