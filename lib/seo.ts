import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { BUSINESS, SITE_URL } from "@/lib/site";

export function buildPagePath(path: string): string {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function buildPageUrl(lang: Locale, path = ""): string {
  const pagePath = buildPagePath(path);
  if (pagePath === "/") return `${SITE_URL}/${lang}/`;
  return `${SITE_URL}/${lang}${pagePath}`;
}

export function buildAlternates(path = ""): Metadata["alternates"] {
  const pagePath = buildPagePath(path);
  const ruUrl =
    pagePath === "/" ? `${SITE_URL}/ru/` : `${SITE_URL}/ru${pagePath}`;
  const uzUrl =
    pagePath === "/" ? `${SITE_URL}/uz/` : `${SITE_URL}/uz${pagePath}`;

  return {
    canonical: undefined,
    languages: {
      "ru-UZ": ruUrl,
      "uz-UZ": uzUrl,
      "x-default": ruUrl,
    },
  };
}

export function buildPageMetadata(
  lang: Locale,
  path: string,
  title: string,
  description: string,
  keywords?: string,
): Metadata {
  const canonical = buildPageUrl(lang, path);
  const pagePath = buildPagePath(path);
  const ruUrl =
    pagePath === "/" ? `${SITE_URL}/ru/` : `${SITE_URL}/ru${pagePath}`;
  const uzUrl =
    pagePath === "/" ? `${SITE_URL}/uz/` : `${SITE_URL}/uz${pagePath}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        "ru-UZ": ruUrl,
        "uz-UZ": uzUrl,
        "x-default": ruUrl,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: BUSINESS.name,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/images/og-image.webp`,
          width: 1200,
          height: 630,
          alt: "GrandClean — профессиональный клининг в Ташкенте",
        },
      ],
      locale: lang === "ru" ? "ru_UZ" : "uz_UZ",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildLocalBusinessSchema() {
  const { geo } = BUSINESS;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description:
      "Профессиональная клининговая компания в Ташкенте. Химчистка ковров и мебели, уборка квартир и офисов, дезинфекция, мойка окон и фасадов.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      addressCountry: BUSINESS.address.addressCountry,
      postalCode: BUSINESS.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "UZS",
    paymentAccepted: "Cash, Credit Card, Payme, Click",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.lat,
        longitude: geo.lng,
      },
      geoRadius: "50000",
    },
    sameAs: [
      "https://www.instagram.com/grandclean.uz",
      "https://t.me/grandclean_uz",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}
