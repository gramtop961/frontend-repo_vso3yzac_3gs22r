import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
              Futuristic Will Writing in the UK
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Your Will, preserved in hardcover, digital form, and a living message
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Thrive Legal Services Limited crafts traditional hardback Wills, secure digital copies, and a video testimonial that conveys the true sentiment of your gifts. Add Eternal Echo to create a digital avatar your family can speak with—long after.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex justify-center items-center rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 transition-colors">
                Book Online Consultation
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-colors">
                See Packages
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </section>
  )
}
