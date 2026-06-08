"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function LangNotFound() {
  const params = useParams();
  const lang = (params?.lang as Locale) || "ru";
  const t = getDictionary(lang);

  const isRu = lang === "ru";

  return (
    <section className="relative overflow-hidden bg-background min-h-[70vh] flex items-center justify-center py-20">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Glowing 404 Text */}
          <h1 className="font-display font-black text-[100px] md:text-[140px] leading-none tracking-tighter text-gradient-gold select-none filter drop-shadow-[0_10px_15px_rgba(243,156,18,0.15)]">
            404
          </h1>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 text-gold"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-md px-4"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            {t.notFound.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
            {t.notFound.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${lang}/`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-all duration-300 shadow-gold hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              {t.notFound.btn}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-bold text-sm bg-white/5 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              {isRu ? "Назад" : "Orqaga"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
