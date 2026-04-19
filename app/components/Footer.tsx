import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { servicesData } from "@/data/services";

interface FooterProps {
  lang: Locale;
  t: Messages;
}

export default function Footer({ lang, t }: FooterProps) {
  const links = [
    {
      label: lang === "ru" ? "Услуги" : "Xizmatlar",
      path: `/${lang}/services/`,
    },
    {
      label: lang === "ru" ? "О компании" : "Kompaniya haqida",
      path: `/${lang}/about/`,
    },
    { label: lang === "ru" ? "Цены" : "Narxlar", path: `/${lang}/pricing/` },
    { label: lang === "ru" ? "Отзывы" : "Sharhlar", path: `/${lang}/reviews/` },
    {
      label: lang === "ru" ? "Контакты" : "Kontaktlar",
      path: `/${lang}/contact/`,
    },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-wide py-10 md:py-12 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href={`/${lang}/`}
              className="flex items-center gap-3 mb-6 w-fit group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="GrandClean Logo"
                className="w-[60px] h-[60px] object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Grand<span className="text-gold">Clean</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              {lang === "ru"
                ? "Профессиональная клининговая компания в Ташкенте. Качественная уборка квартир, домов и офисов, генеральная и после ремонта, химчистка мебели и мойка окон по доступным ценам."
                : "Toshkentdagi professional tozalash kompaniyasi. Kvartira, uy va ofislarni sifatli tozalash, kimyoviy tozalash va oyna yuvish."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              {lang === "ru" ? "Навигация" : "Navigatsiya"}
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="order-4 lg:order-none">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              {lang === "ru" ? "Услуги" : "Xizmatlar"}
            </h4>
            <ul className="space-y-3">
              {servicesData.map((s) => {
                const title =
                  s.translations[lang]?.title ?? s.translations.ru.title;
                return (
                  <li key={s.id}>
                    <Link
                      href={`/${lang}/services/${s.id}/`}
                      className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="order-3 lg:order-none">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              {lang === "ru" ? "Контакты" : "Kontaktlar"}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+998935712151"
                  className="text-sm hover:text-gold transition-colors"
                >
                  +998 93 571 21 51
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:info@grandclean.uz"
                  className="text-sm hover:text-gold transition-colors"
                >
                  info@grandclean.uz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Grand+Clean,+Tashkent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {lang === "ru"
                    ? "Ташкент, ул. Жураева 48"
                    : "Toshkent, Juraeva ko'chasi 48"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  {lang === "ru"
                    ? "Пн-Вс: 08:00 — 22:00"
                    : "Du-Ya: 08:00 — 22:00"}
                </span>
              </li>
              <li className="pt-4 border-t-0 lg:border-t border-white/10 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/grandcleanuz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/grandcleanuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/GrandCleanUZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors duration-300"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4 -ml-0.5 mt-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} GrandClean.{" "}
            {lang === "ru"
              ? "Все права защищены."
              : "Barcha huquqlar himoyalangan."}
          </p>
          <p className="text-xs text-primary-foreground/40">
            {lang === "ru"
              ? "Профессиональный клининг в Ташкенте"
              : "Toshkentda professional tozalash"}
          </p>
        </div>
      </div>
    </footer>
  );
}
