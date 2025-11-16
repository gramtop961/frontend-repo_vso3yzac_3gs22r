import { Calendar, Edit3, Video, PackageCheck } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: Calendar, title: 'Book Online', desc: 'Pick a convenient time for your consultation.' },
    { icon: Edit3, title: 'Draft & Review', desc: 'We prepare your Will and refine it with your input.' },
    { icon: Video, title: 'Record Testimonial', desc: 'Capture your letter-of-wishes as a video.' },
    { icon: PackageCheck, title: 'Receive Final Will', desc: 'Get your digital copy and hardback delivery.' },
  ]

  return (
    <section id="process" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-fuchsia-500 grid place-items-center text-sm font-semibold">{i+1}</div>
              <Icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
