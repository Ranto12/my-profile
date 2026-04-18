const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-36 pt-12">
      <div className="mb-6 text-center text-sm font-semibold tracking-wider text-cyan-400 uppercase">
        Tech Stack
      </div>
      <h2 className="mx-auto mb-16 max-w-3xl text-center text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
        Fondasi kode yang kuat untuk performa maksimal.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "JavaScript",
            desc: "Bahasa utama web. Memahami mendalam event-loop, asinkronitas, dan ES6+ standar industri.",
          },
          {
            title: "TypeScript",
            desc: "Tipografi aman yang mendeteksi error sebelum compile. Kunci untuk aplikasi skala besar (Enterprise).",
          },
          {
            title: "React.js",
            desc: "Ekspertise memanajemen state kompleks menggunakan Hooks, Konteks, dan arsitektur performa tinggi.",
          },
          {
            title: "Next.js",
            desc: "Menciptakan rute hybrid (SSR & SSG). Skalabilitas dan kecepatan rendering tak tertandingi.",
          },
        ].map((skill, i) => (
          <div
            key={i}
            className="group cursor-default rounded-3xl border border-slate-800/80 bg-[#0c121e]/80 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/60"
          >
            <div className="mb-4 inline-block bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-2xl font-black text-transparent transition-transform group-hover:scale-105">
              {skill.title}
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
