import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Search, BarChart, Palette, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Security First']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android', 'Cross-platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'PPC Advertising']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize your digital marketing performance.',
      features: ['Google Analytics', 'Performance Tracking', 'Conversion Optimization', 'ROI Analysis']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Online Store', 'Payment Gateway', 'Inventory Management', 'Order Tracking']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services to help your business 
            succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;