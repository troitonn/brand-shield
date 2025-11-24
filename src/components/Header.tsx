import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Azul petróleo mais claro estilo Apple
const APPLE_BLUE = "#4F7A8A";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detecta scroll para remover glow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-xl group-hover:bg-accent/30 transition-all" />
              <Shield
                className={`relative transition-all`}
                size={32}
                strokeWidth={2.5}
                style={{
                  color: isScrolled ? "var(--accent)" : APPLE_BLUE,
                  filter: isScrolled
                    ? "none"
                    : "drop-shadow(0 0 6px rgba(79, 122, 138, 0.7))",
                }}
              />
            </div>

            <span
              className="text-2xl font-bold font-display tracking-tight transition-all"
              style={{
                color: isScrolled ? "var(--primary)" : APPLE_BLUE,
                textShadow: isScrolled
                  ? "none"
                  : "0 0 8px rgba(79,122,138,0.6)",
              }}
            >
              WAGR
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-2xl transition-all"
                  style={{
                    color: isActive
                      ? APPLE_BLUE
                      : isScrolled
                      ? "var(--foreground)"
                      : APPLE_BLUE,
                    background: isActive
                      ? "rgba(79,122,138,0.15)"
                      : "transparent",
                    boxShadow: isActive
                      ? "0 0 10px rgba(79,122,138,0.4)"
                      : "none",
                    textShadow: isScrolled
                      ? "none"
                      : "0 0 6px rgba(79,122,138,0.8)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium rounded-2xl"
              style={{
                color: isScrolled ? "var(--foreground)" : APPLE_BLUE,
                textShadow: isScrolled
                  ? "none"
                  : "0 0 6px rgba(79,122,138,0.7)",
              }}
            >
              <Link to="/contato">Falar com Jurídico</Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="rounded-2xl transition-shadow font-medium"
              style={{
                background: `linear-gradient(90deg, ${APPLE_BLUE}, ${APPLE_BLUE}CC)`,
                color: "white",
                boxShadow: isScrolled
                  ? "0 0 0 transparent"
                  : "0 0 18px rgba(79,122,138,0.55)",
              }}
            >
              <Link to="/contato">Registrar Marca</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} color={APPLE_BLUE} />
            ) : (
              <Menu size={28} color={isScrolled ? "var(--foreground)" : APPLE_BLUE} />
            )}
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
                    className="px-4 py-3 text-base font-medium rounded-2xl transition-all"
                    style={{
                      color: APPLE_BLUE,
                      background:
                        location.pathname === link.href
                          ? "rgba(79,122,138,0.15)"
                          : "transparent",
                      boxShadow:
                        location.pathname === link.href
                          ? "0 0 10px rgba(79,122,138,0.4)"
                          : "none",
                    }}
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
                    className="rounded-2xl"
                    style={{
                      background: `linear-gradient(90deg, ${APPLE_BLUE}, ${APPLE_BLUE}CC)`,
                      color: "white",
                    }}
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
