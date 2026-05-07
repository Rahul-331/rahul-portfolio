import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />
      
      <Skills />
      
      <Projects />

      <Contact />

    </div>
  )
}

export default App