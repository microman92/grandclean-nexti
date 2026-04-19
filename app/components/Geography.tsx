"use client";

import SectionHeading from "./SectionHeading";

const districts = [
  "Мирзо-Улугбекский",
  "Чиланзарский",
  "Юнусабадский",
  "Мирабадский",
  "Яккасарайский",
  "Шайхантахурский",
  "Алмазарский",
  "Сергелийский",
  "Янгихаётский",
  "Учтепинский",
  "Бектемирский",
  "Яшнабадский",
];

export default function Geography() {
  return (
    <section className="section-padding bg-ice relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="География обслуживания"
          title="Работаем по всему Ташкенту"
          description="Оперативно выезжаем в любой район города без дополнительных наценок за выезд."
        />

        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-5xl mx-auto">
          {districts.map((district) => (
            <div
              key={district}
              className="group px-6 py-3 rounded-xl bg-card border border-white/5 shadow-elevated cursor-default transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:shadow-[0_0_20px_rgba(255,184,0,0.4)]"
            >
              <span className="font-display font-medium text-foreground group-hover:text-accent-foreground transition-colors">
                {district} район
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
