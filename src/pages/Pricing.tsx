import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const pricingData = [
  {
    header: "Уборка квартир",
    items: [
      { service: "1-комнатная", support: "от 150 000", general: "от 350 000", afterRepair: "от 500 000" },
      { service: "2-комнатная", support: "от 200 000", general: "от 450 000", afterRepair: "от 650 000" },
      { service: "3-комнатная", support: "от 280 000", general: "от 600 000", afterRepair: "от 850 000" },
      { service: "4-комнатная", support: "от 350 000", general: "от 750 000", afterRepair: "от 1 000 000" },
    ],
  },
  {
    header: "Дополнительные услуги",
    items: [
      { service: "Мытьё окон (1 шт)", support: "30 000", general: "—", afterRepair: "—" },
      { service: "Химчистка дивана", support: "250 000", general: "—", afterRepair: "—" },
      { service: "Химчистка матраса", support: "200 000", general: "—", afterRepair: "—" },
      { service: "Химчистка ковра (м²)", support: "25 000", general: "—", afterRepair: "—" },
      { service: "Глажка белья (час)", support: "50 000", general: "—", afterRepair: "—" },
    ],
  },
];

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

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Цены
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Прозрачные цены
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Честные цены без скрытых платежей. Оплата только за результат.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {pricingData.map((table, ti) => (
            <AnimatedSection key={table.header} className={ti > 0 ? "mt-16" : ""}>
              <h3 className="font-display font-bold text-2xl text-white mb-6">{table.header}</h3>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left px-6 py-4 font-display font-semibold text-sm text-white">Услуга</th>
                      <th className="text-center px-6 py-4 font-display font-semibold text-sm text-white">Поддерживающая</th>
                      <th className="text-center px-6 py-4 font-display font-semibold text-sm text-white">Генеральная</th>
                      <th className="text-center px-6 py-4 font-display font-semibold text-sm text-white">После ремонта</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.items.map((row, i) => (
                      <tr key={row.service} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card/50"}`}>
                        <td className="px-6 py-4 font-medium text-sm text-foreground">{row.service}</td>
                        <td className="px-6 py-4 text-center text-sm text-foreground">{row.support}</td>
                        <td className="px-6 py-4 text-center text-sm text-foreground">{row.general}</td>
                        <td className="px-6 py-4 text-center text-sm text-foreground">{row.afterRepair}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">* Цены указаны в узбекских сумах</p>
            </AnimatedSection>
          ))}

          {/* What's included */}
          <AnimatedSection className="mt-16">
            <div className="bg-ice rounded-2xl p-8 md:p-12">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Что включено в стоимость</h3>
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

      {/* FAQ */}
      <section className="section-padding bg-ice">
        <div className="container-wide max-w-3xl">
          <SectionHeading label="Вопросы" title="Часто задаваемые вопросы" />

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

      {/* CTA */}
      <section className="section-padding bg-navy-gradient">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Рассчитать точную стоимость
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto mb-8">
              Оставьте заявку и получите индивидуальный расчёт за 15 минут
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
            >
              Узнать стоимость
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
