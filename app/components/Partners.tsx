"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

interface PartnersProps {
  lang: Locale;
}

const partnersList = [
  { name: "Novza", src: "/images/novza.webp" },
  { name: "Gabrielle", src: "/images/gabriel.webp" },
  { name: "Lychee", src: "/images/lychee.webp" },
  { name: "Dunyo", src: "/images/dunyo.webp" },
  { name: "Gosht", src: "/images/gosht.webp" },
  { name: "Uzum", src: "/images/uzum.webp" },
  { name: "Kapitalbank", src: "/images/Kapitalbank.webp" },
  { name: "Infinbank", src: "/images/infin-bank.svg" },
  { name: "Ucell", src: "/images/Ucell.webp" },
  { name: "Akfa Medline", src: "/images/akfa_medline.webp" },
  { name: "BYD", src: "/images/BYD.svg" },
  { name: "KIA", src: "/images/KIA.svg" },
  { name: "Uzbekistan Airways", src: "/images/Uzbekistan_Airways.svg" },
  { name: "Hommy", src: "/images/hommy.webp" },
  { name: "Hyatt", src: "/images/hyat.webp" },
  { name: "Imzo", src: "/images/imzo.webp" },
];

export default function Partners({ lang }: PartnersProps) {
  const title = lang === "uz" ? "Bizga ishonishadi" : "Нам доверяют";

  return (
    <section className="py-16 md:py-24 bg-navy overflow-hidden relative border-t border-b border-border">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-wide mb-12 text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white inline-block relative pb-4">
            {title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden w-full z-10">
        {/* Soft Shadow Fade for edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-16 w-max animate-marquee py-2 shrink-0">
          {/* Original set */}
          <div className="flex gap-16 items-center shrink-0">
            {partnersList.map((p, idx) => (
              <div
                key={`orig-${idx}`}
                className="w-[120px] md:w-[140px] h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={140}
                  height={48}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Cloned set */}
          <div className="flex gap-16 items-center shrink-0" aria-hidden="true">
            {partnersList.map((p, idx) => (
              <div
                key={`clone-${idx}`}
                className="w-[120px] md:w-[140px] h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={140}
                  height={48}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
