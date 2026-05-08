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
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Core Capabilities</p>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white"
          >
            Skills
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            A balanced toolkit across programming, embedded systems, hardware design, and developer workflows.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8 text-center shadow-2xl shadow-cyan-500/5 transition-all hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-5 text-5xl sm:text-6xl text-cyan-300 transition-colors group-hover:text-cyan-200">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills