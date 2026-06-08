"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { BUSINESS } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import AnimatedSection from "@/app/components/AnimatedSection";
import { toast } from "sonner";
import Image from "next/image";

export default function ContactClient({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: BUSINESS.phoneDisplay,
      href: `tel:${BUSINESS.phoneE164}`,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
    },
    {
      icon: Clock,
      label: t.contact.workHours,
      value: t.contact.workHoursValue,
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = [form.service, form.message].filter(Boolean).join(" | ");
    try {
      const res = await fetch("/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, tel: form.phone, msg }),
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success(t.contact.formSuccess);
        setForm({ name: "", phone: "", service: "", message: "" });
      } else {
        toast.error(data.message || "Ошибка отправки");
      }
    } catch {
      toast.error("Не удалось отправить заявку. Проверьте соединение.");
    } finally {
      setLoading(false);
    }
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
    if (val.length > 3) formatted += "-" + val.substring(3, 5);
    if (val.length > 5) formatted += "-" + val.substring(5, 8);
    if (val.length > 8) formatted += "-" + val.substring(8, 10);
    if (val.length > 10) formatted += "-" + val.substring(10, 12);

    setForm({ ...form, phone: formatted });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-padding min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.webp"
            alt={t.contact.pageTitle}
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t.contact.pageSubtitle}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              {t.contact.h1}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {t.contact.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10">
                <h2 className="font-display font-bold text-2xl text-white mb-2">
                  {t.contact.formTitle}
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  {t.contact.formDesc}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder={t.contact.formNamePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.phone}
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
                      {t.contact.formService}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">{t.contact.formServiceDefault}</option>
                      {t.contact.serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                      placeholder={t.contact.formMessagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "..." : t.contact.formSubmit}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-6">
                    {t.contact.infoTitle}
                  </h2>
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
                            {c.label}
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

                <div className="rounded-xl overflow-hidden bg-card h-[240px] lg:h-auto min-h-[240px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.238271127505!2d69.25474729999999!3d41.281918499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d42311a1861%3A0x38ab33b4afa47cfd!2sGrand%20Clean!5e0!3m2!1sru!2s!4v1776086792034!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t.contact.pageTitle}
                  />
                </div>

                <div className="bg-navy-gradient rounded-xl p-6">
                  <h3 className="font-display font-bold text-sm text-primary-foreground mb-2">
                    {t.contact.urgent}
                  </h3>
                  <p className="text-primary-foreground/60 text-xs mb-4">
                    {t.contact.urgentDesc}
                  </p>
                  <a
                    href={`tel:${BUSINESS.phoneE164}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-xs bg-gold text-accent-foreground hover:bg-gold-light transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {t.contact.callNow}
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
