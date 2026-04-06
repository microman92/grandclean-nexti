import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Услуги", path: "/services" },
  { label: "О компании", path: "/about" },
  { label: "Цены", path: "/pricing" },
  { label: "Отзывы", path: "/reviews" },
  { label: "Контакты", path: "/contact" },
];

const services = [
  "Уборка квартир",
  "Уборка офисов",
  "Генеральная уборка",
  "Уборка после ремонта",
  "Химчистка мебели",
  "Мойка окон",
  "Мытьё фасадов",
  "Чистка брусчатки",
  "Дезинфекция",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-gold">
                  GC
                </span>
              </div>
              <span className="font-display font-bold text-lg">
                Grand<span className="text-gold">Clean</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Профессиональный клининг в Ташкенте. Безупречная чистота вашего
              пространства с 2015 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
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
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-primary-foreground/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-6">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+998901234567"
                    className="text-sm hover:text-gold transition-colors"
                  >
                    +998 90 123 45 67
                  </a>
                </div>
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
                <span className="text-sm text-primary-foreground/60">
                  Ташкент, Узбекистан
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  Пн-Вс: 08:00 — 22:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} GrandClean. Все права защищены.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Профессиональный клининг в Ташкенте
          </p>
        </div>
      </div>
    </footer>
  );
}
