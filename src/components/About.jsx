import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">About Me</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white">Professional focus with technical depth</h2>
            </div>

            <p className="text-xl leading-9 text-slate-300">
              I am an Electronics and Communication Engineering student with a strong focus on VLSI design, embedded systems, and full-stack React development. I blend hardware expertise with modern software practices to build polished, production-ready solutions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-cyan-500/5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Areas of Expertise</p>
                <p className="mt-4 text-lg font-semibold">VLSI, Embedded Systems, AI, React</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-cyan-500/5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Approach</p>
                <p className="mt-4 text-lg font-semibold">Clean UI, strong logic, scalable systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-[2rem] border border-cyan-400/10 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10"
          >
            <h3 className="text-3xl font-semibold text-cyan-300 mb-6">What I build</h3>
            <ul className="space-y-4 text-slate-200">
              <li>• Responsive web apps with modern React and clean UX.</li>
              <li>• Embedded solutions using ESP32 and hardware design principles.</li>
              <li>• VLSI & digital design workflows with Cadence and Verilog.</li>
              <li>• Data-driven AI/ML prototypes for real-world systems.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About