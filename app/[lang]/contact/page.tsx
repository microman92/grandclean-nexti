import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { buildLocalBusinessSchema, buildPageMetadata } from "@/lib/seo";
import JsonLd from "@/app/components/JsonLd";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);

  return buildPageMetadata(
    lang,
    "/contact/",
    t.contact.pageTitle,
    t.contact.pageDesc,
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <ContactClient lang={lang} />
    </>
  );
}
