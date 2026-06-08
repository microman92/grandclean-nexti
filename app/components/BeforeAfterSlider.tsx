"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CustomHandle = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      marginLeft: "-1.25rem",
      cursor: "grab",
    }}
  >
    <div
      style={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        backgroundColor: "hsl(var(--background))",
        border: "2px solid #FFB800",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 15px rgba(255,184,0,0.5)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFB800"
          style={{ width: "0.85rem", height: "0.85rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFB800"
          style={{ width: "0.85rem", height: "0.85rem" }}
        >
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

export default function BeforeAfterSlider() {
  return (
    <ReactCompareSlider
      handle={<CustomHandle />}
      itemOne={
        <ReactCompareSliderImage
          src="/images/before.webp"
          alt="До уборки"
          style={{
            objectFit: "cover",
            transform: "scale(1.22)",
            transformOrigin: "center center",
          }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/images/after.webp"
          alt="После уборки"
          style={{
            objectFit: "cover",
            transform: "scale(1.22)",
            transformOrigin: "center center",
          }}
        />
      }
      style={{ height: "400px", width: "100%" }}
    />
  );
}
