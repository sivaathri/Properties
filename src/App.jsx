import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
        <Services />
      </main>
    </div>
  )
}

export default App
