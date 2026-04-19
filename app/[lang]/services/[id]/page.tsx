import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { servicesData } from "@/data/services";
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

export default function ServiceDetailPage({
  params,
}: {
  params: { lang: Locale; id: string };
}) {
  const service = servicesData.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} lang={params.lang} />;
}
