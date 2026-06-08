"use client";

import { use } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Leaf, Award } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";
import SectionHeading from "@/app/components/SectionHeading";

const timeline = [
  {
    year: "2015",
    title: "Основание компании",
    desc: "Начали с небольшой команды из 5 человек и мечты сделать Ташкент чище.",
  },
  {
    year: "2017",
    title: "1 000 клиентов",
    desc: "Расширили команду до 30 специалистов. Запустили услуги для бизнеса.",
  },
  {
    year: "2019",
    title: "Новые технологии",
    desc: "Инвестировали в профессиональное оборудование европейского уровня.",
  },
  {
    year: "2021",
    title: "Премиальное качество",
    desc: "Стали предоставлять сервис премиум-класса на рынке Узбекистана.",
  },
  {
    year: "2024",
    title: "10 000+ клиентов",
    desc: "Обслуживаем дома, офисы и коммерческие объекты по всему Ташкенту.",
  },
];

const values = [
  {
    icon: Target,
    title: "Точность",
    desc: "Внимание к каждой детали в нашей работе",
  },
  {
    icon: Heart,
    title: "Забота",
    desc: "Мы относимся к вашему дому как к своему",
  },
  {
    icon: Leaf,
    title: "Экологичность",
    desc: "Используем безопасные средства для здоровья",
  },
  { icon: Award, title: "Качество", desc: "Высокие стандарты на каждом этапе" },
];

export default function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const t = getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.webp"
            alt="О компании"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {lang === "ru" ? "О компании" : "Kompaniya haqida"}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {lang === "ru" ? "Мы — GrandClean" : "Biz — GrandClean"}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {lang === "ru"
                ? "Команда профессионалов, которая превращает уборку в искусство"
                : "Tozalashni san'atga aylantiradigan professionallar jamoasi"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story with image */}
      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <Image
                src="/images/team.webp"
                alt="Наша команда"
                width={800}
                height={600}
                className="rounded-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold rounded-xl px-6 py-4 shadow-gold">
                <span className="font-display font-extrabold text-3xl text-accent-foreground">
                  5+
                </span>
                <span className="block text-xs font-semibold text-accent-foreground/80">
                  {lang === "ru" ? "лет опыта" : "yillik tajriba"}
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {lang === "ru" ? "Наша история" : "Bizning tariximiz"}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              {lang === "ru"
                ? "Предоставляем премиальное качество"
                : "Premium sifatni taqdim etamiz"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {lang === "ru"
                ? "GrandClean была основана в 2019 году с простой миссией — сделать профессиональный клининг доступным каждому жителю Ташкента."
                : "GrandClean 2019-yilda har bir Toshkent aholisiga professional tozalash xizmatlarini ko'rsatish maqsadida tashkil etilgan."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {lang === "ru"
                ? "Сегодня мы — команда из 30 специалистов-технологов, оснащённых современным оборудованием и экологичными средствами. Мы обслуживаем тысячи клиентов и постоянно совершенствуем качество наших услуг."
                : "Bugungi kunda biz — zamonaviy uskunalar va ekologik toza vositalar bilan jihozlangan 30 nafar mutaxassis-texnologlardan iborat jamoamiz. Biz minglab mijozlarga xizmat ko'rsatamiz va xizmatlarimiz sifatini doimiy ravishda oshirib boramiz."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {lang === "ru"
                ? "Каждый клиент для нас — приоритет. Мы верим, что чистое пространство — это основа продуктивности, здоровья и хорошего настроения."
                : "Har bir mijoz biz uchun ustuvordir. Biz toza makon mahsuldorlik, sog'liq va yaxshi kayfiyatning asosi ekanligiga ishonamiz."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ice">
        <div className="container-wide">
          <SectionHeading
            label={lang === "ru" ? "Наши ценности" : "Bizning qadriyatlarimiz"}
            title={
              lang === "ru" ? "Принципы нашей работы" : "Ish tamoyillarimiz"
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 h-full text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {lang === "ru"
                      ? v.title
                      : v.title === "Точность"
                        ? "Aniq"
                        : v.title === "Забота"
                          ? "G'amxo'rlik"
                          : v.title === "Экологичность"
                            ? "Ekologik"
                            : "Sifat"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {lang === "ru"
                      ? v.desc
                      : "Xizmatimizning har bir bosqichida yuqori standartlar"}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label={lang === "ru" ? "Путь развития" : "Rivojlanish yo'li"}
            title={lang === "ru" ? "Наша история роста" : "O'sish tariximiz"}
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <span className="font-display font-extrabold text-2xl text-gradient-gold">
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-1 mb-2">
                      {lang === "ru" ? item.title : item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {lang === "ru" ? item.desc : item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="section-padding bg-ice">
        <div className="container-wide text-center">
          <AnimatedSection>
            <SectionHeading
              label={lang === "ru" ? "Команда" : "Jamoa"}
              title={
                lang === "ru"
                  ? "Профессионалы своего дела"
                  : "O'z ishining ustalari"
              }
              description={
                lang === "ru"
                  ? "Команда из 30 специалистов-технологов готова к работе"
                  : "30 nafar mutaxassis-texnologlardan iborat jamoa ishlashga tayyor"
              }
            />
            <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto h-[300px] md:h-[400px] relative">
              <Image
                src="/images/hero-interior.webp"
                alt="Наш офис"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
