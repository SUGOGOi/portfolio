import React, { useState } from 'react'
import "./App.scss"
import "./components/topbar/Topbar"
import Topbar from './components/topbar/Topbar'
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import About from './components/about/About'


const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Contact />
        <div className="foot">
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default App