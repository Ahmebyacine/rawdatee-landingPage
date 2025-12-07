import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic"],
});

export const metadata = {
  title: {
    default: "منصة روضتي | Rawdatee Platform",
    template: "%s | Rawdatee Platform",
  },
  description:
    "منصة روضتي لإدارة المدارس والطلاب والتقارير التعليمية بسهولة وكفاءة.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "منصة روضتي | Rawdatee Platform",
    description:
      "منصة روضتي لإدارة المدارس والطلاب والتقارير التعليمية بسهولة وكفاءة.",
    url: "https://rawdatee.com",
    siteName: "Rawdatee",
    images: [
      {
        url: "https://rawdatee.com/logo.png",
        width: 800,
        height: 600,
        alt: "Rawdatee Platform",
      },
    ],
    locale: "ar_DZ",
    type: "website",
  },
  alternates: {
    canonical: "https://rawdatee.com",
  },
  metadataBase: new URL("https://rawdatee.com"),
  other: {
    // This will include JSON-LD
    "script:type=application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://rawdatee.com",
      logo: "https://rawdatee.com/logo.png",
    }),
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={locale === "ar" ? cairo.className : inter.className}>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
