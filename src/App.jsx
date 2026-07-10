import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Process from './components/Process'
import Footer from './components/Footer'
import Properties from './components/Properties'
import Documents from './components/Documents'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-white">
      {/* Header and navigation bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content area */}
      <main>
        {activeTab === 'Properties' ? (
          <Properties />
        ) : activeTab === 'Documents' ? (
          <Documents />
        ) : (
          <>
            <Hero />
            <Services />
            <Features />
            <Process />
          </>
        )}
      </main>

      {/* Footer area */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
