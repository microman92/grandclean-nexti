import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          label="Вопросы и ответы"
          title="Часто задаваемые вопросы (FAQ)"
          description="Отвечаем на самые популярные вопросы о нашем сервисе"
        />

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 bg-card rounded-lg px-4 bg-white/5"
              >
                <AccordionTrigger className="hover:no-underline hover:text-gold transition-colors text-left font-display font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
