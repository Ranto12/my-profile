import { Button } from "../ui/button";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-36 pt-12">
      <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-r from-slate-900/40 to-transparent p-6 md:p-12 lg:flex-row lg:gap-16">
        {/* Decorative Background Blur */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px]"></div>

        {/* Personal Photo Area */}
        <div className="relative z-10 flex w-full shrink-0 justify-center lg:w-1/3">
          <div className="group relative h-64 w-64 md:h-80 md:w-80">
            {/* Decorative accent layers behind image */}
            <div className="absolute inset-0 scale-105 rotate-3 rounded-[2.5rem] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"></div>
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[2.5rem] border-2 border-slate-600/50 bg-slate-800 shadow-2xl">
              {/* Using standard img to bypass Next.js remote domain restrictions seamlessly */}
              <img
                src="/my-photo.jpeg"
                alt="Profile Photo"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              {/* Optional overlay effect at the bottom */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d131a] via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Text & Metrics Grid */}
        <div className="relative z-10 grid w-full gap-10 lg:w-2/3 xl:grid-cols-2 xl:gap-12">
          <div>
            <div className="mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase">
              About Me
            </div>
            <h2 className="mb-8 text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-5xl">
              Menulis{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                KODE
              </span>{" "}
              yang matang.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-300 md:text-lg">
              Sebagai spesialis Frontend, fokus saya bukan sekedar membuat
              desain yang tampak indah di layar, melainkan merangkainya dengan
              baris kode yang kuat, <i>maintainable</i>, dan terstruktur demi
              performa jangka panjang.
            </p>
            <div className="flex gap-4">
              <a href="/Ranto-resume.pdf" download="ranto-resume.pdf">
                <Button className="h-12 rounded-full bg-white px-8 font-bold text-slate-950 shadow-lg hover:bg-slate-200">
                  Unduh CV Saya
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3+", label: "Tahun Pengalaman" },
              { value: "6+", label: "Project Prefesional Berhasil" },
              // { value: "99%", label: "Skor Lighthouse" },
              // { value: "100+", label: "Komp. Reusable" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-3xl border border-slate-700/50 bg-[#0b1018]/90 p-4 text-center shadow-md transition-colors duration-300 hover:border-cyan-500/50 hover:bg-[#131b26] lg:p-6"
              >
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
