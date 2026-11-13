import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gowri — Platform Engineer | Cloud & Networking",
  description:
    "Gowri's personal site: platform engineering, Kubernetes, hybrid cloud and private networking, with career experience, certifications and projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
