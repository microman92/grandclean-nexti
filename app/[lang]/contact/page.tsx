"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";
import { toast } from "sonner";
import Image from "next/image";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+998 93 571 21 51",
    href: "tel:+998935712151",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@grandclean.uz",
    href: "mailto:info@grandclean.uz",
  },
  { icon: MapPin, label: "Адрес", value: "Ташкент, Babur Street, 48" },
  { icon: Clock, label: "Режим работы", value: "Пн-Вс: 08:00 — 22:00" },
];

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang;
  const t = getDictionary(lang);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      lang === "ru"
        ? "Заявка отправлена! Мы перезвоним в течение 15 минут."
        : "Arizangiz qabul qilindi! 15 daqiqa ichida sizga qo'ng'iroq qilamiz.",
    );
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val === "") {
      setForm({ ...form, phone: "" });
      return;
    }

    if (val.length > 0 && !val.startsWith("998")) {
      val = "998" + val;
    }

    let formatted = "+998";
    if (val.length > 3) {
      formatted += "-" + val.substring(3, 5);
    }
    if (val.length > 5) {
      formatted += "-" + val.substring(5, 8);
    }
    if (val.length > 8) {
      formatted += "-" + val.substring(8, 10);
    }
    if (val.length > 10) {
      formatted += "-" + val.substring(10, 12);
    }

    setForm({ ...form, phone: formatted });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.jpg"
            alt="Контакты"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {lang === "ru" ? "Контакты" : "Kontaktlar"}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {lang === "ru" ? "Свяжитесь с нами" : "Biz bilan bog'laning"}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {lang === "ru"
                ? "Оставьте заявку и мы перезвоним в течение 15 минут"
                : "Arizangizni qoldiring va biz 15 daqiqa ichida siz bilan bog'lanamiz"}
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
                  {lang === "ru"
                    ? "Заказать уборку"
                    : "Tozalashni buyurtma qilish"}
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  {lang === "ru"
                    ? "Заполните форму и мы подготовим индивидуальное предложение"
                    : "Shaklni to'ldiring va biz siz uchun individual taklif tayyorlaymiz"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang === "ru" ? "Ваше имя" : "Ismingiz"}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder={
                          lang === "ru"
                            ? "Как к вам обращаться?"
                            : "Ismingizni kiriting"
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang === "ru" ? "Телефон" : "Telefon"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handlePhoneChange}
                        maxLength={17}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="+998-XX-XXX-XX-XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {lang === "ru" ? "Тип услуги" : "Xizmat turi"}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">
                        {lang === "ru" ? "Выберите услугу" : "Xizmatni tanlang"}
                      </option>
                      <option>
                        {lang === "ru" ? "Уборка квартир" : "Kvartira tozalash"}
                      </option>
                      <option>
                        {lang === "ru" ? "Уборка офисов" : "Ofis tozalash"}
                      </option>
                      <option>
                        {lang === "ru" ? "Генеральная уборка" : "Bosh tozalash"}
                      </option>
                      <option>
                        {lang === "ru"
                          ? "Уборка после ремонта"
                          : "Ta'mirdan keyingi tozalash"}
                      </option>
                      <option>
                        {lang === "ru"
                          ? "Химчистка мебели"
                          : "Mebel kimyoviy tozalash"}
                      </option>
                      <option>
                        {lang === "ru" ? "Мойка окон" : "Oyna yuvish"}
                      </option>
                      <option>
                        {lang === "ru" ? "Мытьё фасадов" : "Fasad yuvish"}
                      </option>
                      <option>
                        {lang === "ru"
                          ? "Чистка брусчатки"
                          : "Bruchka tozalash"}
                      </option>
                      <option>
                        {lang === "ru" ? "Дезинфекция" : "Dezinfeksiya"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {lang === "ru" ? "Сообщение" : "Xabar"}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                      placeholder={
                        lang === "ru"
                          ? "Расскажите о вашем помещении и пожеланиях..."
                          : "Xonalaringiz haqida va tilaklaringizni yozing..."
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {lang === "ru"
                      ? "Отправить заявку"
                      : "Sorovingizni yuboring"}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-6">
                    {lang === "ru"
                      ? "Контактная информация"
                      : "Bog'lanish uchun ma'lumotlar"}
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                    {contactInfo.map((c) => (
                      <div
                        key={c.label}
                        className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center shrink-0">
                          <c.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground mb-0.5">
                            {lang === "ru"
                              ? c.label
                              : c.label === "Телефон"
                                ? "Telefon"
                                : c.label === "Email"
                                  ? "Email"
                                  : c.label === "Адрес"
                                    ? "Manzil"
                                    : "Ish vaqti"}
                          </div>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="text-sm font-medium text-white hover:text-gold transition-colors break-words block"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-white break-words block">
                              {c.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden bg-card h-[240px] lg:h-auto min-h-[240px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.238271127505!2d69.25474729999999!3d41.281918499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d42311a1861%3A0x38ab33b4afa47cfd!2sGrand%20Clean!5e0!3m2!1sru!2s!4v1776086792034!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Quick contact */}
                <div className="bg-navy-gradient rounded-xl p-6">
                  <h4 className="font-display font-bold text-sm text-primary-foreground mb-2">
                    {lang === "ru"
                      ? "Нужна срочная уборка?"
                      : "Tezkor tozalash kerakmi?"}
                  </h4>
                  <p className="text-primary-foreground/60 text-xs mb-4">
                    {lang === "ru"
                      ? "Позвоните нам и мы организуем выезд в течение 2 часов"
                      : "Bizga qo'ng'iroq qiling va biz 2 soat ichida tashrif buyurishni tashkil qilamiz"}
                  </p>
                  <a
                    href="tel:+998935712151"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-xs bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {lang === "ru"
                      ? "Позвонить сейчас"
                      : "Hozir qo'ng'iroq qiling"}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
