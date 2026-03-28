import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import apartmentImg from "@/assets/apartment-clean.jpg";
import officeImg from "@/assets/office-clean.jpg";
import heroImg from "@/assets/hero-interior.jpg";

const categories = ["Все", "Квартиры", "Офисы", "Фасады и экстерьер", "Специальные"];

const allServices = [
  {
    title: "Уборка квартир",
    category: "Квартиры",
    desc: "Регулярная и разовая уборка жилых помещений любой площади с использованием профессиональных средств.",
    includes: ["Влажная уборка полов", "Удаление пыли", "Уборка кухни", "Чистка санузлов"],
    img: apartmentImg,
  },
  {
    title: "Генеральная уборка",
    category: "Квартиры",
    desc: "Глубокая очистка всей квартиры, включая труднодоступные места.",
    includes: ["Мытьё окон изнутри", "Чистка бытовой техники", "Уборка за мебелью", "Дезинфекция поверхностей"],
    img: heroImg,
  },
  {
    title: "Уборка после ремонта",
    category: "Квартиры",
    desc: "Удаление строительной пыли и загрязнений после ремонтных работ.",
    includes: ["Удаление цемента и клея", "Мытьё всех поверхностей", "Очистка стёкол", "Вывоз мусора"],
    img: officeImg,
  },
  {
    title: "Уборка офисов",
    category: "Офисы",
    desc: "Ежедневное поддержание безупречной чистоты в офисных помещениях. Работаем в удобное для вас время.",
    includes: ["Уборка рабочих мест", "Вынос мусора", "Чистка санузлов", "Уход за полами"],
    img: officeImg,
  },
  {
    title: "Химчистка мебели",
    category: "Специальные",
    desc: "Глубокая химчистка диванов, кресел, матрасов и ковров. Удаление пятен, запахов и аллергенов.",
    includes: ["Диваны и кресла", "Матрасы", "Ковры и ковролин", "Удаление пятен и запахов"],
    img: apartmentImg,
  },
  {
    title: "Мойка окон",
    category: "Фасады и экстерьер",
    desc: "Профессиональное мытьё окон на любой высоте. Чистка рам, подоконников и стеклопакетов без разводов.",
    includes: ["Мытьё рам и подоконников", "Очистка стеклопакетов", "Удаление разводов", "Работа на высоте"],
    img: heroImg,
  },
  {
    title: "Мытьё фасадов",
    category: "Фасады и экстерьер",
    desc: "Очистка фасадов зданий от загрязнений, пыли и копоти. Работаем на любой высоте с промышленным оборудованием.",
    includes: ["Очистка стен и облицовки", "Удаление копоти и грязи", "Промышленное оборудование", "Работа на любой высоте"],
    img: officeImg,
  },
  {
    title: "Чистка брусчатки",
    category: "Фасады и экстерьер",
    desc: "Удаление мха, грязи и пятен с тротуарной плитки и брусчатки. Возвращаем первоначальный вид покрытию.",
    includes: ["Удаление мха и грибка", "Очистка от грязи", "Мойка под давлением", "Обработка защитным составом"],
    img: heroImg,
  },
  {
    title: "Дезинфекция",
    category: "Специальные",
    desc: "Профессиональная дезинфекция помещений. Уничтожение бактерий, вирусов и аллергенов. Безопасно для людей и животных.",
    includes: ["Обработка всех поверхностей", "Уничтожение бактерий и вирусов", "Безопасные средства", "Сертифицированные препараты"],
    img: apartmentImg,
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? allServices : allServices.filter((s) => s.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Услуги
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Наши услуги
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Широкий спектр клининговых услуг для вашего дома и бизнеса
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Tabs */}
          <AnimatedSection className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-all duration-200 ${
                  active === cat
                    ? "bg-gold text-accent-foreground"
                    : "bg-card text-foreground hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Service list - alternating layout */}
          <div className="space-y-16">
            {filtered.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="inline-block text-xs font-display font-semibold uppercase tracking-wider text-gold mb-3">
                      {service.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

                    <ul className="space-y-3 mb-8">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                      >
                        Заказать
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-[300px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ice">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Не нашли нужную услугу?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Свяжитесь с нами и мы подберём индивидуальное решение для вас
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
            >
              Связаться с нами
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
