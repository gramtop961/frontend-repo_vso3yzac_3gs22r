export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Iridescent glow orbs */}
      <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px]" />

      {/* Ribbon */}
      <div
        className="absolute left-1/2 top-0 h-[140vh] w-72 -translate-x-1/2 rotate-12 opacity-40"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(255,0,122,0.15), rgba(0,255,255,0.15), rgba(138,43,226,0.15), rgba(255,0,122,0.15))",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}
