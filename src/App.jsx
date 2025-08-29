import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.scss";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}
