const Footer = () => {
    return (
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-lg font-bold tracking-wider mb-2">
            <span className="text-gradient-spark">VOISARD</span> SOLDADURAS
          </p>
          <p className="text-muted-foreground text-sm">
            Rafaela, Santa Fe · Soldador profesional con más de 10 años de experiencia
          </p>
          <p className="text-muted-foreground text-xs mt-4">
            © {new Date().getFullYear()} Voisard Soldaduras. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;