import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display, Bebas_Neue, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Nastar Coco | Premium Nastar, Gift Box & Cocoffee",
  description:
    "Nastar Coco menghadirkan nastar premium-casual yang hangat, buttery, dan gift-worthy — kini berkembang bersama Cocoffee by Nastar Coco.",
  keywords: [
    "nastar premium",
    "nastar Indonesia",
    "nastar gift box",
    "nastar hampers",
    "kue nastar",
    "Cocoffee",
    "dessert Indonesia",
  ],
  openGraph: {
    title: "Nastar Coco | Premium Nastar & Cocoffee",
    description:
      "Golden nastar yang terasa seperti rumah — premium-casual, gift-worthy, dan terus bertumbuh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${dmSerif.variable} ${bebasNeue.variable} ${courierPrime.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
