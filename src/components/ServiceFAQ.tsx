import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faq: FaqItem[];
  serviceTitle: string;
}

export default function ServiceFAQ({ faq, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container-wide mt-12 md:mt-16 pb-10">
      {/* JSON-LD разметка для SEO и ИИ-поиска */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Вопросы и Ответы
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            FAQ — {serviceTitle}
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Ответы на самые частые вопросы об этой услуге
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 bg-white/3 overflow-hidden transition-colors duration-300 hover:border-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display font-semibold text-sm md:text-base text-white leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
