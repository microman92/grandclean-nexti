import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDictionary, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function NotFoundPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang;
  const t = getDictionary(lang);
  return (
    <section className="min-h-screen bg-background flex items-center justify-center text-center px-6">
      <div>
        <div
          className="font-display font-extrabold text-[8rem] leading-none text-gold/20 mb-4"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">
          {t.notFound.title}
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          {t.notFound.desc}
        </p>
        <Link
          href={`/${lang}/`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm bg-gold text-accent-foreground hover:bg-gold-light transition-colors shadow-gold"
        >
          {t.notFound.btn}
        </Link>
      </div>
    </section>
  );
}
