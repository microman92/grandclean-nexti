import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary, locales } from "@/lib/i18n";
import { buildLocalBusinessSchema, buildPageMetadata } from "@/lib/seo";
import HomePageClient from "@/app/components/HomePageClient";
import JsonLd from "@/app/components/JsonLd";

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

  return buildPageMetadata(
    lang,
    "/",
    t.meta.defaultTitle,
    t.meta.defaultDescription,
    t.meta.defaultKeywords,
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <HomePageClient lang={lang} />
    </>
  );
}
