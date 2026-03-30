import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Social from './components/Social';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Social />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App