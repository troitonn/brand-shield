import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import wagrLogo from "@/assets/wagr-logo.png";

const APPLE_BLUE = "#FE721B"; // Azul petróleo claro estilo Apple

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

  const isHero = !isScrolled; // Hero = topo da página

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="section-container py-5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <div className="relative h-16 lg:h-20">
              {/* Apple-style subtle glow effect */}
              <div 
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-700"
                style={{
                  background: isHero 
                    ? "radial-gradient(circle, rgba(255,180,136,0.4) 0%, transparent 60%)"
                    : "radial-gradient(circle, rgba(255,180,136,0.4) 0%, transparent 60%)",
                  transform: "scale(1.2)",
                }}
              />
              
              <img 
                src={wagrLogo} 
                alt="WAGR" 
                className="relative h-16 lg:h-20 w-auto transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: isHero 
                    ? "drop-shadow(0 4px 12px rgba(255,180,136,0.25)) drop-shadow(0 8px 24px rgba(255,180,136,0.15))"
                    : "drop-shadow(0 4px 12px rgba(255,180,136,0.25)) drop-shadow(0 8px 24px rgba(255,180,136,0.15))",
                }}
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-2xl transition-all`}
                  style={{
                    color: isHero ? APPLE_BLUE : "var(--foreground)",
                    background: isActive
                      ? "rgba(79,122,138,0.15)"
                      : "transparent",
                    boxShadow: isActive && isHero ? "0 0 6px rgba(79,122,138,0.2)"
                      : "none",
                    textShadow: isHero ? "0 0 3px rgba(79,122,138,0.25)"
                      : "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Falar com Jurídico – mantém original, mas muda para azul Apple na hero */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium rounded-2xl"
              style={{
                color: isHero ? APPLE_BLUE : "var(--accent)",
                textShadow: isHero ? "0 0 3px rgba(79,122,138,0.25)"
                  : "none",
              }}
            >
              <Link to="/contato">Falar com Jurídico</Link>
            </Button>

            {/* Registrar Marca – SEM ALTERAR, laranja intacto */}
            <Button
              size="sm"
              asChild
              className="rounded-2xl bg-gradient-to-r from-accent to-accent/90 transition-shadow font-medium"
              style={{ boxShadow: "none", color: "white" }}
            >
              <Link to="/contato">Registrar Marca</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
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
                    className={`px-4 py-3 text-base font-medium rounded-2xl transition-all`}
                    style={{ color: APPLE_BLUE }}
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
                    style={{ color: APPLE_BLUE }}
                  >
                    <Link to="/contato">Falar com Jurídico</Link>
                  </Button>

                  <Button
                    size="sm"
                    asChild
                    className="rounded-2xl bg-gradient-to-r from-accent to-accent/90"
                    style={{ color: "white" }}
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
