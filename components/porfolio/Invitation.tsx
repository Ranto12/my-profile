import { Button } from "../ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

const Invitation = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="relative overflow-hidden rounded-[3rem] border border-cyan-900/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-950 p-10 text-center shadow-2xl md:p-16">
        {/* Background abstract gradients */}
        <div className="absolute top-[-50%] left-[-10%] h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]"></div>
        <div className="absolute right-[-10%] bottom-[-50%] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Mulai Project Anda Sekarang
          </h2>
          <p className="mb-10 text-base leading-relaxed text-slate-400 md:text-lg">
            Punya ide cemerlang untuk startup atau bisnis Anda? Mari diskusikan
            bagaimana kita bisa mengubah ide tersebut menjadi produk nyata
            dengan performa web luar biasa.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:rantoirwanda08@gmail.com?subject=Kerja Sama&body=Halo, saya tertarik bekerja sama dengan Anda.">
              <Button className="group h-14 w-full rounded-full bg-cyan-500 px-8 text-base font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:scale-105 hover:bg-cyan-400 sm:w-auto">
                Mari Berbicara{" "}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
              </Button>
            </a>
            <a href="mailto:rantoirwanda08@gmail.com?subject=Kerja Sama&body=Halo, saya tertarik bekerja sama dengan Anda.">
              <Button
                variant="outline"
                className="h-14 w-full rounded-full border-slate-600 bg-transparent px-8 text-base text-white hover:bg-slate-800 sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" /> Hubungi via Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
