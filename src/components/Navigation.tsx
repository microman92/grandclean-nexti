import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "@/assets";

import { useTranslation } from "react-i18next";

const navKeys = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "pricing", path: "/pricing" },
  { key: "reviews", path: "/reviews" },
  { key: "contact", path: "/contact" },
];

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "uz" : "ru");
  };

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
          <img
            src={logo}
            alt="GrandClean Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navKeys.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {t(`nav.${item.key}`)}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex bg-white/5 p-1 rounded-lg">
            <button
              onClick={() => i18n.changeLanguage("ru")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                i18n.language === "ru"
                  ? "bg-gold text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => i18n.changeLanguage("uz")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                i18n.language === "uz"
                  ? "bg-gold text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              UZ
            </button>
          </div>
          <a
            href="tel:+998935712151"
            className="flex items-center gap-2 text-sm font-medium text-white"
          >
            <Phone className="w-4 h-4 text-gold" />
            +998 93 571 21 51
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg font-display font-semibold text-sm text-accent-foreground bg-gold hover:bg-gold-light transition-colors duration-200"
          >
            {t("nav.order")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Меню"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
              {navKeys.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium py-2 ${
                    location.pathname === item.path
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-5">
                <div className="flex items-center">
                  <div className="flex bg-white/5 p-1 rounded-lg">
                    <button
                      onClick={() => i18n.changeLanguage("ru")}
                      className={`px-4 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                        i18n.language === "ru"
                          ? "bg-gold text-accent-foreground shadow-sm"
                          : "text-muted-foreground hover:text-white"
                      }`}
                    >
                      RU
                    </button>
                    <button
                      onClick={() => i18n.changeLanguage("uz")}
                      className={`px-4 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                        i18n.language === "uz"
                          ? "bg-gold text-accent-foreground shadow-sm"
                          : "text-muted-foreground hover:text-white"
                      }`}
                    >
                      UZ
                    </button>
                  </div>
                </div>

                <a
                  href="tel:+998935712151"
                  className="flex items-center w-fit gap-2 text-sm font-medium text-white"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  +998 93 571 21 51
                </a>

                <Link
                  to="/contact"
                  className="w-fit px-6 py-2.5 rounded-lg font-display font-semibold text-sm text-accent-foreground bg-gold hover:bg-gold-light transition-colors"
                >
                  {t("nav.order")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
