import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="h-[85vh] flex flex-col justify-center items-center text-center px-6"
    >

      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-bold mb-6"
      >
        Hi, I'm <span className="text-cyan-400">Rahul</span> 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-400 text-2xl max-w-3xl"
      >
        ECE Student | VLSI Enthusiast | React Developer |
        AI & Embedded Systems Projects
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-6 mt-10"
      >

        <button className="px-8 py-4 bg-cyan-500 rounded-2xl text-lg hover:bg-cyan-400 transition-all hover:scale-105">
          View Projects
        </button>

        <a
          href="/resume.pdf"
          download
          className="px-8 py-4 border border-cyan-400 rounded-2xl text-lg hover:bg-cyan-400 hover:text-black transition-all hover:scale-105"
        >
          Download Resume
        </a>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex gap-8 text-4xl mt-12"
      >

        <a
          href="https://github.com/Rahul-331"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-cyan-400 cursor-pointer transition-all hover:scale-125" />
        </a>

        <a
          href="https://www.linkedin.com/in/dandu-rahul-a11691345/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition-all hover:scale-125" />
        </a>

      </motion.div>

    </section>
  )
}

export default Hero