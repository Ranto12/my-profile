import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1400px] border-t border-slate-800/60 bg-[#0a0f18] px-6 py-8 text-center text-slate-500">
      <p className="text-sm">
        © {new Date().getFullYear()} Ran N. Dibuat dangan{" "}
        <Heart className="mx-1 inline-block h-3 w-3 fill-red-500 text-red-500" />{" "}
        menggunakan Next.js & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
