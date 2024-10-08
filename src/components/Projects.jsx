import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function ProjectShowcase() {
  const handleButtonClick = () => {
    console.log('Button clicked!')
  }

  const projects = [
    {
      title: "Amazing Project 1",
      description: "This is a fantastic project that showcases my skills in web development and design.",
      buttonText: "Github"
    },
    {
      title: "Incredible Project 2",
      description: "An innovative solution that demonstrates my problem-solving abilities and creativity.",
      buttonText: "Github"
    },
    {
      title: "Awesome Project 3",
      description: "A cutting-edge application that highlights my expertise in modern technologies.",
      buttonText: "Github"
    }
  ]

  return (
    <div className="min-h-[70vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center font-poppins text-white mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              onButtonClick={handleButtonClick}
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
            <BiRightArrowAlt size={24}/>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}