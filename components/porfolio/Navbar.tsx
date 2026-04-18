import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "My Approach", id: "#approach" },
    { name: "Skills", id: "#skills" },
    { name: "About Me", id: "#about" },
    { name: "Projects", id: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "border-b border-white/5 bg-[#0d131a]/90 py-4 shadow-xl backdrop-blur-lg" : "bg-transparent py-6"}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div
            className="group flex cursor-pointer items-center text-2xl font-bold tracking-tight"
            onClick={() => window.scrollTo(0, 0)}
          >
            Dev
            <span className="relative mx-0.5 flex h-6 w-6 items-center justify-center transition-transform duration-500 group-hover:rotate-180">
              <span className="absolute h-full w-full rounded-full border-2 border-cyan-400"></span>
              <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            </span>
            Folio
          </div>

          {/* Desktop Menus */}
          <div className="hidden items-center gap-8 md:flex">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.id}
                className="group relative text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {menu.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:rantoirwanda08@gmail.com?subject=Kerja Sama&body=Halo, saya tertarik bekerja sama dengan Anda.">
            <Button className="hidden h-10 rounded-full bg-cyan-500 px-6 font-semibold text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] sm:flex">
              Hire Me
            </Button>
          </a>
          <Button
            aria-label="Toggle menu"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-10 w-10 rounded-full border-none bg-white text-slate-900 hover:bg-slate-200 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 flex w-full flex-col gap-4 border-b border-white/10 bg-[#0d131a]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.id}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/5 pb-2 text-lg font-medium text-slate-300 transition-colors hover:text-white"
            >
              {menu.name}
            </a>
          ))}
          <Button className="mt-4 h-12 rounded-full bg-cyan-500 px-6 font-semibold text-slate-950 shadow-lg hover:bg-cyan-400">
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
