import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <footer className="bg-black/80 border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Thrive Legal Services Limited — All rights reserved.</p>
        <p className="mt-2 text-xs">Traditional Will in hardback + digital copy + video testimonial. Optional Eternal Echo add-on.</p>
      </footer>
    </div>
  )
}

export default App
