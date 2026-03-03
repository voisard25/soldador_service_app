import { motion } from "framer-motion";
import { MapPin, Clock, AlertTriangle, Award, Truck } from "lucide-react";

const infoItems = [
  { icon: MapPin, title: "Ubicación", desc: "Rafaela, Santa Fe, Argentina" },
  { icon: Truck, title: "Zona de Trabajo", desc: "Rafaela y alrededores (Sunchales, Lehmann, Susana y más)" },
  { icon: Clock, title: "Horarios", desc: "Lunes a Viernes: 8:00 - 18:00 hs | Sábados: 8:00 - 13:00 hs" },
  { icon: AlertTriangle, title: "Urgencias", desc: "Atendemos urgencias fuera de horario. Consultanos por WhatsApp." },
  { icon: Award, title: "Experiencia", desc: "Más de 10 años de trayectoria en trabajos de soldadura profesional." },
];

const InfoSection = () => {
  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Información</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            <span className="text-gradient-spark">Contacto</span> y Ubicación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold uppercase text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-border h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              title="Ubicación Voisard Soldaduras - Rafaela, Santa Fe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54889.67803996929!2d-61.52383!3d-31.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae5278c69b7d%3A0x3978e0e1a0b1e8e!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;