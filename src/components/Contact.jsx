import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Contact Me</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">Let's build something great together</h2>
            </div>
            <p className="text-xl leading-9 text-slate-300">
              Interested in collaborating, internships, or technology projects? I am available for opportunities that bridge embedded systems, AI, and frontend development.
            </p>
            <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/5">
              <div className="space-y-4 text-slate-200">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
                  <a href="mailto:rahuldandu11@gmail.com" className="mt-2 block text-lg font-semibold text-white hover:text-cyan-300">rahuldandu11@gmail.com</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Phone</p>
                  <a href="tel:+919550542331" className="mt-2 block text-lg font-semibold text-white hover:text-cyan-300">+91 9550542331</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {[
              { icon: <FaGithub />, title: "GitHub", desc: "Explore my code and open-source contributions.", href: "https://github.com/Rahul-331" },
              { icon: <FaLinkedin />, title: "LinkedIn", desc: "Connect professionally and view my latest updates.", href: "https://www.linkedin.com/in/dandu-rahul-a11691345/" },
              { icon: <FaEnvelope />, title: "Email", desc: "Reach out for collaboration, internships or project work.", href: "mailto:rahuldandu11@gmail.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="flex items-center gap-4 text-cyan-300 text-2xl sm:text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact