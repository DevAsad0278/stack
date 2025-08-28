import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import Link, useNavigate, and useLocation
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "E-commerce", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const handleScrollToSection = (href) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage with the hash
      navigate(`/${href}`);
    } else {
      // If on the homepage, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Add an effect to handle scrolling when the page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to the top of the page on route change without a hash
      window.scrollTo(0, 0);
    }
  }, [location]); // Rerun the effect when the location object changes

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-center sm:text-left"
            >
              <Link
                to="/"
                className="flex items-center justify-center sm:justify-start"
              >
                <Code2 className="h-8 w-8 text-purple-400 mr-2" />
                <span className="text-2xl font-bold">Stack Fellows</span>
              </Link>
              <p className="text-gray-400">
                We build stunning websites and boost your brand with digital
                marketing. Your success is our mission.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center sm:justify-start text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>stackfellows684@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+92 309 1499394</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Johar Town, Lahore</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
                Services
              </h3>
              <ul className="space-y-2 w-full text-center sm:text-left">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
                Company
              </h3>
              <ul className="space-y-2 w-full text-center sm:text-left">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates on web
              development trends and digital marketing insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full min-w-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full sm:w-auto"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer with new links */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-4 md:mb-0 text-center md:text-left"
            >
              © {currentYear} Stack Fellows. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* New links section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center text-gray-400"
            >
              <Link
                to="/PrivacyPolicy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/FAQ" className="hover:text-white transition-colors">
                Frequently Asked Questions
              </Link>
              <Link
                to="/TermsOfService"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
