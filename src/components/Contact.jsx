import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-950 text-white"
    >

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-cyan-400 mb-10"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-gray-400 leading-10"
        >
          Interested in collaborating, internships, or projects?
          Feel free to connect with me.
          <br />
          <span className="text-white">
            Email: rahuldandu11@gmail.com
          </span>
          <br />
          <span className="text-white">
            Phone: +91 9550542331
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-10 text-5xl mt-14"
        >

          <a
            href="https://github.com/Rahul-331"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 hover:scale-125 transition-all" />
          </a>

          <a
            href="https://www.linkedin.com/in/dandu-rahul-a11691345/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 hover:scale-125 transition-all" />
          </a>

          <a href="mailto:rahuldandu11@gmail.com">
            <FaEnvelope className="hover:text-cyan-400 hover:scale-125 transition-all" />
          </a>

          <a href="tel:+919550542331">
            <FaPhone className="hover:text-cyan-400 hover:scale-125 transition-all" />
          </a>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact