import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Smart Garbage Level Detection",
      desc: "IoT based smart monitoring system using ESP32 and ThingSpeak.",
      tech: "ESP32 • IoT • ThingSpeak"
    },

    {
      title: "Crop Yield Prediction",
      desc: "Machine learning model for predicting crop productivity.",
      tech: "Python • ML • Data Analysis"
    },

    {
      title: "Grain Moisture Meter",
      desc: "ESP32 based grain moisture detection and segregation system.",
      tech: "ESP32 • Sensors • Embedded"
    },

    {
      title: "Digital Lockout System",
      desc: "Secure digital access control system using embedded hardware and authentication logic.",
      tech: "Embedded Systems • Security • Digital Logic"
    }
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-16 text-center text-cyan-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 hover:scale-105 transition-all"
            >

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg leading-8 mb-6">
                {project.desc}
              </p>

              <div className="text-cyan-400 font-semibold">
                {project.tech}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects