"use client";

import { use, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { servicesData, getServiceTranslation } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/app/components/AnimatedSection";

const categories = ["Все", "Помещения", "Специальные", "Фасады и экстерьер"];

export default function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const t = getDictionary(lang);
  const [active, setActive] = useState("Все");

  const categoryLabels =
    lang === "uz"
      ? ["Hammasi", "Xonalar", "Maxsus", "Fasadlar va tashqi ko'rinish"]
      : categories;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.webp"
            alt={t.services.pageTitle}
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t.services.pageSubtitle}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {t.services.pageTitle}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {t.services.pageDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Tabs */}
          <AnimatedSection className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-all duration-200 ${
                  active === cat
                    ? "bg-gold text-accent-foreground"
                    : "bg-card text-foreground hover:bg-white/10"
                }`}
              >
                {categoryLabels[index]}
              </button>
            ))}
          </AnimatedSection>

          {/* Service list - alternating layout */}
          <div className="space-y-16">
            {servicesData.map((service, i) => {
              const tr = getServiceTranslation(service, lang);
              const isVisible = active === "Все" || tr.category === active;
              return (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <div
                    className={isVisible ? "" : "hidden"}
                    aria-hidden={!isVisible}
                  >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      i % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <span className="inline-block text-sm md:text-base font-display font-semibold uppercase tracking-wider text-gold mb-4">
                        {tr.category}
                      </span>
                      <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        {tr.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                        {tr.shortDesc}
                      </p>

                      <ul className="space-y-4 mb-10">
                        {tr.includes.map((item) => (
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
                          href={`/${lang}/services/${service.id}/`}
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-base bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                        >
                          {t.services.detailPageBtn}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                          href={`/${lang}/contact/`}
                          className="text-white hover:text-gold transition-colors font-semibold text-sm border-b border-transparent hover:border-gold pb-0.5"
                        >
                          {t.services.leaveRequest}
                        </Link>
                      </div>
                    </div>

                    <Link
                      href={`/${lang}/services/${service.id}/`}
                      className={`rounded-2xl overflow-hidden block w-full ${i % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <Image
                        src={service.img}
                        alt={tr.title}
                        width={800}
                        height={600}
                        className="w-full h-[500px] lg:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                  </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ice">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              {t.services.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              {t.services.ctaDesc}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
            >
              {t.services.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
