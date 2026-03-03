import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteForm from "@/components/QuoteForm";
import InfoSection from "@/components/InfoSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Soldador Profesional en Rafaela | Voisard Soldaduras</title>
        <meta name="description" content="Servicios profesionales de soldadura MIG, TIG y eléctrica en Rafaela, Santa Fe. Rejas, portones, escaleras, techos, parrillas y más. Más de 10 años de experiencia. Presupuestos sin cargo." />
        <meta name="keywords" content="soldador rafaela, soldadura rafaela, rejas rafaela, portones rafaela, soldadura MIG TIG, estructuras metálicas santa fe" />
        <link rel="canonical" href="https://voisardsoldaduras.com" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialsSection />
        <QuoteForm />
        <InfoSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;