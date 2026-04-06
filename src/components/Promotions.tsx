import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import promoSeniors from "@/assets/promo_seniors.png";
const promoBirthday =
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"; // Birthday balloons
const promoMehr =
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"; // Cute dog

const promotions = [
  {
    title: "Скидка пенсионерам",
    desc: "Мы очень ценим и уважаем старшее поколение. Для наших дорогих пенсионеров у нас действует программа лояльности. Скидка на услуги в размере",
    discount: "20%",
    img: promoSeniors,
  },
  {
    title: "У вас день рождения?",
    desc: "Как важно принимать гостей в чистом и уютном доме. Для дорогих именинников у нас предусмотрены скидки в размере",
    discount: "30%",
    img: promoBirthday,
  },
  {
    title: "Dog Friendly",
    desc: "Мы отдаём 10% с каждого нашего заказа приюту для собак Mehr, чтобы вместе с вами делать добро.",
    discount: "10%",
    descHtml: true,
    img: promoMehr,
  },
];

export default function Promotions() {
  return (
    <section className="section-padding bg-background relative z-10 border-t border-white/5">
      <div className="container-wide">
        <SectionHeading
          label="Акции"
          title="Спецпредложения и Акции"
          description="Воспользуйтесь нашими специальными предложениями для максимальной выгоды"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {promotions.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-[#1C1C1C] rounded-xl overflow-hidden border border-white/5 transition-colors transition-shadow duration-300 hover:border-gold/30 hover:shadow-[0_15px_40px_-10px_rgba(255,184,0,0.2)]"
            >
              <div className="h-[260px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <motion.img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-[1.3] group-hover:scale-[1.38]"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col items-center text-center">
                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {promo.title}
                </h3>
                {promo.descHtml ? (
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Мы отдаём{" "}
                    <span className="text-gold font-semibold">10%</span> с
                    каждого нашего заказа приюту для собак Mehr, чтобы вместе с
                    вами делать добро.
                  </p>
                ) : (
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {promo.desc}{" "}
                    <span className="text-gold font-semibold">
                      {promo.discount}
                    </span>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
