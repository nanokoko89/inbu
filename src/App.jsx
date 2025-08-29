import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.scss";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Partner from "./pages/Partner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  );
}
