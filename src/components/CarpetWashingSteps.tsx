import AnimatedSection from "./AnimatedSection";

const steps = [
  { id: 1, title: "Выбивание" },
  { id: 2, title: "Замачивание" },
  { id: 3, title: "Стирка", subtitle: "на спец. оборудовании" },
  { id: 4, title: "Отжим" },
  { id: 5, title: "Сушка", subtitle: "с озонатором" },
];

export default function CarpetWashingSteps() {
  return (
    <div className="bg-[#1C1C1C] rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
      <AnimatedSection>
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Стираем ковры на турецком оборудовании с использованием немецких
            средств
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium">
            Стирка проходит 5 этапов чистки для гарантии безупречного
            результата:
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-4 z-10 w-full max-w-6xl mx-auto">
          {/* Линия */}
          <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-white/5 hidden md:block z-0" />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex-1 min-w-0 flex">
              <div className="bg-[#242424] w-full rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-gold/30">
                <div className="w-14 h-14 rounded-full border-[1.5px] border-gold text-gold flex items-center justify-center font-bold text-xl mb-6 bg-[#1a1a1a] shadow-[0_0_15px_rgba(255,183,0,0.15)] leading-none">
                  {step.id}
                </div>
                <div className="font-bold text-white/95 text-base md:text-lg leading-snug">
                  {step.title}
                </div>
                {step.subtitle && (
                  <div className="text-white/40 text-xs md:text-sm mt-2 leading-snug">
                    {step.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
