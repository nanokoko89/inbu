import React from "react";
import Header from "../components/Header/Header";
import Hero from "../sections/Hero/Hero";
import Support from "../sections/Support/Support";
import Shop from "../sections/Shop/Shop";
import Benefits from "../sections/Benefits/Benefits";
import PartnerStart from "../sections/PartnerStart";

export default function Partner() {
  return (
    <div>
      <Header />
      <PartnerStart />
      <Support />
      <Shop />
      <Benefits />
    </div>
  );
}
