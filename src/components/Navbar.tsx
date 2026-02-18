import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
          <Sparkles size={20} className="text-cosmic-glow" />
          Constelar
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
            Projetos
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 rounded-lg font-display font-semibold bg-gradient-to-r from-cosmic-blue to-cosmic-violet text-primary-foreground hover:scale-105 transition-transform"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
