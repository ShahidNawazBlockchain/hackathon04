import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import Sectio2 from "./components/Sectio2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Shopping from "./components/shoping/Shoping";
import Footer1 from "./components/footer/Footer1";
import SecLast from "./components/SecLast";

function App() {
  const [order, setOrder] = useState(0);
  return (
    <div className="flex flex-col">
      <Hero order={order} />
      <Sectio2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Shopping setOrder={setOrder} />
      <SecLast />
      <Footer1 />
    </div>
  );
}

export default App;
