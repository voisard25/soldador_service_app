import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Martínez",
    text: "Excelente trabajo en el portón de mi casa. Damián fue muy profesional, cumplió con los tiempos y el resultado superó mis expectativas. 100% recomendable.",
    rating: 5,
    work: "Portón corredizo",
  },
  {
    name: "María Elena Giordano",
    text: "Contraté a Voisard Soldaduras para una escalera metálica y quedó espectacular. Muy buena atención, presupuesto claro desde el primer día.",
    rating: 5,
    work: "Escalera metálica",
  },
  {
    name: "Jorge Pellegrini",
    text: "Hicieron la estructura del techo de mi galpón en tiempo récord. Trabajo impecable, materiales de primera. Los volvería a contratar sin dudar.",
    rating: 5,
    work: "Estructura de techo",
  },
  {
    name: "Ana Lucía Romero",
    text: "Me hicieron una parrilla a medida para el patio. Quedó hermosa y súper funcional. Se nota la experiencia y el cariño por el oficio.",
    rating: 5,
    work: "Parrilla a medida",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Opiniones</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Lo que dicen nuestros <span className="text-gradient-spark">Clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-heading text-foreground font-semibold">{t.name}</p>
                <p className="text-primary text-xs font-heading tracking-wider uppercase">{t.work}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;