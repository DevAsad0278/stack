import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Technologies from "./components/Technologies.jsx";
import Team from "./components/Team.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import Support from "./components/Pages/Support.jsx";
import Testimonials from "./components/Pages/Testimonials.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy.jsx";
import CaseStudies from "./components/Pages/CaseStudies.jsx";
import TermsOfService from "./components/Pages/TermsOfService.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Team />
      <Portfolio />
      <Testimonials />
      <PrivacyPolicy />
      <FAQ />
      <Contact />
      <Support />
      <TermsOfService />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
