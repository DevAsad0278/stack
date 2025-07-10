import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import LiveChatBox from "./LiveChatBox";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill="#fff"
      d="M12.004 2.001a9.998 9.998 0 0 0-8.69 14.815l-1.29 4.708 4.825-1.27A10 10 0 1 0 12.004 2Z"
    />
    <path
      fill="#25D366"
      d="M12 0C5.373 0 0 5.372 0 12c0 2.114.551 4.094 1.51 5.825L0 24l6.297-1.692A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Zm5.72 17.378c-.27.753-1.57 1.415-2.17 1.508-.573.09-1.273.128-2.05-.128-.473-.15-1.08-.348-1.866-.682-3.29-1.43-5.438-4.965-5.6-5.205-.163-.24-1.34-1.785-1.34-3.407 0-1.623.85-2.422 1.152-2.756.3-.334.655-.418.873-.418.22 0 .437.002.628.01.2.01.47-.076.736.56.27.64.915 2.21.996 2.37.08.16.135.348.025.565-.11.217-.163.35-.318.534-.16.19-.34.422-.486.566-.162.158-.33.33-.142.648.187.316.825 1.362 1.77 2.206 1.22 1.084 2.247 1.42 2.563 1.58.316.16.498.142.68-.084.18-.227.778-.91.987-1.22.207-.31.41-.258.693-.15.284.107 1.795.847 2.102 1.002.306.156.51.233.583.363.07.13.07.756-.2 1.51Z"
    />
  </svg>
);

const Support = () => {
  const [showChat, setShowChat] = useState(false);

  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description:
        "Get detailed help via email. We typically respond within 24 hours.",
      action: "Send Email",
      contact: "stackfellows684@gmail.com",
      availability: "24/7",
      color: "bg-blue-500",
      link: "mailto:stackfellows684@gmail.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description:
        "Speak directly with our support team for immediate assistance.",
      action: "Call Now",
      contact: "0309 1499394",
      availability: "Mon-Fri 9AM-6PM EST",
      color: "bg-green-500",
      link: "tel:03091499394",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description:
        "Chat with our support team in real-time for quick solutions.",
      action: "Start Chat",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST",
      color: "bg-purple-500",
      onClick: () => setShowChat(true),
    },
    {
      icon: <WhatsAppIcon />,
      title: "WhatsApp Support",
      description:
        "Chat with us directly on WhatsApp for quick support and answers.",
      action: "WhatsApp Now",
      contact: "+92 309 1499394",
      availability: "24/7",
      color: "bg-green-600",
      link: "https://wa.me/923091499394",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Support" // ✅ Corrected ID here
      className="py-20 bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 rounded-full p-4">
              <Send className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Support?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you anytime. Choose the support option that works
            best for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div
                className={`${option.color} rounded-xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{option.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {option.description}
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900">
                  {option.contact}
                </p>
                <p className="text-xs text-gray-500">{option.availability}</p>
              </div>
              {option.link ? (
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105"
                >
                  {option.action}
                </a>
              ) : (
                <button
                  onClick={option.onClick}
                  className="block text-center w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105"
                >
                  {option.action}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {showChat && <LiveChatBox onClose={() => setShowChat(false)} />}
    </section>
  );
};

export default Support;
