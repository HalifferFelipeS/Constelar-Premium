import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cosmic-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cosmic-violet/10 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-cosmic-glow animate-pulse" />
          <span className="text-sm text-muted-foreground font-body tracking-wide">
            Estúdio Criativo Digital
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Transformamos ideias em{" "}
          <span className="gradient-text">constelações digitais</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Criamos experiências digitais que conectam marcas às estrelas. Apps, design gráfico e identidades visuais que brilham.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-primary-foreground bg-gradient-to-r from-cosmic-blue via-cosmic-violet to-primary transition-all duration-300 hover:scale-105 glow-sm hover:glow-md"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold glass-hover"
          >
            Fale Conosco
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#projetos"
        className="absolute bottom-10 z-10 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
