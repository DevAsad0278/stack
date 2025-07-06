import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";

// ✅ WhatsApp icon SVG component
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="h-6 w-6 text-green-500"
  >
    <path d="M380.9 97.1c-45.5-45.5-106-70.6-170.3-70.6-64.3 0-124.7 25.1-170.3 70.6-45.5 45.5-70.6 106-70.6 170.3 0 37.7 8.6 74.5 25 108L0 512l138.2-36.4c32.5 13.2 67.2 20 102.4 20 64.3 0 124.7-25.1 170.3-70.6 45.5-45.5 70.6-106 70.6-170.3s-25.1-124.7-70.6-170.2zM228.6 392c-29.5 0-58.4-7.2-84.1-20.7l-5.9-3.2-82.1 21.6 21.8-80.2-3.3-6.1C52.9 277 46 249.4 46 221.2c0-100.2 81.7-181.9 181.9-181.9 48.6 0 94.2 18.9 128.5 53.1 34.3 34.3 53.1 80 53.1 128.5 0 100.2-81.7 181.9-181.9 181.9zm101-138.6c-5.6-2.8-33.1-16.3-38.2-18.1-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.1-17.7 21.8-6.5 4.2-12.1 1.4c-5.6-2.8-23.5-8.6-44.8-27.5-16.5-14.7-27.7-32.8-30.9-38.4-3.2-5.6-.3-8.7 2.5-11.5 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.7-1.4-2.8-12.5-30.1-17.2-41.3-4.5-10.8-9.2-9.3-12.5-9.4-3.2 0-6.9-.4-10.6-.4s-9.7 1.4-14.7 7c-5.1 5.6-19.3 18.9-19.3 46 0 27.1 19.7 53.2 22.5 56.9 2.8 3.7 38.8 59.2 94.1 83.1 13.1 5.7 23.2 9.1 31.2 11.7 13.1 4.1 25.1 3.5 34.6 2.1 10.6-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.2-26.6-1.3-2.3-5-3.8-10.6-6.5z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://stack-backend-1-j3jf.onrender.com/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        showToast(
          "success",
          "Thank you! Your message has been sent successfully."
        );
      } else {
        const errorData = await response.json();
        showToast("error", errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast(
        "error",
        "An unexpected error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "stackfellows@gmail.com",
      link: "mailto:stackfellows@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 303 0278190",
      link: "tel:+923030278190",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Johar Town, Lahore",
      link: "#",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      value: "+92 303 0278190",
      link: "https://wa.me/923030278190",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Whether you need a new website, mobile app, or digital marketing
                strategy, we're here to help. Get in touch and let's discuss how
                we can bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <info.icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-purple-600 text-white p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold mb-3">
                Why Choose Stack Fellows?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-200" />
                  Expert team with proven track record
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-200" />
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-200" />
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-200" />
                  Transparent communication throughout
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className={`fixed bottom-6 right-6 px-5 py-4 rounded-lg shadow-lg flex items-center space-x-3 text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <XCircle className="h-5 w-5" />
          )}
          <span>{toast.message}</span>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
