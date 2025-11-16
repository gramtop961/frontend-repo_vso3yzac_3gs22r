import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import BackgroundFX from './components/BackgroundFX'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const FallbackSection = (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0b12] to-black flex items-center">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_2px] shadow-fuchsia-500/60" />
            Futuristic Will Writing in the UK
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Your Will, preserved in hardcover, digital form, and a living message
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Having trouble loading the interactive scene. You can still explore our services below, or retry in a moment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:from-fuchsia-400 hover:via-violet-400 hover:to-cyan-300 text-white px-6 py-3 transition-all shadow-[0_0_30px_-6px] shadow-fuchsia-500/60">
              Book Online Consultation
            </a>
            <a href="#pricing" className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors backdrop-blur">
              See Packages
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </section>
  )

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <ErrorBoundary fallback={FallbackSection}>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="py-20 text-center text-white/70">We encountered an issue loading this section. Please try again.</div>}>
          <Features />
          <Process />
          <Pricing />
          <CTA />
        </ErrorBoundary>
      </main>
      <footer className="bg-black/80 border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Thrive Legal Services Limited — All rights reserved.</p>
        <p className="mt-2 text-xs">Traditional Will in hardback + digital copy + video testimonial. Optional Eternal Echo add-on.</p>
      </footer>
    </div>
  )
}

export default App
