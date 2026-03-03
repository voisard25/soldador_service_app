import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-welding.jpg";

const WHATSAPP_NUMBER = "5493562456071";
const WHATSAPP_MSG = encodeURIComponent("Hola, vi tu página y quisiera consultar por un presupuesto de soldadura.");

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Soldador profesional trabajando con chispas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
            Más de 10 años de experiencia
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6">
            Servicios<br />
            <span className="text-gradient-spark">Profesionales</span><br />
            de Soldadura
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Soldadura MIG, TIG y Eléctrica en Rafaela, Santa Fe.
            Calidad, seguridad y compromiso en cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-spark text-primary-foreground font-heading text-lg tracking-wider uppercase px-8 py-4 rounded-md shadow-spark hover:opacity-90 transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Solicitar Presupuesto
            </a>
            <a
              href="#servicios"
              className="border border-primary/50 text-primary font-heading text-lg tracking-wider uppercase px-8 py-4 rounded-md hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
            >
              Ver Servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;