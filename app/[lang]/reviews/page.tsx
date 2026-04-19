"use client";

import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";

const reviews = [
  {
    name: "Феруза",
    rating: 5,
    text: "Заказывала чистку ковров и мягкой мебели в офис после пыльных бурь, работа была сделана качественно и аккуратно! Недавно заказала стирку ковров и матрасов, после ремонта в квартире всё было очень пыльным и грязным, вернули всё в идеальном состоянии, почти как новые))) спасибо большое за оперативность и качество!",
  },
  {
    name: "Алина Каримова",
    rating: 5,
    text: "Заказывали генеральную уборку перед Новым годом. Квартира сияла! Особенно порадовала работа с окнами — ни одного развода. Теперь только GrandClean.",
  },
  {
    name: "Дмитрий Ли",
    role: "Директор IT-компании",
    rating: 5,
    text: "Обслуживают наш офис уже второй год. Всегда приходят вовремя, работают аккуратно. Сотрудники довольны чистотой. Рекомендую для бизнеса.",
    date: "Март 2024",
  },
  {
    name: "Нодира Хасанова",
    role: "Мама двоих детей",
    rating: 5,
    text: "С двумя маленькими детьми уборка — это ежедневный вызов. GrandClean стали нашим спасением. Используют безопасные средства, что очень важно для семьи.",
    date: "Февраль 2024",
  },
  {
    name: "Артём Сергеев",
    role: "Владелец ресторана",
    rating: 5,
    text: "После ремонта ресторана нужна была срочная уборка. Команда приехала в тот же день и сделала всё идеально. Профессионалы своего дела!",
    date: "Декабрь 2023",
  },
  {
    name: "Малика Рахимова",
    role: "Владелец квартиры",
    rating: 5,
    text: "Заказываю поддерживающую уборку два раза в месяц. Всегда безупречный результат. Приятный бонус — скидка на абонемент. Спасибо!",
    date: "Апрель 2024",
  },
  {
    name: "Бахтиёр Усманов",
    role: "Управляющий ТРЦ",
    rating: 5,
    text: "Сотрудничаем с GrandClean для обслуживания торгового центра. Большая площадь, но команда справляется отлично. Надёжные партнёры.",
    date: "Ноябрь 2023",
  },
];

const stats = [
  { value: "1 000+", label: "Довольных клиентов" },
  { value: "4.9", label: "Средняя оценка" },
  { value: "99%", label: "Рекомендуют нас" },
  { value: "50+", label: "Корпоративных клиентов" },
];

export default function ReviewsPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang;
  const t = getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.jpg"
            alt="Отзывы"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t.reviews.pageSubtitle}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {t.reviews.pageTitle}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {t.reviews.pageDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ice">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection
              key={s.label}
              delay={i * 0.1}
              className="text-center"
            >
              <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient-gold">
                {s.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                {lang === "uz" && s.label === "Довольных клиентов"
                  ? "Mamnun mijozlar"
                  : lang === "uz" && s.label === "Средняя оценка"
                    ? "O'rtacha baho"
                    : lang === "uz" && s.label === "Рекомендуют нас"
                      ? "Tavsiya qilishadi"
                      : lang === "uz" && s.label === "Корпоративных клиентов"
                        ? "Korporativ mijozlar"
                        : s.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Reviews grid - masonry style */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.05}>
                <div className="bg-[#1e1e1e]/50 border border-gold rounded-lg p-6 sm:p-8 h-full flex flex-col hover-lift">
                  <div className="font-display font-medium text-xl md:text-2xl text-white mb-2 text-center">
                    {review.name}
                  </div>

                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-5 h-5 fill-gold text-gold scale-[1.1]"
                      />
                    ))}
                  </div>

                  <p className="text-white/90 text-[15px] sm:text-base leading-relaxed flex-1">
                    {review.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              {t.reviews.ctaTitle}
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto mb-8">
              {t.reviews.ctaDesc}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
            >
              {t.nav.order}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
