"use client";

import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";
import SectionHeading from "@/app/components/SectionHeading";
import PricingGrid from "@/app/components/PricingGrid";
import { servicesData, getServiceTranslation } from "@/data/services";

const includes = [
  "Профессиональное оборудование",
  "Экологичные средства",
  "Страхование имущества",
  "Гарантия качества",
  "Выезд в удобное время",
  "Бесплатная оценка",
];

const faq = [
  {
    q: "Как формируется стоимость?",
    a: "Стоимость зависит от площади помещения, типа уборки и дополнительных услуг. Точную цену рассчитает менеджер после уточнения деталей.",
  },
  {
    q: "Есть ли скидки при регулярной уборке?",
    a: "Да! При оформлении абонемента на регулярную уборку вы получаете скидку до 20% от стоимости разовой уборки.",
  },
  {
    q: "Что входит в генеральную уборку?",
    a: "Генеральная уборка включает полную очистку всех помещений, мытьё окон изнутри, чистку бытовой техники, уборку за мебелью и дезинфекцию.",
  },
  {
    q: "Сколько времени занимает уборка?",
    a: "Поддерживающая уборка 1-комнатной квартиры — около 2 часов. Генеральная — 4-6 часов. Точное время зависит от площади и состояния.",
  },
];

export default function PricingClient({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.webp"
            alt={t.pricing.pageTitle}
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t.pricing.pageSubtitle}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {t.pricing.pageTitle}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {t.pricing.pageDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <PricingGrid lang={lang} />

      <section className="section-padding bg-background border-t border-border/10">
        <div className="container-wide">
          <SectionHeading
            label={lang === "ru" ? "Базовые тарифы" : "Asosiy tariflar"}
            title={
              lang === "ru" ? "Цены на другие услуги" : "Boshqa xizmatlar narxi"
            }
            description={
              lang === "ru"
                ? "Окончательная стоимость зависит от степени загрязнения и устанавливается менеджером после осмотра"
                : "Yakuniy narx ifloslanish darajasiga bog'liq va ko'rikdan so'ng menejer tomonidan belgilanadi"
            }
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {servicesData.map((s, i) => {
              const tr = getServiceTranslation(s, lang);
              return (
                <AnimatedSection key={s.id} delay={i * 0.05}>
                  <div className="p-8 rounded-2xl bg-card border border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 shadow-md h-full flex flex-col group">
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                      {tr.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[90%] mb-8 flex-1">
                      {tr.shortDesc}
                    </p>
                    <div className="flex flex-col gap-1 mt-auto pt-5 border-t border-white/5">
                      <span className="text-xs uppercase tracking-wider font-semibold text-white/40">
                        {lang === "ru"
                          ? "Ориентировочная цена"
                          : "Taxminiy narx"}
                      </span>
                      <span className="font-display font-extrabold text-xl xl:text-2xl text-gold whitespace-nowrap">
                        {tr.price}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-16">
            <div className="bg-ice rounded-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl text-white mb-6">
                {lang === "ru"
                  ? "Что включено в стоимость"
                  : "Narxga nima kiradi"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-ice">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            label={lang === "ru" ? "Вопросы" : "Savollar"}
            title={
              lang === "ru"
                ? "Часто задаваемые вопросы"
                : "Ko'p beriladigan savollar"
            }
          />

          <div className="space-y-4">
            {faq.map((item) => (
              <AnimatedSection key={item.q}>
                <details className="group bg-background rounded-xl">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-semibold text-white">
                    {item.q}
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 ml-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-gradient">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              {t.pricing.ctaTitle}
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto mb-8">
              {t.pricing.ctaDesc}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
            >
              {t.pricing.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
