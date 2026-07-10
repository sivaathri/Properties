import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Process from './components/Process'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header and navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main>
        <Hero />
        <Services />
        <Features />
        <Process />
      </main>

      {/* Footer area */}
      <Footer />
    </div>
  )
}

export default App
