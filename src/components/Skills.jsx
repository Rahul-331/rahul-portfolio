import { motion } from "framer-motion"

import {
  FaPython,
  FaGithub,
} from "react-icons/fa"

import {
  SiJavascript,
  SiEspressif,
} from "react-icons/si"

function Skills() {

  const skills = [
    {
      icon: "☕",
      name: "Java"
    },

    {
      icon: <SiJavascript />,
      name: "JavaScript"
    },

    {
      icon: <FaPython />,
      name: "Python"
    },

    {
      icon: "💻",
      name: "C"
    },

    {
      icon: <SiEspressif />,
      name: "ESP32"
    },

    {
      icon: <FaGithub />,
      name: "GitHub"
    },

    {
      icon: "⚡",
      name: "Verilog"
    },

    {
      icon: "🧠",
      name: "SystemVerilog"
    },

    {
      icon: "💻",
      name: "Cadence Virtuoso"
    }
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-950 text-white"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black border border-gray-800 rounded-3xl p-10 flex flex-col items-center justify-center hover:border-cyan-400 hover:scale-105 transition-all"
            >

              <div className="text-6xl text-cyan-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-center">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills