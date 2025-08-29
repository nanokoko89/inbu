import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.scss";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
