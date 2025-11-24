import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Estilo PS5 = botões mais arredondados (rounded-2xl), bordas suaves, sensação "pill button"
// Ajustei todos os botões e links que se comportam como botões

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/monitoramento", label: "Monitoramento" },
    { href: "/sobre", label: "Sobre" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="section-container py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-xl group-hover:bg-accent/30 transition-all" />
              <Shield className="relative text-accent" size={32} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-primary font-display tracking-tight">
              WAGR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-2xl transition-all ${
                  location.pathname === link.href
                    ? "text-accent bg-accent/10 shadow-sm"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium rounded-2xl hover:bg-accent/10"
            >
              <Link to="/contato">Falar com Jurídico</Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="rounded-2xl bg-gradient-to-r from-accent to-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-shadow font-medium"
            >
              <Link to="/contato">Registrar Marca</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 pb-6"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 text-base font-medium rounded-2xl transition-all ${
                      location.pathname === link.href
                        ? "text-accent bg-accent/10 shadow-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-2xl"
                  >
                    <Link to="/contato">Falar com Jurídico</Link>
                  </Button>

                  <Button
                    size="sm"
                    asChild
                    className="rounded-2xl bg-gradient-to-r from-accent to-accent/90"
                  >
                    <Link to="/contato">Registrar Marca</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
