import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "О компании", path: "/about" },
  { label: "Цены", path: "/pricing" },
  { label: "Отзывы", path: "/reviews" },
  { label: "Контакты", path: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-navy-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">GC</span>
          </div>
          <span className="font-display font-bold text-lg text-navy">
            Grand<span className="text-gold">Clean</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === item.path
                  ? "text-navy"
                  : "text-muted-foreground hover:text-navy"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+998901234567" className="flex items-center gap-2 text-sm font-medium text-navy">
            <Phone className="w-4 h-4 text-gold" />
            +998 90 123 45 67
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg font-display font-semibold text-sm text-primary-foreground bg-navy hover:bg-navy-light transition-colors duration-200"
          >
            Заказать уборку
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium py-2 ${
                    location.pathname === item.path
                      ? "text-navy"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+998901234567" className="flex items-center gap-2 text-sm font-medium text-navy">
                  <Phone className="w-4 h-4 text-gold" />
                  +998 90 123 45 67
                </a>
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-lg font-display font-semibold text-sm text-primary-foreground bg-navy text-center"
                >
                  Заказать уборку
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
