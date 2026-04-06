import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import SectionHeading from "./SectionHeading";
import React from "react";
import "./BeforeAfter.scss";

// Импортируем фотографии клиента
import imgAfter from "@/assets/after.png";
import imgBefore from "@/assets/before.png";

// Кастомный ползунок с золотым акцентом (без "палки")
const CustomHandle = () => (
  <div className="custom-handle">
    <div className="handle-button">
      <div className="icon-container">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-ice">
      <div className="container-wide">
        <SectionHeading
          label="Результаты"
          title="Разница очевидна"
          description="Посмотрите на результаты нашей работы в формате 'До / После'"
        />

        <div className="slider-container">
          <ReactCompareSlider
            handle={<CustomHandle />}
            itemOne={
              <ReactCompareSliderImage src={imgBefore} alt="До уборки" />
            }
            itemTwo={
              <ReactCompareSliderImage src={imgAfter} alt="После уборки" />
            }
            className="slider-object"
          />
        </div>
      </div>
    </section>
  );
}
