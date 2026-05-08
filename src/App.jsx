import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),transparent_25%),#020617] text-white">
      <Navbar />

      <Hero />

      <About />
      
      <Skills />
      
      <Projects />

      <Contact />

      <Footer />
    </div>
  )
}

export default App