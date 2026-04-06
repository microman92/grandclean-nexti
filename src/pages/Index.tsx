import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  Star,
  Sparkles,
  Users,
  CheckCircle2,
  Award,
  Percent,
  ThumbsUp,
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PricingGrid from "@/components/PricingGrid";
import Promotions from "@/components/Promotions";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import Geography from "@/components/Geography";
import { servicesData as services } from "@/data/services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { heroImg } from "@/assets";

const advantages = [
  {
    icon: Award,
    title: "Качество",
    desc: "Наши профессионалы используют современные методы и экологически чистые средства, чтобы добиться безупречного результата.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    desc: "Мы ценим здоровье вас и ваших близких. Поэтому мы используем только безопасные химические компоненты, которые не представляют угрозу.",
  },
  {
    icon: Users,
    title: "Подход к каждому",
    desc: "Мы работаем с каждым клиентом индивидуально, учитывая все ваши пожелания и требования.",
  },
  {
    icon: Clock,
    title: "Скорость",
    desc: "Мы ценим ваше время. Поэтому мы выполняем наши работы быстро и эффективно, чтобы вы могли наслаждаться чистотой как можно скорее.",
  },
  {
    icon: Percent,
    title: "Цены",
    desc: "Наше качество доступно. Мы предлагаем конкурентоспособные цены, а также скидки для наших постоянных клиентов.",
  },
  {
    icon: ThumbsUp,
    title: "Удобство",
    desc: "Мы заботимся о вашем комфорте. У нас есть удобная система заказов, гибкое расписание и доставка мебели/ковров.",
  },
];

const steps = [
  {
    num: "01",
    title: "Подготовка помещения",
    desc: "Осмотр объекта и подбор специализированной химии",
  },
  {
    num: "02",
    title: "Основная чистка",
    desc: "Глубокое очищение поверхностей и материалов",
  },
  {
    num: "03",
    title: "Удаление пятен",
    desc: "Точечная работа со сложными загрязнениями",
  },
  { num: "04", title: "Дезинфекция", desc: "Обработка и сушка очищенных зон" },
  {
    num: "05",
    title: "Проверка качества",
    desc: "Финальный осмотр и сдача работы клиенту",
  },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

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
              Безупречная <span className="text-gradient-gold">чистота</span>{" "}
              вашего пространства
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              Профессиональная химчистка мебели, стирка ковров и уборка квартир
              в Ташкенте. Используем оборудование Karcher и безопасные
              эко-средства.
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
                { val: "1000+", label: "Довольных клиентов" },
                { val: "5+", label: "Лет на рынке" },
                { val: "99%", label: "Рекомендуют нас" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-gold">
                    {s.val}
                  </div>
                  <div className="text-primary-foreground/50 text-xs mt-1">
                    {s.label}
                  </div>
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
              <img
                src={heroImg}
                alt="Чистый интерьер"
                className="w-full h-[520px] object-cover"
              />
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
                  onClick={() => {
                    if (activeService === i) navigate(`/services/${s.id}`);
                    else setActiveService(i);
                  }}
                  onMouseEnter={() => setActiveService(i)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 group ${
                    activeService === i
                      ? "bg-white/10 shadow-elevated"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
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
                    {s.price && (
                      <div className="self-start mt-1 mb-2 px-3 py-1 rounded-md bg-black/40 border border-white/5">
                        <span className="text-gold font-semibold text-sm">
                          {s.price}
                        </span>
                      </div>
                    )}
                  </div>
                  {activeService === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground text-sm mt-2 mb-3 leading-relaxed">
                        {s.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">
                        Узнать подробнее
                      </span>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic image */}
            <Link
              to={`/services/${services[activeService].id}`}
              className="lg:col-span-3 relative block group/img"
            >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent hidden" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-4 py-1.5 mb-3 rounded-lg bg-black/60 border border-gold/30 backdrop-blur-sm">
                    <span className="text-gold font-bold">
                      {services[activeService].price}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {services[activeService].shortDesc}
                  </p>
                </div>
              </motion.div>
            </Link>
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

      {/* ===== PROMOTIONS ===== */}
      <Promotions />

      {/* ===== ADVANTAGES ===== */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Glow element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-wide relative z-10">
          <SectionHeading
            label="Преимущества"
            title="Почему выбирают нас"
            description="Мы не просто убираем — мы создаём атмосферу чистоты и комфорта"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                  hover: {
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                }}
                className="group relative p-8 rounded-2xl bg-card border border-white/5 overflow-hidden transition-colors transition-shadow duration-300 hover:border-gold/30 hover:shadow-[0_10px_30px_-10px_rgba(255,184,0,0.15)]"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-background border border-white/10 group-hover:border-gold/50 flex items-center justify-center mb-6 transition-colors duration-300 shadow-elevated">
                    <a.icon className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-padding bg-background overflow-hidden relative">
        <div className="container-wide">
          <SectionHeading
            label="Как мы работаем"
            title="Наш процесс — залог чистоты"
            description="5 этапов идеального клининга вашего помещения"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative mt-16 pb-10 gap-8 md:gap-4">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gold/20 -z-10" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.15, duration: 0.5 },
                  },
                }}
                className="group flex flex-col items-center flex-1 text-center relative z-10 w-full"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#FFB800" }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-gold/40 flex items-center justify-center mb-6 transition-colors shadow-elevated cursor-pointer"
                >
                  <motion.span className="font-display font-extrabold text-xl text-gold group-hover:text-white transition-colors">
                    {step.num}
                  </motion.span>
                </motion.div>

                {/* Text box with hover lift */}
                <motion.div whileHover={{ y: -5 }} className="transition-all">
                  <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingGrid />
      <BeforeAfter />
      <FAQ />
      <Geography />

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
              Первая уборка со скидкой 20%. Оставьте заявку и мы перезвоним в
              течение 15 минут.
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
