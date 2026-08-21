"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header({ home = false }: { home?: boolean }) {
  const [solid, setSolid] = useState(!home);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!home) return;
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);
  return <header className={`site-header ${solid ? "is-solid" : "is-clear"}`}><nav className="nav-shell" aria-label="Navigasi utama">
    <Link href="/" className="brand"><span className="brand-mark brand-logo"><Image src="/images/logo-umri.png" alt="Logo Universitas Muhammadiyah Riau" width={52} height={53} priority /></span><span><b>CAKRAWALA</b><small>NUSANTARA</small></span></Link>
    <button className="menu-button" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <div className={`nav-links ${open ? "open" : ""}`}><Link onClick={()=>setOpen(false)} href="/#cerita">Tentang</Link><Link onClick={()=>setOpen(false)} href="/#program">Program</Link><Link onClick={()=>setOpen(false)} href="/#berita">Jurnal</Link><Link onClick={()=>setOpen(false)} href="/#kontak">Kontak</Link><Link onClick={()=>setOpen(false)} className="nav-ppdb" href="/ppdb">PPDB 2026 <span>↗</span></Link></div>
  </nav></header>;
}
