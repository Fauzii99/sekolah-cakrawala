import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Youtube, MapPin } from "lucide-react";
import { school } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark brand-logo" style={{ width: 56, height: 58 }}>
              <Image src="/images/logo-umri.jpg" alt="Logo SMA Cakrawala Nusantara" width={56} height={58} />
            </span>
            <h3>
              SMA Cakrawala
              <br />
              Nusantara
            </h3>
            <p>{school.tagline} Sejak {school.established} di {school.city}.</p>
          </div>

          <div className="footer-col">
            <span className="footer-label">Jelajahi</span>
            <Link href="/#tentang">Tentang sekolah</Link>
            <Link href="/#program">Jurusan</Link>
            <Link href="/benefit">Benefit belajar</Link>
            <Link href="/#jurnal">Jurnal sekolah</Link>
            <Link href="/ppdb">Penerimaan siswa</Link>
          </div>

          <div className="footer-col">
            <span className="footer-label">Temui kami</span>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Jl. Sudirman No. 18
              <br />
              Pekanbaru, Riau 28116
            </p>
            <a href={`mailto:${school.email}`}>{school.email}</a>
            <a href={`tel:${school.phone.replace(/[^+\d]/g, "")}`}>{school.phone}</a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Terhubung</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram <Instagram size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube <Youtube size={15} />
            </a>
            <a
              href="https://maps.google.com/search/?api=1&query=Jl.+Sudirman+No.+18+Pekanbaru+Riau+28116"
              target="_blank"
              rel="noreferrer"
            >
              Petunjuk arah <MapPin size={15} />
            </a>
            <Link href="/ppdb">
              Konsultasi PPDB <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {school.name}</span>
          <span>
            NPSN {school.npsn} · Terakreditasi {school.accreditation}
          </span>
          <a href="#top">Kembali ke atas ↑</a>
        </div>
      </div>
    </footer>
  );
}
