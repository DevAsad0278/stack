import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Clock, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide directly to us, such as your name, email address, phone number, and company details when you contact us or use our services.",
        "Technical information automatically collected when you visit our website, including IP address, browser type, operating system, and usage patterns.",
        "Communication records when you interact with our support team or participate in surveys and feedback sessions.",
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and customer support.",
        "To communicate with you about our services, updates, and promotional offers (with your consent).",
        "To analyze website usage patterns and optimize user experience.",
        "To comply with legal obligations and protect our rights and interests.",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "All data transmission is encrypted using SSL/TLS protocols.",
        "We regularly review and update our security practices to ensure the highest level of protection.",
        "Access to your personal information is restricted to authorized personnel only.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
        "We may share information with trusted service providers who assist us in operating our website and conducting our business.",
        "We may disclose information when required by law or to protect our rights and safety.",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Data Retention",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.",
        "Contact information is typically retained for the duration of our business relationship plus a reasonable period thereafter.",
        "You may request deletion of your personal information at any time, subject to legal and contractual obligations.",
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt-out of marketing communications at any time.",
        "You may request a copy of the personal information we hold about you.",
        "You can contact us to exercise any of these rights or if you have concerns about how we handle your data.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="privacy-policy"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 rounded-full p-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 15, 2025
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At our company, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines our practices regarding the collection, use, and
            disclosure of information that we receive from users of our website
            and services. We believe in transparency and want you to understand
            how your information is handled when you interact with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <div className="text-purple-600">{section.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Questions About Our Privacy Policy?
          </h3>
          <p className="text-purple-100 mb-6">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please don't hesitate to contact us.
            We're here to help and ensure your privacy concerns are addressed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Email: stackfellows684@gmail.com
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
