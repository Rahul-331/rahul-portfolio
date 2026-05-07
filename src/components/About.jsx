import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-950 text-white"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <p className="text-xl leading-10 text-gray-300">
          I am an Electronics and Communication Engineering student
          passionate about VLSI Design, Embedded Systems, Web Development,
          and AI-based projects.

          I have worked on projects involving ESP32, Machine Learning,
          Cadence Virtuoso, Digital Logic Design, and React-based
          applications.

          My goal is to build impactful technologies while continuously
          improving my development and problem-solving skills.
        </p>

      </motion.div>

    </section>
  )
}

export default About