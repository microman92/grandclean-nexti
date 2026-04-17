import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CarpetWashingSteps from "@/components/CarpetWashingSteps";
import ServiceFAQ from "@/components/ServiceFAQ";
import { servicesData } from "@/data/services";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) return <NotFound />;

  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-wide relative z-10 mt-8">
          <AnimatedSection>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-semibold mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Назад ко всем услугам
            </Link>
            <span className="block font-display font-semibold text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
              {service.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-8 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl leading-relaxed">
              {service.shortDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative z-20">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              О сервисе
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              {service.fullDesc}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-8 mb-8 lg:mb-10 inline-block shadow-elevated">
              <div className="text-xs lg:text-sm uppercase tracking-wider font-semibold text-white/50 mb-1.5 lg:mb-2">
                Начальная стоимость
              </div>
              <div className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-gold">
                {service.price}
              </div>
            </div>

            <div className="block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 lg:gap-3 w-full sm:w-auto px-6 lg:px-10 py-3.5 lg:py-5 rounded-xl font-display font-bold text-base lg:text-lg bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
              >
                Заказать услугу
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-elevated border border-white/5 mb-10">
              <img
                src={service.img}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* --- Обновленный, адаптивный блок что включено (для ВСЕХ услуг) --- */}
        <div className="container-wide mt-12 md:mt-16">
          <AnimatedSection delay={0.2}>
            <div className="bg-card p-8 md:p-12 lg:p-14 rounded-[2rem] border border-white/5 shadow-xl relative overflow-hidden">
              {/* Декоративная иконка щита на фоне для дизайна */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03] pointer-events-none">
                <ShieldCheck className="w-96 h-96 text-gold" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                {/* SEO-блок с описанием и заголовком (забирает часть пространства слева) */}
                <div className="lg:w-5/12 bg-transparent">
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                    Что входит
                    <br />
                    <span className="text-gold">в стоимость</span>
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    Мы ответственно подходим к выполнению услуги{" "}
                    <strong>{service.title.toLowerCase()}</strong>. В финальную
                    стоимость уже включены все необходимые этапы, премиальные
                    чистящие средства и профессиональное оборудование. Никаких
                    скрытых платежей.
                  </p>
                </div>

                {/* Сетка включенных опций (забирает оставшееся пространство справа, нет "воздуха") */}
                <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
                  {service.includes.map((item) => (
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

        {/* --- FAQ блок для SEO и ИИ-поиска --- */}
        {service.faq && service.faq.length > 0 && (
          <div className="container-wide mt-12 md:mt-16">
            <ServiceFAQ faq={service.faq} serviceTitle={service.title} />
          </div>
        )}

        {/* --- Индивидуальный блок только для стирки ковров --- */}
        {service.id === "stirka-kovrov" && (
          <div className="container-wide mt-12 md:mt-16">
            <CarpetWashingSteps />
          </div>
        )}
      </section>
    </Layout>
  );
}
