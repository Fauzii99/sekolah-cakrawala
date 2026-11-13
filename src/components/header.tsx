"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#program", label: "Jurusan" },
  { href: "/benefit", label: "Benefit" },
  { href: "/#jurnal", label: "Jurnal" },
  { href: "/#kontak", label: "Kontak" },
];

export function Header({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(!home);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!home) return;
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${solid || open ? "is-solid" : "is-clear"}`}>
      <nav className="nav-shell" aria-label="Navigasi utama">
        <Link href="/" className="brand">
          <span className="brand-mark brand-logo">
            <Image src="/images/logo-umri.jpg" alt="Logo SMA Cakrawala Nusantara" width={46} height={47} priority />
          </span>
          <span className="brand-word">
            <b>CAKRAWALA</b>
            <small>NUSANTARA</small>
          </span>
        </Link>

        <button
          className="menu-button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/ppdb" onClick={() => setOpen(false)}>
            Daftar PPDB <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
