import { Shield, FileText, Video, BrainCircuit, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Shield,
      title: 'Regulated & Secure',
      desc: 'Built for UK clients with robust security and compliant processes.'
    },
    {
      icon: FileText,
      title: 'Hardback & Digital Will',
      desc: 'Receive a beautifully bound hardcopy and a secure digital version.'
    },
    {
      icon: Video,
      title: 'Video Testimonial',
      desc: 'Record your message as a letter of wishes to guide your loved ones.'
    },
    {
      icon: BrainCircuit,
      title: 'Eternal Echo Avatar',
      desc: 'Optional AI avatar of you that family can converse with after your passing.'
    }
  ]

  return (
    <section id="why" className="relative bg-gradient-to-b from-black via-[#0b0b12] to-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Why choose us
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">A modern, human way to secure your legacy</h2>
          <p className="mt-3 text-white/70">We blend tradition and technology to ensure your wishes are clear, accessible, and deeply personal.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
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
