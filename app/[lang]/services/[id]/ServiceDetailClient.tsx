"use client";

import type { Locale } from "@/lib/i18n";
import { Service, getServiceTranslation } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ArrowRight, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";
import CarpetWashingSteps from "@/app/components/CarpetWashingSteps";
import ServiceFAQ from "@/app/components/ServiceFAQ";

export default function ServiceDetailClient({
  service,
  lang,
}: {
  service: Service;
  lang: Locale;
}) {
  const tr = getServiceTranslation(service, lang);
  const faqItems = lang === "uz" ? service.faq.uz : service.faq.ru;

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.img}
            alt={tr.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-wide relative z-10 mt-8">
          <AnimatedSection>
            <Link
              href={`/${lang}/services/`}
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-semibold mb-6"
            >
              <ArrowLeft className="w-4 h-4" />{" "}
              {lang === "ru"
                ? "Назад ко всем услугам"
                : "Barcha xizmatlarga qaytish"}
            </Link>
            <span className="block font-display font-semibold text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
              {tr.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-8 drop-shadow-lg">
              {tr.title}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl leading-relaxed">
              {tr.shortDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative z-20">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              {lang === "ru" ? "О сервисе" : "Xizmat haqida"}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              {tr.fullDesc}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-8 mb-8 lg:mb-10 shadow-elevated">
              <h2 className="font-display font-bold text-xl md:text-2xl text-white mb-3">
                {lang === "ru"
                  ? "Стоимость услуги в Ташкенте"
                  : "Toshkentda xizmat narxi"}
              </h2>
              <p className="text-xs lg:text-sm uppercase tracking-wider font-semibold text-white/50 mb-1.5 lg:mb-2">
                {lang === "ru" ? "Начальная цена" : "Boshlang'ich narx"}
              </p>
              <p className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-gold">
                {tr.price}
              </p>
            </div>

            <div className="block">
              <Link
                href={`/${lang}/contact/`}
                className="inline-flex items-center justify-center gap-2 lg:gap-3 w-full sm:w-auto px-6 lg:px-10 py-3.5 lg:py-5 rounded-xl font-display font-bold text-base lg:text-lg bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
              >
                {lang === "ru" ? "Заказать услугу" : "Xizmatni buyurtma qilish"}
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-elevated border border-white/5 mb-10">
              <Image
                src={service.img}
                alt={tr.title}
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>

        {tr.advantages && tr.advantages.length > 0 && (
          <div className="container-wide mt-12 md:mt-16">
            <AnimatedSection delay={0.15}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8 md:mb-10">
                {lang === "ru" ? "Преимущества услуги" : "Xizmat afzalliklari"}
              </h2>
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                {tr.advantages.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-white/5 hover:border-gold/30 transition-colors"
                  >
                    <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* What's included */}
        <div className="container-wide mt-12 md:mt-16">
          <AnimatedSection delay={0.2}>
            <div className="bg-card p-8 md:p-12 lg:p-14 rounded-[2rem] border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03] pointer-events-none">
                <ShieldCheck className="w-96 h-96 text-gold" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                <div className="lg:w-5/12 bg-transparent">
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                    {lang === "ru" ? "Что входит" : "Narxga nima"}
                    <br />
                    <span className="text-gold">
                      {lang === "ru" ? "в стоимость" : "kiradi"}
                    </span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    {lang === "ru"
                      ? `Мы ответственно подходим к выполнению услуги ${tr.title.toLowerCase()}. В финальную стоимость уже включены все необходимые этапы, премиальные чистящие средства и профессиональное оборудование. Никаких скрытых платежей.`
                      : `Biz ${tr.title.toLowerCase()} xizmatini bajarishga mas'uliyat bilan yondashamiz. Yakuniy narxga barcha zarur bosqichlar, premium tozalash vositalari va professional uskunalar kiritilgan.`}
                  </p>
                </div>

                <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
                  {tr.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[#1e1e1e] border border-white/5 hover:border-gold/30 hover:bg-[#252525] transition-all duration-300 shadow-sm"
                    >
                      <div className="bg-gold/10 p-2 rounded-full mt-0.5 shrink-0">
                        <Check className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-white/90 font-medium text-base md:text-lg leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <div className="container-wide mt-12 md:mt-16">
            <ServiceFAQ faq={faqItems} serviceTitle={tr.title} />
          </div>
        )}

        {/* Carpet Washing Steps */}
        {service.id === "stirka-kovrov" && (
          <div className="container-wide mt-12 md:mt-16">
            <CarpetWashingSteps />
          </div>
        )}
      </section>
    </>
  );
}
