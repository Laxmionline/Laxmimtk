import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Markets from './components/Markets'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Header />
      <Hero />
      <Features />
      <Markets />
      <HowItWorks />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
