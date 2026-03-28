import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, Sparkles, Users, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-interior.jpg";
import officeImg from "@/assets/office-clean.jpg";
import apartmentImg from "@/assets/apartment-clean.jpg";
import { useState } from "react";

const services = [
  {
    title: "Уборка квартир",
    desc: "Регулярная и разовая уборка жилых помещений любой площади с использованием профессиональных средств.",
    img: apartmentImg,
  },
  {
    title: "Уборка офисов",
    desc: "Поддержание безупречной чистоты в офисных пространствах. Работаем в удобное для вас время.",
    img: officeImg,
  },
  {
    title: "Генеральная уборка",
    desc: "Глубокая очистка каждого уголка помещения. Идеально для сезонной уборки или перед важными событиями.",
    img: heroImg,
  },
  {
    title: "Уборка после ремонта",
    desc: "Удаление строительной пыли, остатков клея, цемента. Полная подготовка помещения к заселению.",
    img: apartmentImg,
  },
  {
    title: "Химчистка мебели",
    desc: "Глубокая химчистка диванов, кресел, матрасов и ковров. Удаление пятен, запахов и аллергенов.",
    img: officeImg,
  },
  {
    title: "Мойка окон",
    desc: "Профессиональное мытьё окон на любой высоте. Чистка рам, подоконников и стеклопакетов без разводов.",
    img: heroImg,
  },
  {
    title: "Мытьё фасадов",
    desc: "Очистка фасадов зданий от загрязнений, пыли и копоти. Работаем на любой высоте с промышленным оборудованием.",
    img: officeImg,
  },
  {
    title: "Чистка брусчатки",
    desc: "Удаление мха, грязи и пятен с тротуарной плитки и брусчатки. Возвращаем первоначальный вид покрытию.",
    img: heroImg,
  },
  {
    title: "Дезинфекция",
    desc: "Профессиональная дезинфекция помещений. Уничтожение бактерий, вирусов и аллергенов. Безопасно для людей и животных.",
    img: apartmentImg,
  },
];

const advantages = [
  { icon: Shield, title: "Гарантия качества", desc: "Если результат не устроит — переделаем бесплатно" },
  { icon: Clock, title: "Точно в срок", desc: "Приезжаем в оговорённое время без задержек" },
  { icon: Star, title: "5+ лет опыта", desc: "Более 10 000 довольных клиентов в Ташкенте" },
  { icon: Users, title: "Проверенная команда", desc: "Все сотрудники проходят тщательную проверку" },
];

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Позвоните или заполните форму на сайте" },
  { num: "02", title: "Согласование", desc: "Менеджер уточнит детали и стоимость" },
  { num: "03", title: "Выполнение", desc: "Команда приедет в назначенное время" },
  { num: "04", title: "Приёмка", desc: "Проверьте результат и оплатите" },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-gold blur-2xl" />
        </div>

        <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 md:py-20">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-display font-semibold tracking-wider uppercase mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Премиум клининг в Ташкенте
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6"
            >
              Безупречная{" "}
              <span className="text-gradient-gold">чистота</span>{" "}
              вашего пространства
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              Профессиональная уборка квартир, домов и офисов. Доверьте чистоту экспертам — мы заботимся о каждой детали.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 flex items-center gap-2 shadow-gold"
              >
                Заказать уборку
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 rounded-lg font-display font-semibold text-sm border border-primary-foreground/20 text-primary-foreground hover:border-gold/50 hover:text-gold transition-colors duration-200"
              >
                Узнать стоимость
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex gap-8 md:gap-12"
            >
              {[
                { val: "10 000+", label: "Довольных клиентов" },
                { val: "5+", label: "Лет на рынке" },
                { val: "99%", label: "Рекомендуют нас" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-gold">{s.val}</div>
                  <div className="text-primary-foreground/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={heroImg} alt="Чистый интерьер" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES INTERACTIVE ===== */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Наши услуги"
            title="Полный спектр клининговых услуг"
            description="Мы предлагаем широкий выбор услуг по уборке для дома и бизнеса"
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Service list */}
            <div className="lg:col-span-2 space-y-2">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveService(i)}
                  onMouseEnter={() => setActiveService(i)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 group ${
                    activeService === i
                      ? "bg-white/10 shadow-elevated"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display font-semibold text-base ${
                        activeService === i ? "text-white" : "text-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        activeService === i
                          ? "text-gold translate-x-0 opacity-100"
                          : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  {activeService === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-muted-foreground text-sm mt-2 leading-relaxed"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic image */}
            <div className="lg:col-span-3 relative">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]"
              >
                <img
                  src={services[activeService].img}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-white/80 text-sm">{services[activeService].desc}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-foreground hover:text-gold transition-colors"
            >
              Все услуги
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="section-padding bg-ice">
        <div className="container-wide">
          <SectionHeading
            label="Преимущества"
            title="Почему выбирают нас"
            description="Мы не просто убираем — мы создаём атмосферу чистоты и комфорта"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="group bg-card rounded-xl p-8 hover-lift cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <a.icon className="w-6 h-6 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Как мы работаем"
            title="Четыре простых шага"
            description="Заказать уборку проще, чем вы думаете"
          />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="font-display font-extrabold text-2xl text-gradient-gold">{step.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-navy-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-2xl" />

        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Готовы к чистоте?
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
              Закажите уборку прямо сейчас
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto mb-10">
              Первая уборка со скидкой 20%. Оставьте заявку и мы перезвоним в течение 15 минут.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 shadow-gold"
            >
              Заказать уборку
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
