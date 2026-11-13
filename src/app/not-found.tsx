import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "var(--ink)", color: "var(--white)", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <span className="mono" style={{ fontSize: ".78rem", letterSpacing: ".24em", color: "var(--lime)" }}>
          404
        </span>
        <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", margin: "18px 0 16px" }}>
          Halaman tidak
          <br />
          ditemukan.
        </h1>
        <p style={{ color: "var(--fog)", lineHeight: 1.7, marginBottom: 30 }}>
          Tautan mungkin sudah dipindahkan atau tidak pernah ada.
        </p>
        <Link className="btn btn--lime" href="/">
          <ArrowLeft size={16} /> Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
