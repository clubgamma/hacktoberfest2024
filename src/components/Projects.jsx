import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function ProjectShowcase() {
  const handleButtonClick = (url) => {
    window.open(url, '_blank')
  }

  const projects = [
    {
      title: "Club Gamma Website (Vite+React)",
      description: "A modern and responsive website built using Vite and React, showcasing advanced web development skills and design aesthetics.",
      buttonText: "Github",
      url: "https://github.com/bhavyaGP/CPworld"
    },
    {
      title: "Club Gamma Website (Node.js)",
      description: "A robust backend for the Club Gamma website, developed using Node.js to handle complex data processing and ensure smooth operation.",
      buttonText: "Github",
      url: "https://github.com/bhavyaGP/CPworld"
    },
    {
      title: "Internet Speed-Tester (React)",
      description: "A React-based application to test internet speed, demonstrating proficiency in frontend development and user interface design.",
      buttonText: "Github",
      url: "https://github.com/bhavyaGP/CPworld"
    },
    {
      title: "Machine Learning Project (AI/ML)",
      description: "An advanced machine learning project that leverages AI technologies to deliver high performance and accurate predictions.",
      buttonText: "Github",
      url: "https://github.com/bhavyaGP/StudentFlow"
    },
    {
      title: "Core C/C++ Project (Innovative)",
      description: "An innovative project developed using C/C++, showcasing problem-solving abilities and efficient data processing techniques.",
      buttonText: "Github",
      url: "https://github.com/bhavyaGP/StudentFlow"
    }
  ]

  return (
    <div className="min-h-[70vh] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold font-poppins text-white mb-12">Our Projects 🧑‍💻</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              onButtonClick={() => handleButtonClick(project.url)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, buttonText, onButtonClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden font-dm-sans shadow-lg bg-gradient-to-br from-[#644f4f] to-[#5e4545] transition-all duration-300 ease-in-out transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <motion.h2
          className="text-2xl font-bold mb-2 text-white"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.7 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onButtonClick}
            className="bg-red-500 flex hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            {buttonText}
            <BiRightArrowAlt size={24} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}