'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Code2, MonitorSmartphone, Search, Blocks, Terminal, Layout, X, ExternalLink, Mail, ArrowUpRight, Heart } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: "My Approach", id: "#approach" },
    { name: "Skills", id: "#skills" },
    { name: "About Me", id: "#about" },
    { name: "Projects", id: "#projects" }
  ];
  
  // Interactive Data for the Approach
  const stepsData = [
    { 
      title: "Clean Code", 
      heading: "Clean & Scalable Code",
      desc: "Menerapkan prinsip clean code dengan arsitektur yang terstruktur rapi. Mengutamakan kode yang mudah dibaca, dikelola (maintainable), dan memiliki performa tinggi untuk kemudahan scaling di masa depan.",
      icon: <Terminal className="w-16 h-16 text-cyan-500 max-sm:w-10 max-sm:h-10" strokeWidth={1.5} />
    },
    { 
      title: "Reusable", 
      heading: "Reusable Components",
      desc: "Membangun arsitektur React yang sangat modular. Menulis komponen yang mandiri dan dapat digunakan ulang untuk mempercepat siklus pengembangan produk tanpa mengorbankan kualitas UI.",
      icon: <Blocks className="w-16 h-16 text-cyan-500 max-sm:w-10 max-sm:h-10" strokeWidth={1.5} />
    },
    { 
      title: "Responsive", 
      heading: "Responsive Web Design",
      desc: "Pendekatan Mobile-First rendering. Memastikan tampilan UI beradaptasi dan bekerja secara flawless di setiap ukuran layar, dari smartphone terkecil hingga monitor desktop ultra-wide.",
      icon: <MonitorSmartphone className="w-16 h-16 text-cyan-500 max-sm:w-10 max-sm:h-10" strokeWidth={1.5} />
    },
    { 
      title: "SEO Ready", 
      heading: "SEO & Performance",
      desc: "Mengimplementasikan fitur Server-Side Rendering (SSR) dan Static Site Generation (SSG) via Next.js untuk mendapatkan waktu muat (loading) hitungan milidetik dan ranking SEO yang mendominasi.",
      icon: <Search className="w-16 h-16 text-cyan-500 max-sm:w-10 max-sm:h-10" strokeWidth={1.5} />
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d131a] text-slate-50 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d131a]/90 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              Dev
              <span className="relative flex items-center justify-center w-6 h-6 mx-0.5 group-hover:rotate-180 transition-transform duration-500">
                <span className="absolute w-full h-full border-2 border-cyan-400 rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute bottom-1"></span>
              </span>
              Folio
            </div>
            
            {/* Desktop Menus */}
            <div className="hidden md:flex items-center gap-8">
              {menus.map((menu) => (
                <a key={menu.name} href={menu.id} className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                  {menu.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full px-6 font-semibold h-10 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              Hire Me
            </Button>
            <Button aria-label="Toggle menu" variant="outline" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden rounded-full bg-white text-slate-900 border-none hover:bg-slate-200 h-10 w-10">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0d131a]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden">
            {menus.map((menu) => (
              <a key={menu.name} href={menu.id} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">
                {menu.name}
              </a>
            ))}
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full px-6 font-semibold h-12 mt-4 shadow-lg">
               Hire Me
            </Button>
          </div>
        )}
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-28 lg:mt-36 space-y-32 pb-24">
        
        {/* Process / Hero Section */}
        <section id="approach" className="scroll-mt-36">
          <div className="mb-16 lg:mb-24 scale-100 opacity-100 transition-all duration-1000">
            <div className="text-cyan-400 font-semibold mb-6 uppercase tracking-wider text-xs md:text-sm flex items-center gap-2">
              <span className="w-10 h-px bg-cyan-400"></span> Frontend Developer
            </div>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-end">
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05]">
                Membangun pengalaman web modern & responsif<span className="text-cyan-400">.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed pb-2 border-l-2 border-slate-800 pl-6">
                Saya seorang Web Developer spesialis ekosistem JavaScript. Memanfaatkan kekuatan <span className="text-white font-medium">React.js</span> & <span className="text-white font-medium">Next.js</span> dibalut keamanan kokoh dari <span className="text-cyan-400 font-medium">TypeScript</span>.
              </p>
            </div>
          </div>

          {/* Interactive Steps Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20 pb-4">
            {stepsData.map((step, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveStep(idx)}
                className={`pt-4 border-t-2 text-left transition-all duration-300 ${activeStep === idx ? 'border-cyan-400 text-white shadow-[0_-1px_10px_-5px_rgba(6,182,212,0.4)]' : 'border-slate-800/80 text-slate-500 hover:text-slate-300 hover:border-slate-600'}`}
              >
                <div className="text-xs font-semibold text-slate-600 mb-1">0{idx + 1}</div>
                <span className="font-semibold">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Step Content & Graphic */}
          <div className="grid xl:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-center">
            {/* Left: Text & Actions */}
            <div className="space-y-6 md:space-y-8 max-w-xl transition-all duration-500 ease-in-out" key={`text-${activeStep}`}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm ring-1 ring-cyan-500/30">
                  0{activeStep + 1}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">{stepsData[activeStep].heading}</h2>
              </div>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed min-h-[120px] xl:min-h-[100px]">
                {stepsData[activeStep].desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full px-8 font-semibold h-12 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    Lihat Portfolio
                  </Button>
                </a>
                <Button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % stepsData.length)}
                  variant="outline" 
                  className="rounded-full border-slate-700 hover:bg-slate-800 text-slate-200 bg-transparent h-12 px-8 group"
                >
                  Selanjutnya <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right: Interactive Graphic / Illustration area */}
            <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center bg-gradient-to-br from-[#0c131e] to-[#0a0f18] rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl group">
              
              {/* Complex SVG Lines Background */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                 <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
                   {/* Main crossing dashed line */}
                   <path d="M50 300 C 150 150, 250 150, 450 300" stroke="rgba(0, 180, 216, 0.15)" strokeWidth="1.5" strokeDasharray="6 6" className="transform origin-center transition-all duration-1000 group-hover:scale-105" />
                   {/* Fainter secondary line */}
                   <path d="M0 150 C 150 250, 250 350, 450 150" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                 </svg>
              </div>

              {/* Floating Icons */}
              <div className="absolute left-[15%] top-[20%] bg-[#1a2333] rounded-2xl p-3 md:p-4 border border-slate-700/50 shadow-2xl z-10 animate-[bounce_5s_infinite] hover:scale-110 transition-transform cursor-default">
                <Code2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              </div>
              <div className="absolute left-[30%] top-[60%] bg-[#1a2333] rounded-xl p-2 md:p-3 border border-slate-700/50 shadow-xl z-10 hidden md:block">
                <Terminal className="w-5 h-5 text-slate-400" />
              </div>
              <div className="absolute left-[10%] bottom-[20%] bg-slate-50 rounded-2xl p-3 md:p-4 shadow-xl z-10 hover:scale-110 transition-transform animate-[pulse_4s_infinite]">
                {/* Dynamically match icon to step occasionally */}
                {activeStep === 2 ? <MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" /> : <Search className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" />}
              </div>
              <div className="absolute left-[45%] bottom-[15%] bg-[#1a2333] rounded-xl p-2 md:p-3 border border-slate-700/50 shadow-xl z-10 animate-[bounce_6s_infinite] delay-1000">
                <Layout className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
              </div>

              {/* Browser Box Graphic */}
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[240px] md:w-[320px] h-[180px] md:h-[240px] bg-slate-50 rounded-2xl shadow-2xl overflow-visible flex flex-col border border-slate-200/20">
                {/* Mac-style Window Header */}
                <div className="h-8 md:h-10 bg-slate-100 border-b border-slate-200 w-full flex items-center px-4 gap-2 rounded-t-2xl shrink-0">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                
                {/* Browser Content */}
                <div className="flex-1 relative flex items-center bg-white rounded-b-2xl">
                   {/* Background code lines visualization */}
                   <div className="absolute inset-x-6 top-6 space-y-3 opacity-30 hidden md:block">
                      <div className="h-2 w-[80%] bg-slate-200 rounded-full"></div>
                      <div className="h-2 w-[60%] bg-slate-200 rounded-full"></div>
                      <div className="h-2 w-[90%] bg-slate-200 rounded-full"></div>
                   </div>

                   {/* Pill shape object or dynamic interactive element */}
                   <div className="absolute left-[15%] h-12 w-[80%] md:h-16 md:w-[75%] bg-[#f4f7f9] rounded-r-3xl rounded-l-lg border border-slate-200 flex items-center shadow-inner overflow-hidden">
                      {/* Dynamic content matching step inside the pill */}
                      <div key={activeStep} className="ml-8 md:ml-12 text-slate-400 text-sm font-medium animate-in slide-in-from-bottom-2 fade-in duration-300">
                         {activeStep === 0 && "npm run build"}
                         {activeStep === 1 && "<Component />"}
                         {activeStep === 2 && "@media (max-width)"}
                         {activeStep === 3 && "SEO score 100"}
                      </div>
                   </div>
                   
                   {/* The large magnifying glass cutting through the boundary - Now dynamically changes based on step! */}
                   <div key={`icon-${activeStep}`} className="absolute left-[-1.5rem] md:left-[-2.5rem] text-[#1a2333] bg-transparent animate-in zoom-in-50 duration-500 rounded-full bg-white p-1">
                      {stepsData[activeStep].icon}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-36 pt-12">
          <div className="text-cyan-400 font-semibold mb-6 uppercase tracking-wider text-sm text-center">Tech Stack</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16 max-w-3xl mx-auto leading-tight">
            Fondasi kode yang kuat untuk performa maksimal.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "JavaScript", desc: "Bahasa utama web. Memahami mendalam event-loop, asinkronitas, dan ES6+ standar industri." },
              { title: "TypeScript", desc: "Tipografi aman yang mendeteksi error sebelum compile. Kunci untuk aplikasi skala besar (Enterprise)." },
              { title: "React.js", desc: "Ekspertise memanajemen state kompleks menggunakan Hooks, Konteks, dan arsitektur performa tinggi." },
              { title: "Next.js", desc: "Menciptakan rute hybrid (SSR & SSG). Skalabilitas dan kecepatan rendering tak tertandingi." }
            ].map((skill, i) => (
               <div key={i} className="bg-[#0c121e]/80 border border-slate-800/80 p-8 rounded-3xl hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 cursor-default group shadow-lg">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-4 inline-block group-hover:scale-105 transition-transform">{skill.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section & Photo */}
        <section id="about" className="scroll-mt-36 pt-12">
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-gradient-to-r from-slate-900/40 to-transparent p-6 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
             
             {/* Decorative Background Blur */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

             {/* Personal Photo Area */}
             <div className="w-full lg:w-1/3 flex justify-center relative z-10 shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                   {/* Decorative accent layers behind image */}
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2.5rem] rotate-3 scale-105 opacity-40 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 blur-sm"></div>
                   <div className="absolute inset-0 bg-slate-800 rounded-[2.5rem] border-2 border-slate-600/50 overflow-hidden shadow-2xl z-10">
                      {/* Using standard img to bypass Next.js remote domain restrictions seamlessly */}
                      <img 
                        src="/my-photo.jpeg" 
                        alt="Profile Photo" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                        loading="lazy"
                      />
                      {/* Optional overlay effect at the bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                   </div>
                </div>
             </div>

             {/* Text & Metrics Grid */}
             <div className="w-full lg:w-2/3 grid xl:grid-cols-2 gap-10 xl:gap-12 relative z-10">
               <div>
                  <div className="text-cyan-400 font-semibold mb-6 uppercase tracking-wider text-sm">About Me</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                    Menulis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">KODE</span> yang matang.
                  </h2>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
                    Sebagai spesialis Frontend, fokus saya bukan sekedar membuat desain yang tampak indah di layar, melainkan merangkainya dengan baris kode yang kuat, <i>maintainable</i>, dan terstruktur demi performa jangka panjang.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-white hover:bg-slate-200 text-slate-950 rounded-full px-8 font-bold h-12 shadow-lg">
                      Unduh CV Saya
                    </Button>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "3+", label: "Tahun Pengalaman" },
                    { value: "50+", label: "Project Berhasil" },
                    { value: "99%", label: "Skor Lighthouse" },
                    { value: "100+", label: "Komp. Reusable" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#0b1018]/90 border border-slate-700/50 p-4 lg:p-6 rounded-3xl flex flex-col justify-center items-center text-center hover:border-cyan-500/50 hover:bg-[#131b26] transition-colors duration-300 shadow-md">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
               </div>
             </div>
           </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" className="scroll-mt-36 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">Portfolio</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Karya Pribadi & Pilihan</h2>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full border-slate-600 hover:bg-slate-800 text-white bg-transparent h-12 px-6 group flex items-center">
                Eksplor. Github Saya <Github className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "E-Commerce Dashboard", 
                desc: "Sistem analitik penjual lengkap dengan grafik real-time, manajemen inventori yang reaktif, dan performa instan (SSR).", 
                tags: ["Next.js", "TypeScript", "Tailwind"] 
              },
              { 
                title: "SaaS Landing Page", 
                desc: "Website *company profile* dengan animasi tingkat tinggi, SEO dioptimasi, plus desain estetika Glassmorphism.", 
                tags: ["React", "Framer Motion", "Vite"] 
              },
              { 
                title: "AI Chat Interface", 
                desc: "Klon antarmuka obrolan asisten cerdas yang responsif. Mendukung streaming pesan dan dark/light mode intuitif.", 
                tags: ["React.js", "Tailwind CSS", "API"] 
              },
            ].map((project, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0e1623] to-[#0c121e] border border-slate-800/80 p-8 rounded-3xl group cursor-pointer hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,180,216,0.1)] hover:-translate-y-1">
                
                {/* Decorative glowing orb on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/0 blur-[60px] rounded-full group-hover:bg-cyan-500/15 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 text-slate-100 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-1">{project.desc}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-[#151f2e] text-slate-300 rounded-full border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-full flex items-center justify-between text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      View Live Demo <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: Call To Action Section */}
        <section className="pt-24 pb-12">
           <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-950 p-10 md:p-16 rounded-[3rem] border border-cyan-900/30 text-center relative overflow-hidden shadow-2xl">
              {/* Background abstract gradients */}
              <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-50%] right-[-10%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Mulai Project Anda Sekarang</h2>
                <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
                  Punya ide cemerlang untuk startup atau bisnis Anda? Mari diskusikan bagaimana kita bisa mengubah ide tersebut menjadi produk nyata dengan performa web luar biasa.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full px-8 font-bold h-14 text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:scale-105 group">
                     Mari Berbicara <ArrowUpRight className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform" />
                   </Button>
                   <Button variant="outline" className="w-full sm:w-auto rounded-full border-slate-600 hover:bg-slate-800 text-white bg-transparent h-14 px-8 text-base">
                     <Mail className="w-5 h-5 mr-2" /> Hubungi via Email
                   </Button>
                </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer minimal & Elegant */}
      <footer className="border-t border-slate-800/60 bg-[#0a0f18] py-8 text-center text-slate-500 max-w-[1400px] mx-auto px-6">
        <p className="text-sm">© {new Date().getFullYear()} Ran N. Dibuat dangan <Heart className="w-3 h-3 inline-block text-red-500 mx-1 fill-red-500" /> menggunakan Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}