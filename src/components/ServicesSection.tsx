import { motion } from "framer-motion";
import rejasImg from "@/assets/service-rejas.jpg";
import escalerasImg from "@/assets/service-escaleras.jpg";
import techosImg from "@/assets/service-techos.jpg";
import parrillasImg from "@/assets/service-parrillas.jpg";
import industrialImg from "@/assets/service-industrial.jpg";
import reparacionesImg from "@/assets/service-reparaciones.jpg";

const services = [
  {
    title: "Rejas y Portones",
    desc: "Diseños personalizados con materiales de alta resistencia. Seguridad y estética para tu hogar.",
    img: rejasImg,
  },
  {
    title: "Escaleras Metálicas",
    desc: "Escaleras a medida con acabados profesionales. Funcionalidad y diseño moderno.",
    img: escalerasImg,
  },
  {
    title: "Techos y Estructuras",
    desc: "Estructuras metálicas resistentes para galpones, techos y cobertizos.",
    img: techosImg,
  },
  {
    title: "Parrillas",
    desc: "Parrillas artesanales de acero inoxidable. Hechas a medida para tu espacio.",
    img: parrillasImg,
  },
  {
    title: "Trabajos Industriales",
    desc: "Soldadura de alta resistencia para proyectos industriales y comerciales.",
    img: industrialImg,
  },
  {
    title: "Reparaciones",
    desc: "Reparaciones en general de estructuras metálicas, portones, rejas y más.",
    img: reparacionesImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Lo que hacemos</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Nuestros <span className="text-gradient-spark">Servicios</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold uppercase mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;