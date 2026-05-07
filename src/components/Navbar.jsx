import { Link } from "react-scroll"

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-black z-50">

      <h1 className="text-3xl font-bold text-cyan-400">
        Rahul
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition-all"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition-all"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition-all"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition-all"
          >
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar