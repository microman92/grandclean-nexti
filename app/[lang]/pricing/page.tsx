import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);

  return buildPageMetadata(
    lang,
    "/pricing/",
    t.pricing.pageTitle,
    t.pricing.pageDesc,
  );
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <PricingClient lang={lang} />;
}
