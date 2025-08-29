import React from "react";
import Header from "../components/Header/Header";
import Hero from "../sections/Hero/Hero";
import Support from "../sections/Support/Support";
import Shop from "../sections/Shop/Shop";
import Benefits from "../sections/Benefits/Benefits";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Support />
      <Shop />
      <Benefits />
    </div>
  );
}
