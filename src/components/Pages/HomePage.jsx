import React from "react";
import Hero from "../Hero";
import About from "../About";
import Services from "../Services";
import Technologies from "../Technologies";
import Team from "../Team";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Team />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
