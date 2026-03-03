import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, Wrench, UserCheck, Award } from "lucide-react";

const reasons = [
  { icon: Wrench, title: "Materiales de Calidad", desc: "Trabajamos con los mejores materiales del mercado para garantizar durabilidad." },
  { icon: FileCheck, title: "Presupuestos Sin Cargo", desc: "Cotizamos tu proyecto sin compromiso. Transparencia total en precios." },
  { icon: Clock, title: "Entrega en Tiempo Acordado", desc: "Cumplimos con los plazos pactados. Tu tiempo es importante." },
  { icon: Shield, title: "Garantía por Escrito", desc: "Todos nuestros trabajos cuentan con garantía documentada." },
  { icon: UserCheck, title: "Trabajo Personalizado", desc: "Cada proyecto se adapta a tus necesidades y requerimientos específicos." },
  { icon: Award, title: "Cumplimiento y Responsabilidad", desc: "Más de 10 años respaldando nuestro compromiso profesional." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Confianza</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            ¿Por qué <span className="text-gradient-spark">Elegirnos</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase mb-1 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg bg-card border border-border text-center"
        >
          <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-foreground">
            Profesionalismo <span className="text-gradient-spark">Técnico</span>
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Trabajamos con normas de seguridad industrial y dominamos distintos procesos de soldadura para ofrecer la mejor solución a cada proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Soldadura MIG", "Soldadura TIG", "Soldadura Eléctrica", "Normas de Seguridad", "EPP Certificado"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-primary/40 text-primary font-heading text-sm tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;