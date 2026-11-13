import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "PPDB 2026/2027",
  description:
    "Pendaftaran peserta didik baru SMA Cakrawala Nusantara 2026/2027. Gelombang pertama 1 September–30 November 2026.",
  alternates: { canonical: "/ppdb" },
};

const steps = [
  { n: "01", t: "Registrasi dokumen", d: "Isi formulir minat dan unggah rapor semester terakhir, kartu keluarga, akta kelahiran, serta pas foto." },
  { n: "02", t: "Asesmen akademik", d: "Tes literasi, numerasi, dan penalaran. Tidak ada hafalan — kami mengukur cara berpikir." },
  { n: "03", t: "Wawancara keluarga", d: "Percakapan bersama siswa dan orang tua untuk memahami tujuan belajar dan kebutuhan dukungan." },
  { n: "04", t: "Pengumuman", d: "Hasil diumumkan maksimal 14 hari kerja setelah asesmen, melalui email dan WhatsApp." },
];

const docs = ["Rapor semester terakhir", "Kartu keluarga", "Akta kelahiran", "Pas foto 3×4 terbaru"];

export default function PPDB() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Beranda</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">PPDB</span>
            </nav>
            <span className="eyebrow on-dark">Gelombang 1 · 1 Sep – 30 Nov 2026</span>
            <h1 className="display h1">
              Mulai perjalanan belajar
              <br />
              bersama <em style={{ fontStyle: "normal", color: "var(--lime)" }}>Cakrawala.</em>
            </h1>
            <p className="lead on-dark" style={{ maxWidth: "56ch" }}>
              Empat langkah sederhana, satu lingkungan belajar yang dirancang untuk mengenal setiap
              siswa dan menantangnya tumbuh.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--paper)" }}>
          <div className="container split" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">Langkah pendaftaran</span>
              <h2 className="display h2" style={{ margin: "0 0 30px" }}>
                Alurnya jelas.
                <br />
                <em style={{ fontStyle: "normal", color: "var(--muted)" }}>Tidak berbelit.</em>
              </h2>

              <div style={{ display: "grid", gap: 14, marginBottom: 34 }}>
                {steps.map((s) => (
                  <div key={s.n} className="card" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 18, alignItems: "start" }}>
                    <span className="mono" style={{ fontSize: "1.35rem", color: "var(--muted)", letterSpacing: 0 }}>
                      {s.n}
                    </span>
                    <div>
                      <h3 style={{ fontSize: "1.02rem", margin: "0 0 6px", letterSpacing: "-.015em" }}>{s.t}</h3>
                      <p className="muted" style={{ margin: 0, fontSize: ".89rem" }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ background: "var(--ink)", borderColor: "var(--ink)", color: "var(--white)" }}>
                <span className="eyebrow on-dark" style={{ marginBottom: 14 }}>Dokumen yang disiapkan</span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                  {docs.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: ".91rem", color: "rgba(255,255,255,.82)" }}>
                      <CheckCircle2 size={17} color="var(--lime)" strokeWidth={2} /> {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 10, fontSize: ".9rem", color: "var(--muted)" }}>
                <Phone size={16} /> Butuh bantuan? <a href="tel:+6276****0188" style={{ fontWeight: 700, color: "var(--ink)" }}>(0761) 555-0188</a>
              </div>
            </div>

            <div className="card" style={{ position: "sticky", top: 100 }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Formulir minat</span>
              <h2 className="display" style={{ fontSize: "1.6rem", margin: "0 0 8px" }}>
                Isi data, kami hubungi.
              </h2>
              <p className="muted" style={{ fontSize: ".88rem", margin: "0 0 22px" }}>
                Tim PPDB akan mengirimkan jadwal konsultasi sesuai pilihan Anda.
              </p>
              <ContactForm />
              <p style={{ margin: "18px 0 0", fontSize: ".76rem", color: "var(--muted)", lineHeight: 1.6 }}>
                Data hanya digunakan untuk keperluan penerimaan siswa dan tidak dibagikan ke pihak ketiga.
              </p>
            </div>
          </div>
        </section>

        <section className="cta section-pad">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow on-dark">Kunjungi kampus</span>
              <h2 className="display h2">
                Lihat langsung
                <br />
                <em>suasananya.</em>
              </h2>
            </div>
            <div className="cta-side">
              <p>
                Open house berlangsung setiap Sabtu pukul 09.00 WIB. Bertemu guru, berkeliling
                laboratorium, dan berbincang dengan siswa.
              </p>
              <Link className="btn btn--lime" href="/#kontak">
                Jadwalkan kunjungan <ArrowRight size={17} />
              </Link>
              <small>Jl. Sudirman No. 18, Pekanbaru</small>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
