import { useEffect, useState } from 'react'

export default function Hero() {
  const [SplineComp, setSplineComp] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    let mounted = true
    setHasError(false)
    // Dynamically import Spline so a failure won't crash the whole app
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default)
      })
      .catch(() => {
        if (mounted) setHasError(true)
      })
    return () => {
      mounted = false
    }
  }, [retryKey])

  const FallbackHero = (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b12] to-black" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_2px] shadow-fuchsia-500/60" />
              Futuristic Will Writing in the UK
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Your Will, preserved in hardcover, digital form, and a living message
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              The interactive 3D scene is unavailable right now. You can still explore everything below.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:from-fuchsia-400 hover:via-violet-400 hover:to-cyan-300 text-white px-6 py-3 transition-all shadow-[0_0_30px_-6px] shadow-fuchsia-500/60">
                Book Online Consultation
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors backdrop-blur">
                See Packages
              </a>
              <button onClick={() => setRetryKey((k) => k + 1)} className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors backdrop-blur">
                Retry 3D
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </section>
  )

  if (hasError) return FallbackHero

  const Spline = SplineComp

  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene (only renders when the module loads) */}
      {Spline ? (
        <div className="absolute inset-0">
          <Spline
            key={retryKey}
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => { /* scene loaded */ }}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      )}

      {/* Gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_2px] shadow-fuchsia-500/60" />
              Futuristic Will Writing in the UK
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Your Will, preserved in hardcover, digital form, and a living message
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Thrive Legal Services Limited crafts traditional hardback Wills, secure digital copies, and a video testimonial that conveys the true sentiment of your gifts. Add Eternal Echo to create a digital avatar your family can speak with—long after.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:from-fuchsia-400 hover:via-violet-400 hover:to-cyan-300 text-white px-6 py-3 transition-all shadow-[0_0_30px_-6px] shadow-fuchsia-500/60">
                Book Online Consultation
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors backdrop-blur">
                See Packages
              </a>
              {!Spline && (
                <button onClick={() => setRetryKey((k) => k + 1)} className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors backdrop-blur">
                  Retry 3D
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </section>
  )
}
