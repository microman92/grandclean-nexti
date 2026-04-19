"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Как быстро приедет бригада после оформления заявки?",
    answer:
      "В среднем мы выезжаем в течение 2–4 часов в любой район Ташкента. Для генеральной уборки рекомендуем бронировать дату за 1–2 дня.",
  },
  {
    question: "Вы работаете в Ташкентской области (Чирчик, Янгиюль, Кибрай)?",
    answer:
      "Да, мы выезжаем за пределы ТКАД. До 10 км от города выезд бесплатный, далее — по согласованию в зависимости от объема услуг.",
  },
  {
    question: "Нужно ли мне находиться дома во время уборки?",
    answer:
      "Необязательно. Многие наши клиенты передают ключи и занимаются своими делами. Мы несем полную материальную ответственность за сохранность вещей.",
  },
  {
    question: "Безопасны ли ваши чистящие средства для детей и животных?",
    answer:
      "Да, мы используем только гипоаллергенные, сертифицированные эко-средства (в том числе от Karcher и Chemspec), которые абсолютно безопасны для здоровья.",
  },
  {
    question: "Как можно оплатить услуги (Payme, Click, наличные)?",
    answer:
      "Мы принимаем оплату любым удобным способом: наличными, через терминал, а также переводами через системы Click и Payme. Для юрлиц возможна оплата перечислением с предоставлением всех закрывающих документов.",
  },
  {
    question: "Что если мне не понравится качество уборки?",
    answer:
      "Мы работаем до результата. Если вы обнаружите недочеты в течение 24 часов, мы отправим клинера для бесплатного исправления или вернем часть средств.",
  },
  {
    question: "Как долго сохнет мебель после химчистки?",
    answer:
      "Обычно мягкая мебель полностью высыхает за 4-6 часов в теплом проветриваемом помещении. Мы используем профессиональное оборудование для вытягивания влаги.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          label="Вопросы и ответы"
          title="Часто задаваемые вопросы (FAQ)"
          description="Отвечаем на самые популярные вопросы о нашем сервисе"
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 bg-white/5 rounded-lg px-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left font-display font-semibold text-foreground hover:text-gold transition-colors"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 ml-4 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-muted-foreground leading-relaxed text-sm border-t border-white/5 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
