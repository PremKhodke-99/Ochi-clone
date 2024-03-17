import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 font-["Neue_Montreal"]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />
    </div>
  )
}

export default App