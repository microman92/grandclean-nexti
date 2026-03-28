import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Телефон", value: "+998 90 123 45 67", href: "tel:+998901234567" },
  { icon: Mail, label: "Email", value: "info@grandclean.uz", href: "mailto:info@grandclean.uz" },
  { icon: MapPin, label: "Адрес", value: "Ташкент, ул. Навои 100" },
  { icon: Clock, label: "Режим работы", value: "Пн-Вс: 08:00 — 22:00" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Контакты
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Оставьте заявку и мы перезвоним в течение 15 минут
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10">
                <h2 className="font-display font-bold text-2xl text-white mb-2">
                  Заказать уборку
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Заполните форму и мы подготовим индивидуальное предложение
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="+998 __ ___ __ __"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Тип услуги</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">Выберите услугу</option>
                      <option>Уборка квартир</option>
                      <option>Уборка офисов</option>
                      <option>Генеральная уборка</option>
                      <option>Уборка после ремонта</option>
                      <option>Химчистка мебели</option>
                      <option>Мойка окон</option>
                      <option>Мытьё фасадов</option>
                      <option>Чистка брусчатки</option>
                      <option>Дезинфекция</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                      placeholder="Расскажите о вашем помещении и пожеланиях..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-6">Контактная информация</h3>
                  <div className="space-y-6">
                    {contactInfo.map((c) => (
                      <div key={c.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center shrink-0">
                          <c.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                          {c.href ? (
                            <a href={c.href} className="text-sm font-medium text-white hover:text-gold transition-colors">
                              {c.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-white">{c.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden bg-card h-[240px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Ташкент, Узбекистан</p>
                    <p className="text-xs text-muted-foreground mt-1">ул. Навои 100</p>
                  </div>
                </div>

                {/* Quick contact */}
                <div className="bg-navy rounded-xl p-6">
                  <h4 className="font-display font-bold text-sm text-primary-foreground mb-2">
                    Нужна срочная уборка?
                  </h4>
                  <p className="text-primary-foreground/60 text-xs mb-4">
                    Позвоните нам и мы организуем выезд в течение 2 часов
                  </p>
                  <a
                    href="tel:+998901234567"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-xs bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Позвонить сейчас
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
