import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-36 pt-12">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 text-sm font-semibold tracking-wider text-cyan-400 uppercase">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Karya Pribadi & Pilihan
          </h2>
        </div>
        <a href="https://github.com/Ranto12" target="_blank" rel="noreferrer">
          <Button
            variant="outline"
            className="group flex h-12 items-center rounded-full border-slate-600 bg-transparent px-6 text-white hover:bg-slate-800"
          >
            Eksplor. Github Saya{" "}
            <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "APP KPoin",
            desc: "KPoin adalah program loyalty kesehatan satu-satunya dan pertama di Indonesia dengan benefit eksklusif serta banyak hadiah menarik",
            tags: ["Next.js", "TypeScript", "Tailwind", "Rest API"],
            link: "https://app.kpoin.com",
          },
          {
            title: "Merchant APP",
            desc: "Aplikasi merchant untuk KPoin yang memudahkan merchant untuk mengelola poin dan menukarkannya dengan hadiah.",
            tags: ["Next.js", "TypeScript", "Tailwind", "Rest API"],
            link: "https://merchant.kpoin.com",
          },
          {
            title: "Event KPoin",
            desc: "Aplikasi event untuk KPoin yang memudahkan user  untuk mengikuti event event yang di adakan oleh brand brand yang bekerja sama dengan KPoin.",
            tags: ["Next.js", "TypeScript", "Tailwind", "Rest API"],
            link: "https://event.kpoin.com",
          },
          {
            title: "KPOIN Landing Page",
            desc: "Landing page untuk KPoin yang memudahkan user untuk mengetahui tentang KPoin.",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            link: "https://kpoin.com",
          },
          {
            title: "Brand KPoin",
            desc: "Aplikasi brand untuk memudahkan user mengetahi isi dari KPoin itu mendapatkan benefit apa saja",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            link: "https://web-app-two-lyart.vercel.app/",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0e1623] to-[#0c121e] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,180,216,0.1)]"
          >
            {/* Decorative glowing orb on hover */}
            <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/0 blur-[60px] transition-colors duration-500 group-hover:bg-cyan-500/15"></div>

            <div className="relative z-10 flex flex-1 flex-col">
              <h3 className="mb-4 text-2xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400">
                {project.title}
              </h3>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-400 md:text-base">
                {project.desc}
              </p>

              <div className="mt-auto">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-[#151f2e] px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank">
                  <div className="flex w-full items-center justify-between text-sm font-semibold text-white transition-colors group-hover:text-cyan-400">
                    View Live Demo{" "}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
