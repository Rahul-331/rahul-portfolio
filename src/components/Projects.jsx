import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Smart Garbage Level Detection",
      desc: "IoT-based monitoring system using ESP32, sensors, and cloud analytics for smarter waste management.",
      tech: "ESP32 • IoT • ThingSpeak"
    },

    {
      title: "CMOS Ring Oscillator On-Chip Clock Generation",
      desc: "Design and implementation of CMOS ring oscillator for efficient on-chip clock signal generation in VLSI circuits.",
      tech: "CMOS • VLSI • Ring Oscillator"
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
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-sm uppercase tracking-[0.4em] text-cyan-300"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg"
          >
            Selected projects that reflect my cross-disciplinary strengths in hardware, software, and data-driven systems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
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
        </motion.div>
      </div>
    </section>
  )
}

export default Projects