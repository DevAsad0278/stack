import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "M Asad Ullah",
      role: "Project Manager & Developer",
      image: "/Asad0.jpeg",
      bio: "Skilled project manager and full-stack developer known for leading complex projects from concept to delivery with precision and a focus on quality.",
      social: {
        linkedin: "https://www.linkedin.com/in/mrrasad0278",
        github: "https://devasad.netlify.app/",
      },
    },
    {
      name: "Zeeshan Haider",
      role: "Full Stack Developer",
      image: "/zeeshan.png",
      bio: "Experienced full-stack developer specializing in building robust, scalable web applications and delivering seamless user experiences.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Khansha Rana",
      role: "Frontend Developer",
      image: "/KhanshaRana.jpeg",
      bio: "Passionate frontend developer focused on crafting clean, modern interfaces and ensuring pixel-perfect, responsive designs.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/khansha-rana-a02421373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/kr-dev09",
      },
    },
    {
      name: "Soma Khalil",
      role: "Digital Marketing Expert",
      image: "/Soma.jpeg",
      bio: "Creative digital marketer specializing in brand growth, social media strategy, and driving engagement through data-driven campaigns.",
      social: {
        linkedin: "www.linkedin.com/in/soma-khalil-94bb7a260",
        github: "https://github.com/Soma-builds",
      },
    },
    {
      name: "Rameen Meer",
      role: "Full Stack Developer",
      image: "/Rameeen.jpeg",
      bio: "Versatile full-stack developer skilled in developing end-to-end solutions, from intuitive frontend interfaces to powerful backend systems.",
      social: {
        linkedin: "www.linkedin.com/in/rameen-meer",
        github: "https://github.com/devrameen",
      },
    },
    {
      name: "Aman Fatima",
      role: "Full Stack Developer",
      image: "/Aman.jpeg",
      bio: "Dedicated full-stack developer with expertise in backend APIs, cloud services, and creating efficient, scalable architectures.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/aman-fatima-092357340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/AmanFatima19",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-purple-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, technical
            expertise, and strategic thinking to deliver exceptional results for
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-purple-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>

                    <motion.a
                      href={member.social.github}
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-purple-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
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
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for talented individuals who share our
              passion for creating exceptional digital experiences. If you're
              ready to make an impact, we'd love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
