import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[85vh] flex items-center pt-24 pb-8 scroll-mt-28">
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-cyan-400">Dandu Rahul</span>,
          <span className="ml-3 inline-block">building intelligent systems and modern web experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed"
        >
          Electronics & Communication Engineering student focused on VLSI, embedded systems and React-driven interfaces. I design professional projects that combine hardware know-how with clean, responsive frontend experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-10 py-4 text-lg font-semibold text-black shadow-xl shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:scale-105 cursor-pointer"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-white/5 px-10 py-4 text-lg font-semibold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Projects Delivered", value: "10+" },
            { label: "Domain Focus", value: "VLSI & AI" },
            { label: "Experience", value: "Internships & Research" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-6 text-left shadow-xl shadow-cyan-500/5 transition-all hover:-translate-y-1 hover:border-cyan-400/50">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex items-center justify-center gap-8 text-4xl mt-12"
        >
          <a href="https://github.com/Rahul-331" target="_blank" rel="noreferrer" className="text-slate-200 transition-all hover:text-cyan-400 hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dandu-rahul-a11691345/" target="_blank" rel="noreferrer" className="text-slate-200 transition-all hover:text-cyan-400 hover:scale-110">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero