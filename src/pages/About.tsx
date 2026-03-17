import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/team.jpg";
import officeImg from "@/assets/office-clean.jpg";
import { Target, Heart, Leaf, Award } from "lucide-react";

const timeline = [
  { year: "2015", title: "Основание компании", desc: "Начали с небольшой команды из 5 человек и мечты сделать Ташкент чище." },
  { year: "2017", title: "1 000 клиентов", desc: "Расширили команду до 30 специалистов. Запустили услуги для бизнеса." },
  { year: "2019", title: "Новые технологии", desc: "Инвестировали в профессиональное оборудование европейского уровня." },
  { year: "2021", title: "Лидер рынка", desc: "Стали одной из крупнейших клининговых компаний в Узбекистане." },
  { year: "2024", title: "10 000+ клиентов", desc: "Обслуживаем дома, офисы и коммерческие объекты по всему Ташкенту." },
];

const values = [
  { icon: Target, title: "Точность", desc: "Внимание к каждой детали в нашей работе" },
  { icon: Heart, title: "Забота", desc: "Мы относимся к вашему дому как к своему" },
  { icon: Leaf, title: "Экологичность", desc: "Используем безопасные средства для здоровья" },
  { icon: Award, title: "Качество", desc: "Высокие стандарты на каждом этапе" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              О компании
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Мы — GrandClean
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Команда профессионалов, которая превращает уборку в искусство
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story with image */}
      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <img src={teamImg} alt="Наша команда" className="rounded-2xl w-full h-[420px] object-cover" />
              <div className="absolute -bottom-4 -right-4 bg-gold rounded-xl px-6 py-4 shadow-gold">
                <span className="font-display font-extrabold text-3xl text-accent-foreground">5+</span>
                <span className="block text-xs font-semibold text-accent-foreground/80">лет опыта</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Наша история
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy leading-tight mb-6">
              От идеи до лидерства на рынке
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GrandClean была основана в 2015 году с простой миссией — сделать профессиональный клининг доступным каждому жителю Ташкента. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Сегодня мы — команда из более чем 80 проверенных специалистов, оснащённых современным оборудованием и экологичными средствами. Мы обслуживаем тысячи клиентов и постоянно совершенствуем качество наших услуг.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Каждый клиент для нас — приоритет. Мы верим, что чистое пространство — это основа продуктивности, здоровья и хорошего настроения.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ice">
        <div className="container-wide">
          <SectionHeading label="Наши ценности" title="Принципы нашей работы" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-background rounded-xl p-8 h-full text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Путь развития" title="Наша история роста" />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}>
                    <span className="font-display font-extrabold text-2xl text-gradient-gold">{item.year}</span>
                    <h3 className="font-display font-bold text-lg text-navy mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
              label="Команда"
              title="Профессионалы своего дела"
              description="Более 80 квалифицированных специалистов готовы к работе"
            />
            <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <img src={officeImg} alt="Наш офис" className="w-full h-[300px] md:h-[400px] object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
