export default function CTA() {
  return (
    <section id="book" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to secure your legacy?</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Book a no-obligation online consultation. We'll prepare your draft, record your video testimonial, and deliver both digital and hardback copies.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 px-6 py-3">Book Consultation</a>
          <a href="/test" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3">Check System Status</a>
        </div>
        <p className="mt-6 text-xs text-white/50">By booking, you agree to standard UK Will-writing terms and privacy policy.</p>
      </div>
    </section>
  )
}
