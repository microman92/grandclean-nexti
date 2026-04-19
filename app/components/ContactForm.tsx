"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

interface ContactFormProps {
  lang: Locale;
  t: Messages;
}

export default function ContactForm({ lang, t }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setForm({ ...form, phone: "" });
      return;
    }
    if (!val.startsWith("998")) val = "998" + val;
    let formatted = "+998";
    if (val.length > 3) formatted += "-" + val.substring(3, 5);
    if (val.length > 5) formatted += "-" + val.substring(5, 8);
    if (val.length > 8) formatted += "-" + val.substring(8, 10);
    if (val.length > 10) formatted += "-" + val.substring(10, 12);
    setForm({ ...form, phone: formatted });
  };

  return (
    <div className="bg-card rounded-2xl p-8 md:p-10">
      <h2 className="font-display font-bold text-2xl text-white mb-2">
        {t.contact.formTitle}
      </h2>
      <p className="text-muted-foreground text-sm mb-8">{t.contact.formDesc}</p>

      {sent && (
        <div
          className="mb-6 p-4 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-medium"
          role="alert"
        >
          {t.contact.formSuccess}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
        aria-label={t.contact.formTitle}
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.contact.formName}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              placeholder={t.contact.formNamePlaceholder}
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.contact.formPhone}
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={handlePhoneChange}
              maxLength={17}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              placeholder={t.contact.formPhonePlaceholder}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t.contact.formService}
          </label>
          <select
            id="contact-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          >
            <option value="">{t.contact.formServiceDefault}</option>
            {lang === "ru"
              ? [
                  "Уборка квартир",
                  "Уборка офисов",
                  "Генеральная уборка",
                  "Уборка после ремонта",
                  "Химчистка мебели",
                  "Стирка ковров",
                  "Мойка окон",
                  "Мытьё фасадов",
                  "Чистка брусчатки",
                  "Дезинфекция",
                ].map((s) => <option key={s}>{s}</option>)
              : [
                  "Kvartira tozalash",
                  "Ofis tozalash",
                  "Bosh tozalash",
                  "Ta'mirdan keyin tozalash",
                  "Mebel kimyoviy tozalash",
                  "Gilam yuvish",
                  "Oyna yuvish",
                  "Fasad yuvish",
                  "Trotuar plitasi tozalash",
                  "Dezinfeksiya",
                ].map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t.contact.formMessage}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
            placeholder={t.contact.formMessagePlaceholder}
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {t.contact.formSubmit}
        </button>
      </form>
    </div>
  );
}
