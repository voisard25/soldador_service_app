import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "5493562456071";

const workTypes = [
  "Rejas y Portones",
  "Escaleras Metálicas",
  "Techos y Estructuras",
  "Parrillas",
  "Trabajos Industriales",
  "Reparaciones",
  "Otro",
];

const QuoteForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    tipoTrabajo: "",
    medidas: "",
    zona: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola, quiero solicitar una cotización.

*Nombre:* ${form.nombre}
*Teléfono:* ${form.telefono}
*Tipo de trabajo:* ${form.tipoTrabajo}
*Medidas aproximadas:* ${form.medidas}
*Zona del trabajo:* ${form.zona}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="cotizacion" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Rápido y fácil</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Cotización <span className="text-gradient-spark">Rápida</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Completá el formulario y te contactamos por WhatsApp con tu presupuesto.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 border border-border space-y-5"
        >
          <div>
            <label className="block font-heading text-sm tracking-wider uppercase text-muted-foreground mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              maxLength={100}
              value={form.nombre}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block font-heading text-sm tracking-wider uppercase text-muted-foreground mb-2">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              required
              maxLength={20}
              value={form.telefono}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Tu número de teléfono"
            />
          </div>

          <div>
            <label className="block font-heading text-sm tracking-wider uppercase text-muted-foreground mb-2">Tipo de Trabajo</label>
            <select
              name="tipoTrabajo"
              required
              value={form.tipoTrabajo}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            >
              <option value="">Seleccioná un tipo de trabajo</option>
              {workTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-heading text-sm tracking-wider uppercase text-muted-foreground mb-2">Medidas Aproximadas</label>
            <textarea
              name="medidas"
              maxLength={500}
              value={form.medidas}
              onChange={handleChange}
              rows={3}
              className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              placeholder="Ej: 2m x 1.5m, portón doble hoja..."
            />
          </div>

          <div>
            <label className="block font-heading text-sm tracking-wider uppercase text-muted-foreground mb-2">Zona del Trabajo</label>
            <input
              type="text"
              name="zona"
              maxLength={100}
              value={form.zona}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Ej: Rafaela, Sunchales, zona rural..."
            />
          </div>

          <p className="text-muted-foreground text-xs">
            También podés adjuntar fotos directamente por WhatsApp luego de enviar el formulario.
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-spark text-primary-foreground font-heading text-lg tracking-wider uppercase px-8 py-4 rounded-md shadow-spark hover:opacity-90 transition-all flex items-center justify-center gap-3"
          >
            <Send className="w-5 h-5" />
            Solicitar Cotización
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteForm;