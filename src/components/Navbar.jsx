import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import profilePic from "../assets/hero.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="group flex items-center gap-3 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-cyan-400 object-cover shadow-lg"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wide transition-all group-hover:text-cyan-300">
            Dandu Rahul
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg text-slate-200">
          {[
            { label: "Home", to: "home" },
            { label: "About", to: "about" },
            { label: "Skills", to: "skills" },
            { label: "Projects", to: "projects" },
            { label: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-cyan-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg text-slate-200">
            {[
              { label: "Home", to: "home" },
              { label: "About", to: "about" },
              { label: "Skills", to: "skills" },
              { label: "Projects", to: "projects" },
              { label: "Contact", to: "contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer transition-all hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar