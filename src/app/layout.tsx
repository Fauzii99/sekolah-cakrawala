import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist=Geist({subsets:["latin"]});
export const metadata:Metadata={metadataBase:new URL("https://sekolah-cakrawala.vercel.app"),title:{default:"SMA Cakrawala Nusantara",template:"%s | SMA Cakrawala Nusantara"},description:"Sekolah menengah unggul di Bandung yang membentuk generasi berkarakter, adaptif, dan siap berkarya.",openGraph:{title:"SMA Cakrawala Nusantara",description:"Tumbuh Berkarakter, Melangkah Mendunia.",type:"website",locale:"id_ID"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body className={geist.className}>{children}</body></html>}