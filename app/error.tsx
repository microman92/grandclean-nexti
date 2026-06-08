"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [lang, setLang] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    console.error(error);
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const isUz = path.startsWith("/uz/") || path === "/uz" || path.startsWith("/uz?");
      setTimeout(() => {
        setLang(isUz ? "uz" : "ru");
      }, 0);
    }
  }, [error]);

  const content = {
    ru: {
      title: "Что-то пошло не так!",
      desc: "Произошла непредвиденная ошибка на нашей стороне. Мы уже работаем над исправлением. Пожалуйста, попробуйте перезагрузить страницу.",
      btnReset: "Попробовать снова",
      btnHome: "На главную",
    },
    uz: {
      title: "Xatolik yuz berdi!",
      desc: "Tizimda kutilmagan xatolik yuz berdi. Biz buni bartaraf etish ustida ishlamoqdamiz. Iltimos, sahifani qayta yuklab ko'ring.",
      btnReset: "Qaytadan urinish",
      btnHome: "Bosh sahifaga",
    },
  };

  const t = content[lang];

  return (
    <div className="relative min-h-screen bg-hero-gradient flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* Ambient Red/Gold Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo */}
      <header className="w-full max-w-7xl mx-auto flex justify-center py-6 z-10">
        <Link href={`/${lang}/`} className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="GrandClean Logo"
            width={70}
            height={70}
            className="w-[70px] h-[70px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-xl mx-auto flex flex-col items-center text-center z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative text-destructive mb-6"
        >
          <AlertCircle className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_4px_12px_rgba(239,68,68,0.2)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="px-4"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-destructive to-red-400 mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-all duration-300 shadow-gold hover:-translate-y-0.5"
            >
              <RotateCcw className="w-4 h-4" />
              {t.btnReset}
            </button>
            <Link
              href={`/${lang}/`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-white/5 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 border border-white/10"
            >
              <Home className="w-4 h-4" />
              {t.btnHome}
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center z-10">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} GrandClean. {lang === "ru" ? "Все права защищены." : "Barcha huquqlar himoyalangan."}
        </p>
      </footer>
    </div>
  );
}
