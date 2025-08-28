import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "4+", label: "Happy Clients" },
    { icon: Award, value: "3+", label: "Projects Completed" },
    { icon: TrendingUp, value: "1+", label: "Years Experience" },
    { icon: Target, value: "99%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">Stack Fellows</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers and digital marketing experts
            dedicated to helping businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas Into Digital Success
            </h3>
            <p className="text-gray-600 text-lg">
              At Stack Fellows, we believe that every business deserves a
              powerful digital presence. Our team combines technical expertise
              with creative vision to deliver solutions that not only look great
              but also drive measurable results.
            </p>
            <p className="text-gray-600 text-lg">
              From custom web development to comprehensive digital marketing
              strategies, we partner with you to achieve your business goals and
              exceed your expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
                Web Development
              </div>
              <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
                Digital Marketing
              </div>
              <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
                UI/UX Design
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-lg mb-6">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experience, and create lasting value
                in the digital economy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
