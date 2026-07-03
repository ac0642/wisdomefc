import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.brand.url),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    url: siteContent.brand.url,
    siteName: siteContent.brand.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: siteContent.metadata.title,
    description: siteContent.metadata.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
