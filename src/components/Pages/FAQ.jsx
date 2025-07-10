import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, digital marketing, and consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      id: 3,
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance optimization, and technical support. We believe in building long-term partnerships with our clients.",
    },
    {
      id: 4,
      question: "What is your development process?",
      answer:
        "Our development process follows agile methodologies with clear phases: Discovery & Planning, Design & Prototyping, Development & Testing, and Launch & Support. We maintain constant communication throughout the project and provide regular updates.",
    },
    {
      id: 5,
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We're experienced in collaborating with in-house teams and other vendors. We can integrate seamlessly with your existing workflows and provide the expertise you need to complement your team's skills.",
    },
    {
      id: 6,
      question: "What technologies do you work with?",
      answer:
        "We work with modern technologies including React, Node.js, Python, PHP, React Native, Flutter, and various cloud platforms. We choose the best technology stack based on your project requirements and business goals.",
    },
    {
      id: 7,
      question: "How do you ensure project quality?",
      answer:
        "Quality is our top priority. We implement rigorous testing procedures, code reviews, and follow industry best practices. Every project goes through multiple quality assurance phases before delivery.",
    },
    {
      id: 8,
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The best option depends on your project scope and requirements. We'll discuss pricing during our initial consultation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ" // ✅ ID added here
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
              <HelpCircle className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and
            how we can help your business succeed.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-purple-100 mb-6">
              We're here to help! Get in touch with our team for personalized
              assistance.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
