import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { servicesData as allServices } from "@/data/services";
import { heroImg } from "@/assets";

const categories = ["Все", "Помещения", "Специальные", "Фасады и экстерьер"];

export default function ServicesPage() {
  const [active, setActive] = useState("Все");

  const filtered =
    active === "Все"
      ? allServices
      : allServices.filter((s) => s.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Наши услуги"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
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
                    <span className="inline-block text-sm md:text-base font-display font-semibold uppercase tracking-wider text-gold mb-4">
                      {service.category}
                    </span>
                    <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-4 text-base md:text-lg"
                        >
                          <Check className="w-5 h-5 text-gold shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-6 mt-8">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-base bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                      >
                        Подробнее об услуге
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        to="/contact"
                        className="text-white hover:text-gold transition-colors font-semibold text-sm border-b border-transparent hover:border-gold pb-0.5"
                      >
                        Оставить заявку
                      </Link>
                    </div>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className={`rounded-2xl overflow-hidden block w-full ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-[500px] lg:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
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
