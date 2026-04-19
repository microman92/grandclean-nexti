"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

interface NavigationProps {
  lang: Locale;
  t: Messages;
}

export default function Navigation({ lang, t }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const otherLang: Locale = lang === "ru" ? "uz" : "ru";
  const altPath =
    pathname?.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;

  const navLinks = [
    { key: "home", path: `/${lang}/` },
    { key: "services", path: `/${lang}/services/` },
    { key: "about", path: `/${lang}/about/` },
    { key: "pricing", path: `/${lang}/pricing/` },
    { key: "reviews", path: `/${lang}/reviews/` },
    { key: "contact", path: `/${lang}/contact/` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const labels: Record<string, string> = {
    home: t.nav.home,
    services: t.nav.services,
    about: t.nav.about,
    pricing: t.nav.pricing,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href={`/${lang}/`} className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="GrandClean Logo"
            className="w-[60px] h-[60px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.path || pathname === item.path.slice(0, -1);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive
                    ? "text-gold"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {labels[item.key]}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Lang switcher */}
          <div className="flex bg-white/5 p-1 rounded-lg">
            {(["ru", "uz"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={l === lang ? pathname || "/" : altPath}
                className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                  lang === l
                    ? "bg-gold text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href="tel:+998935712151"
            className="flex items-center gap-2 text-sm font-medium text-white"
          >
            <Phone className="w-4 h-4 text-gold" />
            +998 93 571 21 51
          </a>
          <Link
            href={`/${lang}/contact/`}
            className="px-5 py-2.5 rounded-lg font-display font-semibold text-sm text-accent-foreground bg-gold hover:bg-gold-light transition-colors duration-200"
          >
            {t.nav.order}
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
              {navLinks.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-base font-medium py-2 ${
                      isActive ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {labels[item.key]}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-5">
                <div className="flex items-center">
                  <div className="flex bg-white/5 p-1 rounded-lg">
                    {(["ru", "uz"] as Locale[]).map((l) => (
                      <Link
                        key={l}
                        href={l === lang ? pathname || "/" : altPath}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-300 ${
                          lang === l
                            ? "bg-gold text-accent-foreground shadow-sm"
                            : "text-muted-foreground hover:text-white"
                        }`}
                      >
                        {l.toUpperCase()}
                      </Link>
                    ))}
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
                  href={`/${lang}/contact/`}
                  className="w-fit px-6 py-2.5 rounded-lg font-display font-semibold text-sm text-accent-foreground bg-gold hover:bg-gold-light transition-colors"
                >
                  {t.nav.order}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
