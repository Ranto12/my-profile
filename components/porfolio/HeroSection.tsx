import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Blocks,
  Code2,
  Layout,
  MonitorSmartphone,
  Search,
  Terminal,
} from "lucide-react";

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Interactive Data for the Approach
  const stepsData = [
    {
      title: "Clean Code",
      heading: "Clean & Scalable Code",
      desc: "Menerapkan prinsip clean code dengan arsitektur yang terstruktur rapi. Mengutamakan kode yang mudah dibaca, dikelola (maintainable), dan memiliki performa tinggi untuk kemudahan scaling di masa depan.",
      icon: (
        <Terminal
          className="h-16 w-16 text-cyan-500 max-sm:h-10 max-sm:w-10"
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Reusable",
      heading: "Reusable Components",
      desc: "Membangun arsitektur React yang sangat modular. Menulis komponen yang mandiri dan dapat digunakan ulang untuk mempercepat siklus pengembangan produk tanpa mengorbankan kualitas UI.",
      icon: (
        <Blocks
          className="h-16 w-16 text-cyan-500 max-sm:h-10 max-sm:w-10"
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Responsive",
      heading: "Responsive Web Design",
      desc: "Pendekatan Mobile-First rendering. Memastikan tampilan UI beradaptasi dan bekerja secara flawless di setiap ukuran layar, dari smartphone terkecil hingga monitor desktop ultra-wide.",
      icon: (
        <MonitorSmartphone
          className="h-16 w-16 text-cyan-500 max-sm:h-10 max-sm:w-10"
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "SEO Ready",
      heading: "SEO & Performance",
      desc: "Mengimplementasikan fitur Server-Side Rendering (SSR) dan Static Site Generation (SSG) via Next.js untuk mendapatkan waktu muat (loading) hitungan milidetik dan ranking SEO yang mendominasi.",
      icon: (
        <Search
          className="h-16 w-16 text-cyan-500 max-sm:h-10 max-sm:w-10"
          strokeWidth={1.5}
        />
      ),
    },
  ];
  return (
    <section id="approach" className="scroll-mt-36">
      <div className="mb-16 scale-100 opacity-100 transition-all duration-1000 lg:mb-24">
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase md:text-sm">
          <span className="h-px w-10 bg-cyan-400"></span> Frontend Developer
        </div>
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-[4.5rem]">
            Membangun pengalaman web modern & responsif
            <span className="text-cyan-400">.</span>
          </h1>
          <p className="border-l-2 border-slate-800 pb-2 pl-6 text-base leading-relaxed text-slate-400 md:text-lg">
            Saya seorang Web Developer spesialis ekosistem JavaScript.
            Memanfaatkan kekuatan{" "}
            <span className="font-medium text-white">React.js</span> &{" "}
            <span className="font-medium text-white">Next.js</span> dibalut
            keamanan kokoh dari{" "}
            <span className="font-medium text-cyan-400">TypeScript</span>.
          </p>
        </div>
      </div>

      {/* Interactive Steps Navigation */}
      <div className="mb-16 grid grid-cols-2 gap-4 pb-4 md:mb-20 md:grid-cols-4 md:gap-6">
        {stepsData.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`border-t-2 pt-4 text-left transition-all duration-300 ${activeStep === idx ? "border-cyan-400 text-white shadow-[0_-1px_10px_-5px_rgba(6,182,212,0.4)]" : "border-slate-800/80 text-slate-500 hover:border-slate-600 hover:text-slate-300"}`}
          >
            <div className="mb-1 text-xs font-semibold text-slate-600">
              0{idx + 1}
            </div>
            <span className="font-semibold">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Step Content & Graphic */}
      <div className="grid items-center gap-12 xl:grid-cols-[1fr_1.2fr] xl:gap-20">
        {/* Left: Text & Actions */}
        <div
          className="max-w-xl space-y-6 transition-all duration-500 ease-in-out md:space-y-8"
          key={`text-${activeStep}`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400 ring-1 ring-cyan-500/30">
              0{activeStep + 1}
            </div>
            <h2 className="text-2xl font-bold md:text-4xl">
              {stepsData[activeStep].heading}
            </h2>
          </div>

          <p className="min-h-[120px] text-base leading-relaxed text-slate-300 md:text-lg xl:min-h-[100px]">
            {stepsData[activeStep].desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="/Ranto-resume.pdf" download="ranto-resume.pdf">
              <Button className="h-12 rounded-full bg-cyan-500 px-8 font-semibold text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-cyan-400">
                Lihat Portfolio
              </Button>
            </a>
            <Button
              onClick={() =>
                setActiveStep((prev) => (prev + 1) % stepsData.length)
              }
              variant="outline"
              className="group h-12 rounded-full border-slate-700 bg-transparent px-8 text-slate-200 hover:bg-slate-800"
            >
              Selanjutnya{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right: Interactive Graphic / Illustration area */}
        <div className="group relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0c131e] to-[#0a0f18] shadow-2xl md:h-[450px]">
          {/* Complex SVG Lines Background */}
          <div className="pointer-events-none absolute inset-0 h-full w-full">
            <svg
              className="h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Main crossing dashed line */}
              <path
                d="M50 300 C 150 150, 250 150, 450 300"
                stroke="rgba(0, 180, 216, 0.15)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="origin-center transform transition-all duration-1000 group-hover:scale-105"
              />
              {/* Fainter secondary line */}
              <path
                d="M0 150 C 150 250, 250 350, 450 150"
                stroke="rgba(255, 255, 255, 0.03)"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-[20%] left-[15%] z-10 animate-[bounce_5s_infinite] cursor-default rounded-2xl border border-slate-700/50 bg-[#1a2333] p-3 shadow-2xl transition-transform hover:scale-110 md:p-4">
            <Code2 className="h-6 w-6 text-cyan-400 md:h-8 md:w-8" />
          </div>
          <div className="absolute top-[60%] left-[30%] z-10 hidden rounded-xl border border-slate-700/50 bg-[#1a2333] p-2 shadow-xl md:block md:p-3">
            <Terminal className="h-5 w-5 text-slate-400" />
          </div>
          <div className="absolute bottom-[20%] left-[10%] z-10 animate-[pulse_4s_infinite] rounded-2xl bg-slate-50 p-3 shadow-xl transition-transform hover:scale-110 md:p-4">
            {/* Dynamically match icon to step occasionally */}
            {activeStep === 2 ? (
              <MonitorSmartphone className="h-6 w-6 text-cyan-500 md:h-8 md:w-8" />
            ) : (
              <Search className="h-6 w-6 text-cyan-500 md:h-8 md:w-8" />
            )}
          </div>
          <div className="absolute bottom-[15%] left-[45%] z-10 animate-[bounce_6s_infinite] rounded-xl border border-slate-700/50 bg-[#1a2333] p-2 shadow-xl delay-1000 md:p-3">
            <Layout className="h-4 w-4 text-slate-300 md:h-5 md:w-5" />
          </div>

          {/* Browser Box Graphic */}
          <div className="absolute top-1/2 right-[-20px] flex h-[180px] w-[240px] -translate-y-1/2 flex-col overflow-visible rounded-2xl border border-slate-200/20 bg-slate-50 shadow-2xl md:h-[240px] md:w-[320px]">
            {/* Mac-style Window Header */}
            <div className="flex h-8 w-full shrink-0 items-center gap-2 rounded-t-2xl border-b border-slate-200 bg-slate-100 px-4 md:h-10">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] md:h-3 md:w-3"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] md:h-3 md:w-3"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] md:h-3 md:w-3"></div>
            </div>

            {/* Browser Content */}
            <div className="relative flex flex-1 items-center rounded-b-2xl bg-white">
              {/* Background code lines visualization */}
              <div className="absolute inset-x-6 top-6 hidden space-y-3 opacity-30 md:block">
                <div className="h-2 w-[80%] rounded-full bg-slate-200"></div>
                <div className="h-2 w-[60%] rounded-full bg-slate-200"></div>
                <div className="h-2 w-[90%] rounded-full bg-slate-200"></div>
              </div>

              {/* Pill shape object or dynamic interactive element */}
              <div className="absolute left-[15%] flex h-12 w-[80%] items-center overflow-hidden rounded-l-lg rounded-r-3xl border border-slate-200 bg-[#f4f7f9] shadow-inner md:h-16 md:w-[75%]">
                {/* Dynamic content matching step inside the pill */}
                <div
                  key={activeStep}
                  className="animate-in slide-in-from-bottom-2 fade-in ml-8 text-sm font-medium text-slate-400 duration-300 md:ml-12"
                >
                  {activeStep === 0 && "npm run build"}
                  {activeStep === 1 && "<Component />"}
                  {activeStep === 2 && "@media (max-width)"}
                  {activeStep === 3 && "SEO score 100"}
                </div>
              </div>

              {/* The large magnifying glass cutting through the boundary - Now dynamically changes based on step! */}
              <div
                key={`icon-${activeStep}`}
                className="animate-in zoom-in-50 absolute left-[-1.5rem] rounded-full bg-transparent bg-white p-1 text-[#1a2333] duration-500 md:left-[-2.5rem]"
              >
                {stepsData[activeStep].icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
