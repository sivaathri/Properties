import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header and navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main>
        <Hero />
        <Features />
        <Services />
      </main>
    </div>
  )
}

export default App
