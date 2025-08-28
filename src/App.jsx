import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Support from "./components/Pages/Support.jsx";
import Testimonials from "./components/Pages/Testimonials.jsx";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy.jsx";
import CaseStudies from "./components/Pages/CaseStudies.jsx";
import ClientAgreement from "./components/Pages/ClientAgreement.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import TermsOfService from "./components/Pages/TermsOfService.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import Login from "./components/Pages/Login.jsx";
import AdminDashboard from "./components/Pages/AdminDashboard.jsx"; // AdminDashboard import kiya

const ScrollToTopOnNavigate = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopOnNavigate />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/ClientAgreement" element={<ClientAgreement />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/login" element={<Login />} />
        {/* Naya route AdminDashboard ke liye */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
