export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-black to-[#0b0b12] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Transparent pricing</h2>
          <p className="mt-2 text-white/70">All-inclusive Will package designed for clarity and peace of mind.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Traditional + Digital Will</h3>
            <p className="mt-2 text-white/70">Hardback copy, secure digital version, and a video testimonial (letter of wishes).</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">£195</span>
              <span className="text-white/60">+ VAT</span>
            </div>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>Online consultation included</li>
              <li>Drafting and revisions</li>
              <li>Guided video recording</li>
              <li>Final digital delivery + hardback</li>
            </ul>
            <a href="#book" className="mt-8 inline-flex rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 px-6 py-3">Book now</a>
          </div>

          <div id="echo" className="rounded-2xl border border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-8">
            <h3 className="text-2xl font-semibold">Eternal Echo (Add-on)</h3>
            <p className="mt-2 text-white/70">A digital avatar of you that loved ones can talk to after your demise.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>Personalised memory capture</li>
              <li>Conversational interface for family</li>
              <li>Secure, privacy-first setup</li>
            </ul>
            <a href="#book" className="mt-8 inline-flex rounded-md bg-white/10 hover:bg-white/20 px-6 py-3">Add Eternal Echo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
