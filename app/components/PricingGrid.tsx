"use client";

import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

const tariffs = [
  {
    name: "Освежить",
    price: "15.000",
    desc: "Если Вы хотите просто освежить Ваши ковры",
    features: [
      "Однофазная стирка ковров",
      "Освежение внешнего вида",
      "Удаление поверхностной пыли",
    ],
  },
  {
    name: "Стандарт",
    price: "22.000",
    focused: true,
    desc: "Если давно не стирали и ворс слег",
    features: [
      "Двойная стирка",
      "Эффективное восстановление ворса",
      "Глубокая очистка загрязнений",
    ],
  },
  {
    name: "Деликатный",
    price: "33.000",
    desc: "Для ковров из акрила, шерсти, шелка или вискозы",
    features: [
      "Деликатная бережная стирка",
      "Использование кондиционера",
      "Максимальная мягкость ворса",
    ],
  },
  {
    name: "Deluxe",
    price: "44.000",
    desc: "Для ковров ручной работы и из кожи",
    features: [
      "Только сухая чистка режима deluxe",
      "Бережный уход за материалами",
      "Без стирки в воде",
    ],
  },
];

const washSteps = [
  { title: "Выбивание" },
  { title: "Замачивание" },
  { title: "Стирка", subtitle: "на спец. оборудовании" },
  { title: "Отжим" },
  { title: "Сушка", subtitle: "с озонатором" },
];

export default function PricingGrid({ lang = "ru" }: { lang?: Locale }) {
  const isRu = lang === "ru";

  return (
    <section className="section-padding bg-background relative z-10">
      <div className="container-wide">
        <SectionHeading
          label={
            isRu ? "Тарифы на стирку ковров" : "Gilam yuvish tariflari"
          }
          title={
            isRu
              ? "Специализированная чистка в Ташкенте"
              : "Toshkentda maxsus tozalash"
          }
          description={
            isRu
              ? "Выберите подходящий тариф для вашего ковра"
              : "Gilamingiz uchun mos tarifni tanlang"
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tariffs.map((tariff) => (
            <div
              key={tariff.name}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                tariff.focused
                  ? "bg-white/10 border-gold shadow-[0_0_30px_rgba(255,184,0,0.15)] transform scale-105 z-10"
                  : "bg-card border-border/50 hover:border-gold/30 hover:bg-white/5"
              }`}
            >
              {tariff.focused && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-accent-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  {isRu ? "Хит продаж" : "Eng ko'p sotiladi"}
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {tariff.name}
              </h3>
              <div className="mb-4">
                <span className="font-display font-extrabold text-3xl text-gold">
                  {tariff.price}
                </span>
                <span className="text-muted-foreground ml-2">сум/м²</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mb-6 flex-1 min-h-[40px]">
                {tariff.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tariff.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/${lang}/contact`}
       
                className={`w-full inline-block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  tariff.focused
                    ? "bg-gold text-accent-foreground hover:bg-gold-light"
                    : "bg-white/5 text-white hover:bg-gold hover:text-accent-foreground"
                }`}
              >
                {isRu ? "Выбрать тариф" : "Tarifni tanlash"}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden transition-all hover:border-gold/20 hover:bg-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="max-w-3xl text-center mb-12">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
                {isRu
                  ? "Стираем ковры на турецком оборудовании с использованием немецких средств"
                  : "Turk uskunasi va nemis vositalari bilan gilam yuvamiz"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {isRu
                  ? "Стирка проходит 5 этапов чистки для гарантии безупречного результата:"
                  : "Mukammal natija uchun 5 bosqichli tozalash jarayoni:"}
              </p>
            </div>

            <div className="w-full relative">
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/10" />

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                {washSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex flex-col items-center justify-start text-center p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-white/5 h-full relative group hover:border-gold/30 hover:bg-white/5 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-background border-2 border-gold/30 group-hover:border-gold text-gold flex items-center justify-center font-bold text-lg mb-4 shadow-[0_0_15px_rgba(255,184,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] transition-all duration-300 relative z-10">
                      {idx + 1}
                    </div>
                    <h3 className="text-sm font-semibold text-white/90 leading-tight mb-1 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-[12px] text-muted-foreground leading-tight">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
