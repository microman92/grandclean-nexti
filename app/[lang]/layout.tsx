import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingContacts from "@/app/components/FloatingContacts";
import { Toaster } from "sonner";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isRu = lang === "ru";

  return {
    title: {
      default: t.meta.defaultTitle,
      template: `%s | GrandClean ${isRu ? "Ташкент" : "Toshkent"}`,
    },
    description: t.meta.defaultDescription,
    keywords: t.meta.defaultKeywords,
    openGraph: {
      type: "website",
      siteName: "GrandClean",
      title: t.meta.defaultTitle,
      description: t.meta.defaultDescription,
      images: [
        {
          url: "https://grandclean.uz/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: "GrandClean — профессиональный клининг в Ташкенте",
        },
      ],
      locale: isRu ? "ru_UZ" : "uz_UZ",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.defaultTitle,
      description: t.meta.defaultDescription,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang)) {
    notFound();
  }

  const t = getDictionary(lang);

  return (
    <>
      <Navigation lang={lang} t={t} />
      <main id="main-content">{children}</main>
      <Footer lang={lang} t={t} />
      <FloatingContacts />
      <Toaster position="top-center" richColors />
    </>
  );
}
