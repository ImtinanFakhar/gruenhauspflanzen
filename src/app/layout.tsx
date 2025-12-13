import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grüne Hauspflanzen - Tipps & Inspiration für Zimmerpflanzen",
    template: "%s | Grüne Hauspflanzen",
  },
  description:
    "Willkommen bei gruenhauspflanzen.de – deinem Blog rund um Zimmerpflanzen, Hauspflanzen und grüne Wohnideen. Hier findest du Tipps zur Pflanzenpflege, Inspiration für dein Zuhause und hilfreiche Ratgeber für Pflanzenliebhaber.",
  keywords: [
    "Zimmerpflanzen",
    "Hauspflanzen",
    "Pflanzenpflege",
    "grüne Wohnideen",
    "Pflanzen Blog",
    "Zimmerpflanzen Tipps",
    "Pflanzenpflege Ratgeber",
  ],
  authors: [{ name: "Grüne Hauspflanzen" }],
  creator: "Grüne Hauspflanzen",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gruenhauspflanzen.de",
    siteName: "Grüne Hauspflanzen",
    title: "Grüne Hauspflanzen - Tipps & Inspiration für Zimmerpflanzen",
    description:
      "Dein Blog rund um Zimmerpflanzen, Hauspflanzen und grüne Wohnideen. Tipps zur Pflanzenpflege und Inspiration für dein Zuhause.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grüne Hauspflanzen - Tipps & Inspiration für Zimmerpflanzen",
    description:
      "Dein Blog rund um Zimmerpflanzen, Hauspflanzen und grüne Wohnideen.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gruenhauspflanzen.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
