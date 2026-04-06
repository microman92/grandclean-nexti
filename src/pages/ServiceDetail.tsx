import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 inline-block shadow-elevated">
              <div className="text-sm uppercase tracking-wider font-semibold text-white/50 mb-2">
                Начальная стоимость
              </div>
              <div className="font-display font-bold text-4xl text-gold">
                {service.price}
              </div>
            </div>

            <div className="block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-xl font-display font-bold text-lg bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
              >
                Заказать услугу
                <ArrowRight className="w-5 h-5" />
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

            <div className="bg-card p-10 rounded-3xl border border-white/5 shadow-lg">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
                Что включено в стоимость:
              </h3>
              <ul className="space-y-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-5 text-lg">
                    <Check className="w-8 h-8 text-gold shrink-0 bg-gold/10 p-1.5 rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
