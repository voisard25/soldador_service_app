import { motion } from "framer-motion";
import { Flame, ShieldCheck, Hammer, Wrench, ClipboardCheck } from "lucide-react";

const team = [
  {
    name: "Damián Voisard",
    role: "Soldador Principal",
    desc: "Responsable de realizar los trabajos de soldadura (MIG, TIG, eléctrica), armado de estructuras, cortes y terminaciones finales.",
    icon: Flame,
  },
  {
    name: "Jesica Soledad Voisard",
    role: "Técnica en Higiene y Seguridad Industrial",
    desc: "Supervisa el cumplimiento de normas de seguridad, uso de EPP, prevención de riesgos eléctricos y estructurales, y garantiza un entorno de trabajo seguro.",
    icon: ShieldCheck,
  },
  {
    name: "Martín López",
    role: "Armador / Montador de Estructuras",
    desc: "Responsable de medición, corte, ensamblado previo a la soldadura e instalación en obra.",
    icon: Hammer,
  },
  {
    name: "Lucas Fernández",
    role: "Ayudante de Soldador",
    desc: "Preparación de materiales, asistencia técnica y apoyo en obra para garantizar eficiencia en cada proyecto.",
    icon: Wrench,
  },
  {
    name: "Carlos Méndez",
    role: "Supervisor de Proyecto",
    desc: "Planificación, coordinación de tiempos, contacto con el cliente y control de calidad final.",
    icon: ClipboardCheck,
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Profesionales</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Nuestro <span className="text-gradient-spark">Equipo</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un equipo organizado, comprometido con la seguridad y la excelencia técnica en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <member.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase text-foreground">{member.name}</h3>
              <p className="text-primary text-sm font-heading tracking-wider uppercase mt-1 mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;