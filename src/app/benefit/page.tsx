import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Compass,
  FlaskConical,
  Globe2,
  MessageCircle,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/home-experience";

export const metadata: Metadata = {
  title: "Benefit Belajar",
  description:
    "Kenali manfaat pembelajaran di Cakrawala: penalaran ilmiah, pemahaman sosial, logika, komunikasi, dan karakter sebagai bekal untuk terus bertumbuh.",
  alternates: { canonical: "/benefit" },
  openGraph: {
    title: "Benefit Belajar | SMA Cakrawala Nusantara",
    description: "Bukan sekadar tahu. Belajar untuk memahami, mencoba, dan bertumbuh.",
    url: "/benefit",
    type: "website",
    locale: "id_ID",
  },
};

const benefits = [
  {
    icon: FlaskConical,
    label: "Penalaran ilmiah",
    title: "Berani bertanya. Terbiasa menguji.",
    text: "Eksperimen biologi, fisika, dan kimia menjadi ruang untuk melatih observasi, menguji dugaan, dan menyusun kesimpulan berdasarkan bukti.",
    practice: "Rasa ingin tahu & pemecahan masalah",
  },
  {
    icon: Globe2,
    label: "Wawasan sosial",
    title: "Melihat dunia dari banyak sisi.",
    text: "Ekonomi, geografi, sosiologi, dan sejarah membantu siswa membaca hubungan antara manusia, lingkungan, dan perubahan di sekitarnya.",
    practice: "Perspektif luas & kepekaan sosial",
  },
  {
    icon: BrainCircuit,
    label: "Logika & numerasi",
    title: "Pikiran terstruktur. Keputusan terukur.",
    text: "Logika, statistika, dan pemodelan melatih siswa mengenali pola, mengurai persoalan, serta menjelaskan alasan di balik sebuah jawaban.",
    practice: "Berpikir runtut & literasi data",
  },
  {
    icon: MessageCircle,
    label: "Komunikasi",
    title: "Ide yang berani disampaikan.",
    text: "Penguatan Bahasa Inggris dan public speaking memberi ruang untuk belajar menyampaikan gagasan dengan jelas sekaligus mendengarkan sudut pandang lain.",
    practice: "Ekspresi diri & kemampuan berdialog",
  },
  {
    icon: Users,
    label: "Kolaborasi & karakter",
    title: "Tumbuh bersama, bukan sendiri.",
    text: "Proyek, mentoring, kegiatan sosial, dan organisasi siswa menjadi kesempatan untuk berlatih bekerja sama, mengambil peran, dan menjaga integritas.",
    practice: "Empati & tanggung jawab",
  },
  {
    icon: Compass,
    label: "Eksplorasi diri",
    title: "Mengenal minat. Menemukan arah.",
    text: "Beragam bidang belajar membuka kesempatan untuk mengenali hal yang disukai, merefleksikan proses, dan mulai memikirkan langkah belajar berikutnya.",
    practice: "Refleksi diri & kemandirian belajar",
  },
];

const tracks = [
  { no: "01", name: "IPA", line: "Amati fenomena. Uji ide. Pahami kehidupan." },
  { no: "02", name: "IPS", line: "Baca konteks. Kenali masyarakat. Perluas perspektif." },
  { no: "03", name: "Matematika", line: "Temukan pola. Susun alasan. Pecahkan persoalan." },
];

export default function BenefitPage() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Beranda</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Benefit</span>
            </nav>
            <span className="eyebrow on-dark">Benefit belajar di Cakrawala</span>
            <h1 className="display h1">
              Bukan sekadar tahu.
              <br />
              <em style={{ fontStyle: "normal", color: "var(--lime)" }}>Bekal untuk tumbuh.</em>
            </h1>
            <p className="lead on-dark" style={{ maxWidth: "54ch" }}>
              Dari rasa ingin tahu menjadi cara berpikir. Dari pengalaman belajar menjadi bekal
              untuk melangkah lebih jauh.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a className="btn btn--lime" href="#manfaat">
                Jelajahi manfaat <ArrowRight size={17} />
              </a>
              <Link className="btn btn--ghost-light" href="/ppdb">
                Info PPDB
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          id="manfaat"
          className="section-pad"
          style={{ background: "var(--paper)", scrollMarginTop: 90 }}
        >
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 / Bekal yang dibangun</span>
                <h2 className="display h2" style={{ margin: 0 }}>
                  Pelajaran hari ini.
                  <br />
                  <em style={{ fontStyle: "normal", color: "var(--muted)" }}>
                    Manfaat melampaui kelas.
                  </em>
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "34ch", margin: 0 }}>
                Enam kemampuan yang ditumbuhkan melalui bidang studi dan pengalaman belajar.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
              {benefits.map(({ icon: Icon, label, title, text, practice }, i) => (
                <Reveal key={label} delay={i * 0.05} as="article" className="pillar" style={{ gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="pillar-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <span className="mono" style={{ fontSize: ".78rem", color: "var(--muted)" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: ".68rem",
                        fontWeight: 800,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </span>
                    <h3 style={{ fontSize: "1.12rem", lineHeight: 1.28, margin: "0 0 10px", letterSpacing: "-.018em" }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: ".89rem", lineHeight: 1.62, color: "var(--muted)", margin: 0 }}>
                      {text}
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 14,
                      borderTop: "1px solid var(--line)",
                      fontSize: ".79rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{ width: 6, height: 6, borderRadius: 999, background: "var(--lime)", flex: "none" }}
                      aria-hidden="true"
                    />
                    {practice}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRACKS */}
        <section className="programs section-pad">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow on-dark">02 / Cara belajar</span>
                <h2 className="display h2" style={{ margin: 0, color: "var(--white)" }}>
                  Cara belajar berbeda.
                  <br />
                  <em style={{ fontStyle: "normal", color: "var(--lime)" }}>Kesempatan tumbuh luas.</em>
                </h2>
              </div>
              <Link className="link-arrow" href="/#program" style={{ color: "var(--lime)", borderColor: "var(--lime)" }}>
                Kenali jurusan <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="program-list">
              {tracks.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.07} as="article">
                  <Link
                    className="program"
                    href="/#program"
                    style={{ gridTemplateColumns: "96px minmax(0,1fr) auto", alignItems: "center" }}
                  >
                    <span className="program-no">{t.no}</span>
                    <div className="program-body">
                      <h3>{t.name}</h3>
                      <p>{t.line}</p>
                    </div>
                    <span
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,.24)",
                        display: "grid",
                        placeItems: "center",
                        color: "var(--lime)",
                      }}
                      aria-hidden="true"
                    >
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta section-pad">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow on-dark">Langkah berikutnya</span>
              <h2 className="display h2">
                Temukan ruang
                <br />
                untuk <em>bertumbuh.</em>
              </h2>
            </div>
            <div className="cta-side">
              <p>
                Pendaftaran PPDB 2026/2027 gelombang pertama sudah dibuka. Kenali lingkungan
                belajar yang dirancang untuk mengenal setiap siswa.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link className="btn btn--lime" href="/ppdb">
                  Lihat PPDB <ArrowRight size={17} />
                </Link>
                <Link className="btn btn--ghost-light" href="/#kontak">
                  Hubungi sekolah
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
