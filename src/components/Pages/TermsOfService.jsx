import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  Users,
  AlertTriangle,
  Clock,
  Shield,
} from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use our services.",
        "We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Service Description",
      content: [
        "We provide web development, mobile app development, design services, and related consulting services.",
        "Our services are provided on a project basis or through ongoing support agreements.",
        "All services are subject to availability and our acceptance of your project requirements.",
        "We reserve the right to refuse service to anyone for any reason at any time.",
      ],
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "You are responsible for providing accurate and complete information when engaging our services.",
        "You must provide necessary materials, content, and access required for project completion.",
        "You agree to communicate promptly and provide timely feedback during the project lifecycle.",
        "You are responsible for maintaining the confidentiality of any login credentials we provide.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "Upon full payment, you will own the rights to the custom work we create specifically for your project.",
        "We retain rights to our proprietary methods, techniques, and any pre-existing intellectual property.",
        "You grant us the right to use project examples for our portfolio and marketing purposes.",
        "We respect all third-party intellectual property rights and expect the same from our clients.",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements or service contracts.",
        "Generally, we require a deposit before starting work, with remaining payments due upon completion.",
        "Late payments may result in project delays or suspension of services.",
        "All prices are subject to applicable taxes and are quoted in the currency specified in your agreement.",
      ],
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for our services for the specific project in question.",
        "We are not liable for any indirect, incidental, special, or consequential damages.",
        "You agree to indemnify and hold us harmless from any claims arising from your use of our services.",
        "We provide our services 'as is' and make no warranties beyond those specified in our agreements.",
      ],
    },
  ];

  const additionalTerms = [
    {
      title: "Project Timelines",
      content:
        "While we strive to meet all agreed-upon deadlines, timelines are estimates and may be affected by project complexity, client responsiveness, and unforeseen circumstances.",
    },
    {
      title: "Revisions and Changes",
      content:
        "Minor revisions are typically included in our project scope. Major changes or additional features may require separate agreements and additional fees.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate services with written notice. Upon termination, you will be responsible for payment of all work completed up to the termination date.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the jurisdiction in which our company is incorporated, without regard to conflict of law principles.",
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
      id="TermsOfService"
      className="py-20 bg-gradient-to-br from-white to-purple-50"
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
              <Scale className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of our services. Please read them
            carefully before engaging with our services.
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
            Important Notice
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service constitute a legally binding agreement
            between you and our company. By using our services, you acknowledge
            that you have read, understood, and agree to be bound by these
            terms. If you are entering into this agreement on behalf of a
            company or other legal entity, you represent that you have the
            authority to bind such entity to these terms.
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
          className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8 mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Terms and Conditions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {term.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Questions About Our Terms?
          </h3>
          <p className="text-purple-100 mb-6">
            If you have any questions about these Terms of Service or need
            clarification on any points, please contact us before using our
            services. We're happy to discuss any concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Legal Team
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

export default TermsOfService;
