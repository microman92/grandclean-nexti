import { Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

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

export default function PricingGrid() {
  return (
    <section className="section-padding bg-background relative z-10">
      <div className="container-wide">
        <SectionHeading
          label="Тарифы на стирку ковров"
          title="Специализированная чистка"
          description="Выберите подходящий тариф для вашего ковра"
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
                  Хит продаж
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
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                  tariff.focused
                    ? "bg-gold text-accent-foreground hover:bg-gold-light"
                    : "bg-white/5 text-white hover:bg-gold hover:text-accent-foreground"
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        {/* Информационный блок о стирке */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden transition-all hover:border-gold/20 hover:bg-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="max-w-3xl text-center mb-12">
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
                Стираем ковры на турецком оборудовании с использованием немецких
                средств
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Стирка проходит 5 этапов чистки для гарантии безупречного
                результата:
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="w-full relative"
            >
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/10" />

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                {[
                  { title: "Выбивание" },
                  { title: "Замачивание" },
                  { title: "Стирка", subtitle: "на спец. оборудовании" },
                  { title: "Отжим" },
                  { title: "Сушка", subtitle: "с озонатором" },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: {
                        opacity: idx === 0 ? 1 : 0,
                        x: idx === 0 ? 0 : -40,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 70,
                          damping: 15,
                        },
                      },
                    }}
                    className="flex flex-col items-center justify-start text-center p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-white/5 h-full relative group hover:border-gold/30 hover:bg-white/5 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-background border-2 border-gold/30 group-hover:border-gold text-gold flex items-center justify-center font-bold text-lg mb-4 shadow-[0_0_15px_rgba(255,184,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] transition-all duration-300 relative z-10">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-semibold text-white/90 leading-tight mb-1 group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                    {step.subtitle && (
                      <span className="text-[12px] text-muted-foreground leading-tight">
                        {step.subtitle}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
