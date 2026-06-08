"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [lang, setLang] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const isUz = path.startsWith("/uz/") || path === "/uz" || path.startsWith("/uz?");
      setTimeout(() => {
        setLang(isUz ? "uz" : "ru");
      }, 0);
    }
  }, []);

  const content = {
    ru: {
      title: "Страница не найдена",
      desc: "Упс! Похоже, эта страница была тщательно убрана до блеска в процессе генеральной чистки. Выберите нужное направление ниже.",
      btnHome: "На главную",
      btnBack: "Вернуться назад",
    },
    uz: {
      title: "Sahifa topilmadi",
      desc: "Kechirasiz! Ko'rinishidan, bu sahifa tozalash jarayonida butkul yo'qolib qolgan. Kerakli sahifaga o'tish uchun quyidagi tugmalardan foydalaning.",
      btnHome: "Bosh sahifaga",
      btnBack: "Orqaga qaytish",
    },
  };

  const t = content[lang];

  return (
    <div className="relative min-h-screen bg-hero-gradient flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Logo */}
      <header className="w-full max-w-7xl mx-auto flex justify-center py-6 z-10">
        <Link href={`/${lang}/`} className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="GrandClean Logo"
            width={70}
            height={70}
            className="w-[70px] h-[70px] object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-xl mx-auto flex flex-col items-center text-center z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Glowing 404 Text */}
          <h1 className="font-display font-black text-[120px] md:text-[160px] leading-none tracking-tighter text-gradient-gold select-none filter drop-shadow-[0_10px_20px_rgba(243,156,18,0.2)]">
            404
          </h1>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-gold"
          >
            <Sparkles className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 px-4"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${lang}/`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-all duration-300 shadow-gold hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              {t.btnHome}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-white/5 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.btnBack}
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer / Copyright */}
      <footer className="w-full py-6 text-center z-10">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} GrandClean. {lang === "ru" ? "Все права защищены." : "Barcha huquqlar himoyalangan."}
        </p>
      </footer>
    </div>
  );
}
