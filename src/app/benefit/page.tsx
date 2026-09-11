import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BrainCircuit, Compass, FlaskConical, Globe2, MessageCircle, Users } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Benefit Belajar",
  description: "Kenali manfaat pembelajaran di Cakrawala: penalaran ilmiah, pemahaman sosial, logika, komunikasi, dan karakter sebagai bekal untuk terus bertumbuh.",
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
  { icon: FlaskConical, label: "PENALARAN ILMIAH", title: "Berani bertanya. Terbiasa menguji.", text: "Eksperimen biologi, fisika, dan kimia menjadi ruang untuk melatih observasi, menguji dugaan, dan menyusun kesimpulan berdasarkan bukti.", practice: "Bekal: rasa ingin tahu & pemecahan masalah" },
  { icon: Globe2, label: "WAWASAN SOSIAL", title: "Melihat dunia dari banyak sisi.", text: "Ekonomi, geografi, sosiologi, dan sejarah membantu siswa membaca hubungan antara manusia, lingkungan, dan perubahan di sekitarnya.", practice: "Bekal: perspektif luas & kepekaan sosial" },
  { icon: BrainCircuit, label: "LOGIKA & NUMERASI", title: "Pikiran terstruktur. Keputusan terukur.", text: "Logika, statistika, dan pemodelan melatih siswa mengenali pola, mengurai persoalan, serta menjelaskan alasan di balik sebuah jawaban.", practice: "Bekal: berpikir runtut & literasi data" },
  { icon: MessageCircle, label: "KOMUNIKASI", title: "Ide yang berani disampaikan.", text: "Penguatan Bahasa Inggris dan public speaking memberi ruang untuk belajar menyampaikan gagasan dengan jelas sekaligus mendengarkan sudut pandang lain.", practice: "Bekal: ekspresi diri & kemampuan berdialog" },
  { icon: Users, label: "KOLABORASI & KARAKTER", title: "Tumbuh bersama, bukan sendiri.", text: "Proyek, mentoring, kegiatan sosial, dan organisasi siswa menjadi kesempatan untuk berlatih bekerja sama, mengambil peran, dan menjaga integritas.", practice: "Bekal: empati & tanggung jawab" },
  { icon: Compass, label: "EKSPLORASI DIRI", title: "Mengenal minat. Menemukan arah.", text: "Beragam bidang belajar membuka kesempatan untuk mengenali hal yang disukai, merefleksikan proses, dan mulai memikirkan langkah belajar berikutnya.", practice: "Bekal: refleksi diri & kemandirian belajar" },
];

export default function BenefitPage() {
  return (
    <>
      <Header />
      <main id="top" className={styles.page}>
        <a href="#manfaat" className={styles.skip}>Langsung ke manfaat belajar</a>
        <section className={styles.hero} aria-labelledby="benefit-title">
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Benefit</span></nav>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>BENEFIT BELAJAR DI CAKRAWALA</p>
                <h1 id="benefit-title">Bukan sekadar tahu.<br /><em>Bekal untuk tumbuh.</em></h1>
                <p className={styles.lead}>Dari rasa ingin tahu menjadi cara berpikir. Dari pengalaman belajar menjadi bekal untuk melangkah lebih jauh.</p>
                <a href="#manfaat" className={styles.primary}>Jelajahi manfaat <ArrowDown size={18} aria-hidden="true" /></a>
              </div>
              <aside className={styles.compass} aria-label="Filosofi belajar: berpikir luas, berakar kuat">
                <span className={styles.compassTop}>CAKRAWALA / FILOSOFI BELAJAR</span>
                <div className={styles.orbit} aria-hidden="true"><div /><span /><i /></div>
                <div className={styles.compassCopy}><span>RASA INGIN TAHU ADALAH AWAL.</span><p>Berpikir luas.<br /><em>Berakar kuat.</em></p></div>
                <div className={styles.compassBottom}><span>ILMU</span><span>KARAKTER</span><span>ARAH</span></div>
              </aside>
            </div>
          </div>
        </section>
        <section id="manfaat" className={styles.benefits} aria-labelledby="manfaat-title">
          <div className="container">
            <div className={styles.sectionHeading}><p className={styles.eyebrow}>01 / BEKAL YANG DIBANGUN</p><div><h2 id="manfaat-title">Pelajaran hari ini.<br /><em>Manfaat melampaui kelas.</em></h2><p>Inilah kemampuan yang ingin ditumbuhkan melalui bidang studi dan pengalaman belajar yang diperkenalkan Cakrawala.</p></div></div>
            <div className={styles.cards}>{benefits.map(({ icon: Icon, label, title, text, practice }, index) => <article key={label} className={styles.card}><div className={styles.cardTop}><Icon size={26} strokeWidth={1.5} aria-hidden="true" /><span>0{index + 1}</span></div><p className={styles.cardLabel}>{label}</p><h3>{title}</h3><p>{text}</p><div className={styles.practice}>{practice}</div></article>)}</div>
          </div>
        </section>
        <section className={styles.pathway} aria-labelledby="pathway-title">
          <div className={`container ${styles.pathwayGrid}`}><div><p className={styles.eyebrow}>02 / DARI MINAT MENJADI LANGKAH</p><h2 id="pathway-title">Cara belajar berbeda.<br /><em>Kesempatan tumbuh yang luas.</em></h2><p>Kenali bidang studi yang paling mengundang rasa ingin tahu. Tidak harus punya semua jawaban untuk mulai menjelajah.</p><Link href="/#program" className={styles.textLink}>Kenali jurusan <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className={styles.subjects}>{[{ name: "IPA", text: "Amati fenomena. Uji ide. Pahami kehidupan." }, { name: "IPS", text: "Baca konteks. Kenali masyarakat. Perluas perspektif." }, { name: "Matematika", text: "Temukan pola. Susun alasan. Pecahkan persoalan." }].map((subject, index) => <Link href="/#program" key={subject.name}><span className={styles.subjectNumber}>0{index + 1}</span><div><h3>{subject.name}</h3><p>{subject.text}</p></div><ArrowUpRight size={23} aria-hidden="true" /></Link>)}</div></div>
        </section>
        <section className={styles.cta} aria-labelledby="next-title"><div className={`container ${styles.ctaInner}`}><div><p className={styles.eyebrow}>LANGKAH BERIKUTNYA</p><h2 id="next-title">Temukan ruang<br />untuk <em>bertumbuh.</em></h2><p>Kenali alur penerimaan siswa atau hubungi sekolah untuk membahas kebutuhan belajar, kegiatan, dan informasi terbaru.</p></div><div className={styles.actions}><Link href="/ppdb" className={styles.primary}>Lihat informasi PPDB <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/#kontak" className={styles.textLink}>Hubungi sekolah <ArrowUpRight size={18} aria-hidden="true" /></Link><span>Detail pelaksanaan kegiatan dapat dikonfirmasi langsung kepada sekolah.</span></div></div></section>
      </main>
      <Footer />
    </>
  );
}
