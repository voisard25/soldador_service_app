import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5493562456071";
const WHATSAPP_MSG = encodeURIComponent("Hola, vi tu página y quisiera consultar por un trabajo de soldadura.");

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-spark-float"
    >
      <MessageCircle className="w-8 h-8 text-[hsl(0,0%,100%)]" />
    </a>
  );
};

export default FloatingWhatsApp;