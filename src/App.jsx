import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Cta from './components/Cta'
import Footer from './components/Footer'
import MobileDemo from './components/MobileDemo'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [showMobileDemo, setShowMobileDemo] = useState(false)

  return (
    <>
      {showMobileDemo && <MobileDemo onClose={() => setShowMobileDemo(false)} />}
      <Navbar />
      <Hero onOpenDemo={() => setShowMobileDemo(true)} />
      <Features />
      <Demo />
      <Cta />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
