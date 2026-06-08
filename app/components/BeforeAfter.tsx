"use client";

import dynamic from "next/dynamic";
import SectionHeading from "./SectionHeading";

// Отключаем SSR — react-compare-slider генерирует стили только на клиенте
// и вызывает hydration mismatch при серверном рендеринге
const BeforeAfterSlider = dynamic(() => import("./BeforeAfterSlider"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "400px",
        width: "100%",
        background: "rgba(255,255,255,0.03)",
        borderRadius: "0.5rem",
        animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      }}
    />
  ),
});

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-ice">
      <div className="container-wide">
        <SectionHeading
          label="Результаты"
          title="Разница очевидна"
          description="Посмотрите на результаты нашей работы в формате 'До / После'"
        />

        <div
          style={{
            maxWidth: "56rem",
            margin: "3rem auto 0",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}
