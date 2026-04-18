"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Invitation from "./Invitation";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Peoject from "./Project";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d131a] font-sans text-slate-50 selection:bg-cyan-500/30">
      <Navbar />
      <main className="mx-auto mt-28 max-w-[1400px] space-y-32 px-6 pb-24 lg:mt-36 lg:px-12">
        <HeroSection />
        <Skills />
        <AboutMe />
        <Peoject />
        <Invitation />
      </main>
      <Footer />
    </div>
  );
}
