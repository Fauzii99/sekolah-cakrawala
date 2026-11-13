import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap", weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sekolah-cakrawala.vercel.app"),
  title: {
    default: "SMA Cakrawala Nusantara",
    template: "%s | SMA Cakrawala Nusantara",
  },
  description:
    "SMA Cakrawala Nusantara di Pekanbaru: pendidikan yang memadukan ketajaman akademik, karakter, dan pengalaman nyata sejak 1998.",
  openGraph: {
    title: "SMA Cakrawala Nusantara",
    description: "Berpikir luas. Berakar kuat.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
