import type { Metadata } from "next";
import "./globals.css";

const preloadImages = [
  "/images/logo.svg",
  "/images/hero-interior.webp",
  "/images/service-apartment.webp",
  "/images/service-carpet.webp",
  "/images/service-sofa.webp",
  "/images/baby-stroller-cleaning.webp",
  "/images/moyka-okon.webp",
  "/images/moyka-fasadov.webp",
  "/images/chistka-bruschatki .webp",
  "/images/dezinfekciya.webp",
  "/images/team.webp",
  "/images/before.webp",
  "/images/after.webp",
  "/images/promo_seniors.webp",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://grandclean.uz"),
  title: {
    default: "GrandClean — Профессиональный клининг в Ташкенте",
    template: "%s | GrandClean Ташкент",
  },
  description:
    "GrandClean — лучший клининг в Ташкенте. Химчистка мебели и ковров, услуги уборки квартир, офисов. Цены от 15 000 сум. Вызов за 2-4 часа. ☎ +998 93 571 21 51",
  openGraph: {
    siteName: "GrandClean",
    locale: "ru_RU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        {preloadImages.map((href) => (
          <link key={href} rel="preload" as="image" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
