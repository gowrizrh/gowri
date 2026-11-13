import type { Metadata } from "next";
import { JetBrains_Mono, VT323 } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/seo";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.image,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: site.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.image, alt: site.imageAlt }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    (process.env.VERCEL_ENV === "production" ||
      process.env.VERCEL_ENV === "preview");

  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${vt323.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {enableAnalytics && (
          <Script
            src="https://awe-theta.vercel.app/awe.js"
            data-website-id="7695815d-5cac-4bde-ab4b-34a1b6005a40"
          />
        )}
      </body>
    </html>
  );
}
