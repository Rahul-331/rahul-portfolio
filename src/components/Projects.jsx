import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Smart Garbage Level Detection",
      desc: "IoT-based monitoring system using ESP32, sensors, and cloud analytics for smarter waste management.",
      tech: "ESP32 • IoT • ThingSpeak"
    },

    {
      title: "Crop Yield Prediction",
      desc: "ML-driven forecasting model to improve agricultural planning and productivity.",
      tech: "Python • ML • Data Analysis"
    },

    {
      title: "Grain Moisture Meter",
      desc: "Real-time moisture detection solution for safer storage and efficient grain handling.",
      tech: "ESP32 • Sensors • Embedded"
    },

    {
      title: "Digital Lockout System",
      desc: "Secure access control project combining hardware logic with embedded security design.",
      tech: "Embedded Systems • Security • Digital Logic"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Featured Work</p>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white"
          >
            Projects
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            Selected projects that reflect my cross-disciplinary strengths in hardware, software, and data-driven systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-cyan-500/5 transition-all hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Project</span>
                <span className="text-slate-400 text-sm">{index + 1}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-slate-300 leading-8 mb-6">{project.desc}</p>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-cyan-300 text-sm font-medium">
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