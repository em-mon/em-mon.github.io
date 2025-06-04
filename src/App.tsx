import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Experiences from './components/Experiences.tsx'
import Contact from './components/Contact.tsx'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div id="home" className="pt-10">
        <Home />
      </div>
      <div id="about" className="pt-10">
        <About />
      </div>
      <div id="experiences" className="pt-10">
        <Experiences />
      </div>
      <div id="contact" className="pt-10">
        <Contact />
      </div>
    </>
  )
}

export default App
