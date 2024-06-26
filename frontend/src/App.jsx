import About from "./components/About"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      <div className="font-bebas">
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
