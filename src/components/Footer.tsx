import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="relative py-16 px-6 border-t border-border"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-display font-bold text-lg">
        <Sparkles size={18} className="text-cosmic-glow" />
        Constelar
      </div>
      <p className="text-sm text-muted-foreground font-body">
        © 2026 Constelar. Todos os direitos reservados.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
