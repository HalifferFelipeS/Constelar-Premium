import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da Constelar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full font-display font-semibold text-primary-foreground bg-gradient-to-r from-cosmic-blue to-cosmic-violet transition-all duration-300 hover:scale-105 animate-pulse-glow group"
      id="contato"
    >
      <MessageCircle size={22} className="transition-transform duration-300 group-hover:rotate-12" />
      <span className="hidden sm:inline text-sm">Fale no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
