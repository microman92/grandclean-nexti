import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Алина Каримова",
    role: "Владелец квартиры",
    rating: 5,
    text: "Заказывали генеральную уборку перед Новым годом. Квартира сияла! Особенно порадовала работа с окнами — ни одного развода. Теперь только GrandClean.",
    date: "Январь 2024",
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
  { value: "10 000+", label: "Довольных клиентов" },
  { value: "4.9", label: "Средняя оценка" },
  { value: "99%", label: "Рекомендуют нас" },
  { value: "50+", label: "Корпоративных клиентов" },
];

export default function ReviewsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Отзывы
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Отзывы клиентов
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Что говорят о нас наши клиенты
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ice">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient-gold">{s.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
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
                <div className="bg-ice rounded-xl p-7 h-full flex flex-col hover-lift">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />

                  <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="font-display font-semibold text-sm text-navy">{review.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {review.role} · {review.date}
                    </div>
                  </div>
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
              Присоединяйтесь к довольным клиентам
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto mb-8">
              Закажите первую уборку со скидкой 20% и убедитесь в нашем качестве
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
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
