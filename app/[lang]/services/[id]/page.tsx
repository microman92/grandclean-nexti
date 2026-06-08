import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { servicesData, getServiceTranslation } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];

  locales.forEach((lang) => {
    servicesData.forEach((service) => {
      params.push({
        lang,
        id: service.id,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return {};
  }

  const tr = getServiceTranslation(service, lang);

  return buildPageMetadata(
    lang,
    `/services/${id}/`,
    tr.metaTitle,
    tr.metaDesc,
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} lang={resolvedParams.lang} />;
}
