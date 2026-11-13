import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { news } from "@/lib/data";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  const idx = news.findIndex((n) => n.slug === slug);
  const next = news[(idx + 1) % news.length];

  return (
    <>
      <Header />
      <main id="top">
        <section className="page-hero">
          <div className="container" style={{ maxWidth: 860 }}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Beranda</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#jurnal">Jurnal</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{item?.tag ?? "Artikel"}</span>
            </nav>
            <span className="eyebrow on-dark">{item?.tag} · {item?.date}</span>
            <h1 className="display" style={{ fontSize: "clamp(2rem,4.2vw,3.4rem)", margin: "0 0 20px", maxWidth: "24ch" }}>
              {item?.title}
            </h1>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 40, background: "var(--paper-2)" }}>
              <Image
                src={item?.image ?? news[0].image}
                alt={item?.title ?? ""}
                width={1200}
                height={675}
                priority
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            <p className="lead" style={{ fontSize: "1.12rem", color: "var(--ink-3)", marginBottom: 26 }}>
              {item?.text}
            </p>
            <p className="muted" style={{ fontSize: "1rem" }}>
              Kegiatan ini menjadi bagian dari komitmen sekolah untuk menyediakan pengalaman belajar
              yang relevan, menantang, dan memberi ruang bagi setiap siswa untuk berkembang. Setiap
              program dirancang agar siswa tidak hanya memahami materi, tetapi juga mampu
              menerapkannya dalam situasi nyata.
            </p>
            <p className="muted" style={{ fontSize: "1rem" }}>
              Pendampingan dilakukan oleh guru dan mentor yang mengenal setiap siswa secara personal.
              Proses refleksi di akhir kegiatan membantu siswa menyadari apa yang sudah dicapai dan
              langkah berikutnya yang perlu disiapkan.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
              <Link className="btn btn--ghost" href="/#jurnal">
                <ArrowLeft size={16} /> Semua jurnal
              </Link>
              <Link className="btn btn--dark" href={`/berita/${next.slug}`}>
                Berikutnya: {next.tag} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
