import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'Angular', color: 'bg-red-500' },
        { name: 'Next.js', color: 'bg-black' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Python', color: 'bg-yellow-500' },
        { name: 'PHP', color: 'bg-purple-500' },
        { name: 'Java', color: 'bg-orange-500' },
        { name: 'Express.js', color: 'bg-gray-700' },
        { name: 'Django', color: 'bg-green-700' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', color: 'bg-green-500' },
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'MySQL', color: 'bg-orange-600' },
        { name: 'Redis', color: 'bg-red-600' },
        { name: 'Firebase', color: 'bg-yellow-600' },
        { name: 'Supabase', color: 'bg-green-600' },
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'AWS', color: 'bg-orange-500' },
        { name: 'Docker', color: 'bg-blue-500' },
        { name: 'Git', color: 'bg-orange-600' },
        { name: 'Figma', color: 'bg-purple-500' },
        { name: 'Vercel', color: 'bg-black' },
        { name: 'Netlify', color: 'bg-teal-500' },
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver modern, scalable, 
            and efficient solutions for your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className={`w-4 h-4 rounded-full ${tech.color} mr-3`}></div>
                    <span className="font-medium text-gray-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg mb-6">
              Technology evolves rapidly, and so do we. Our team continuously learns new 
              technologies and best practices to ensure we deliver the most modern and 
              effective solutions for your projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;