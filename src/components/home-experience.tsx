"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, FlaskConical, Globe2, Quote, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { news } from "@/lib/data";

const EducationScene = dynamic(() => import("@/components/education-scene"), { ssr: false });

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  return <motion.div ref={ref} className={`scroll-reveal ${className}`} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduced) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, reduced, value]);
  return <span ref={ref}>{(reduced ? value : count).toLocaleString("id-ID")}{suffix}</span>;
}

const programs = [
  { no: "01", title: "IPA", copy: "Pembelajaran biologi, fisika, dan kimia berbasis eksperimen untuk melatih observasi, penalaran ilmiah, serta pemecahan masalah nyata.", icon: FlaskConical, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85" },
  { no: "02", title: "IPS", copy: "Kajian ekonomi, geografi, sosiologi, dan sejarah yang membantu siswa memahami masyarakat serta mengambil keputusan berbasis data.", icon: Globe2, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85" },
  { no: "03", title: "Matematika", copy: "Pendalaman logika, numerasi, statistika, dan pemodelan untuk membangun cara berpikir terstruktur, akurat, dan adaptif.", icon: Sparkles, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=85" },
];
const facilities = [
  ["Laboratorium Terpadu", "Eksperimen tanpa batas disiplin", "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1300&q=85"],
  ["Perpustakaan Kolaboratif", "22.000 koleksi, ruang sunyi dan diskusi", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1300&q=85"],
  ["Creative Studio", "Ruang produksi visual, audio, dan desain", "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1300&q=85"],
  ["Arena Cakrawala", "Gerak, strategi, dan sportivitas", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1300&q=85"],
];
const newsImages = ["https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1000&q=85"];

export function HomeExperience() {
  const journeyRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .25 });
  const heroCopyY = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 150]);
  const heroCopyOpacity = useTransform(scrollY, [0, 620], [1, reduced ? 1 : .16]);
  const heroImageY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 120]);
  const { scrollYProgress: journeyProgress } = useScroll({ target: journeyRef, offset: ["start start", "end end"] });
  const chapterOne = useTransform(journeyProgress, [0,.25,.35], [1,1,0]);
  const chapterTwo = useTransform(journeyProgress, [.25,.4,.58,.7], [0,1,1,0]);
  const chapterThree = useTransform(journeyProgress, [.62,.76,1], [0,1,1]);
  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />
    <section className="hero-editorial">
      <motion.div className="hero-image" style={{ y: heroImageY }} initial={false} animate={reduced ? {} : { scale: [1.02, 1.09] }} transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }} />
      <div className="hero-shade" />

      <div className="hero-grid container">
        <motion.div className="hero-copy" style={{ y: heroCopyY, opacity: heroCopyOpacity }} initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : .14, delayChildren: .2 } } }}>
          <motion.span className="hero-kicker" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>SMA Cakrawala Nusantara · Pekanbaru</motion.span>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}>Berpikir luas.<br/><em>Berakar kuat.</em></motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>Ruang tumbuh bagi generasi yang ingin memahami dunia—lalu berani mengubahnya.</motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}><Link className="button lime" href="/ppdb">Mulai perjalanan <ArrowRight size={18}/></Link><a className="text-link light" href="#cerita">Kenali Cakrawala</a></motion.div>
        </motion.div>
        <motion.aside className="hero-float-stat" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .9, duration: .8 }}><span>Jejak alumni</span><strong>98%</strong><p>diterima di perguruan tinggi pilihan</p></motion.aside>
        <div className="hero-label">EST. 1998 <span/> 0°32&apos; N · 101°27&apos; E</div>
        <a href="#cerita" className="scroll-cue"><span>Gulir untuk menjelajah</span><ArrowDown size={18}/></a>
      </div>
    </section>

    <section ref={journeyRef} id="cerita" className="immersive-journey"><div className="journey-sticky">
      <div className="journey-canvas"><EducationScene progress={journeyProgress}/></div>
      <div className="journey-top"><span>CAKRAWALA / BIDANG STUDI</span><span>GULIR · 01—03</span></div>
      <motion.article className="journey-copy journey-left" style={{opacity:chapterOne}}><span>01 / IPA</span><h2>Menguji<br/><em>kemungkinan.</em></h2><p>Atom, materi, dan kehidupan dibaca melalui eksperimen.</p></motion.article>
      <motion.article className="journey-copy journey-right" style={{opacity:chapterTwo}}><span>02 / IPS</span><h2>Memahami<br/><em>dunia.</em></h2><p>Masyarakat, ruang, dan waktu dipetakan dengan rasa ingin tahu.</p></motion.article>
      <motion.article className="journey-copy journey-left" style={{opacity:chapterThree}}><span>03 / MATEMATIKA</span><h2>Merancang<br/><em>logika.</em></h2><p>Pola menjadi bahasa untuk keputusan yang akurat.</p></motion.article>
      <div className="journey-progress"><motion.i style={{scaleX:journeyProgress}}/></div>
    </div></section>

    <section className="intro section-pad"><div className="container intro-layout">
      <Reveal><span className="section-index">01 / CAKRAWALA</span></Reveal>
      <Reveal delay={.1}><h2>Pendidikan terbaik tidak memberi semua jawaban. Ia menyalakan <em>rasa ingin tahu</em> yang bertahan seumur hidup.</h2></Reveal>
      <Reveal className="intro-note" delay={.2}><p>Sejak 1998, kami memadukan ketajaman akademik, integritas, dan pengalaman nyata. Setiap siswa dikenal, didengar, dan ditantang menemukan perannya.</p><a href="#program" className="text-link">Baca filosofi kami <ArrowRight size={16}/></a></Reveal>
    </div></section>

    <section className="numbers"><div className="container number-grid">
      {[[1240,"Siswa aktif",""],[86,"Pendidik & mentor",""],[32,"Program prestasi",""],[98,"Alumni lanjut studi","%"]].map(([v,l,s],i)=><Reveal className="number-item" delay={i*.08} key={String(l)}><strong><Counter value={Number(v)} suffix={String(s)}/></strong><span>{l}</span></Reveal>)}
    </div></section>

    <section id="program" className="programs section-pad"><div className="container">
      <Reveal className="section-heading"><span className="section-index">02 / JURUSAN</span><h2>Pilih arah belajar.<br/><em>Temukan masa depan.</em></h2></Reveal>
      <div className="program-stack depth-stage">{programs.map((p,i)=><Reveal key={p.title} className={`program-row depth-card row-${i}`}><motion.div className="program-image" whileHover={reduced?{}:{scale:1.025}} transition={{duration:.55}} style={{backgroundImage:`url('${p.image}')`}}/><div className="program-copy"><div className="program-meta"><span>{p.no}</span><p.icon size={22}/></div><h3>{p.title}</h3><p>{p.copy}</p><a href="#kontak" aria-label={`Pelajari ${p.title}`}><ArrowRight/></a></div></Reveal>)}</div>
    </div></section>

    <section className="feature-story depth-feature"><div className="feature-photo laboratory-photo"/><div className="feature-copy"><Reveal><span className="section-index light-index">CERITA DARI CAKRAWALA</span><p className="feature-quote">“Kami belajar bahwa ide kecil bisa punya dampak besar ketika dikerjakan bersama.”</p><p>Tim Arunika mengubah limbah kantin menjadi material bioplastik—proyek satu semester yang membawa mereka ke final kompetisi inovasi nasional.</p><Link className="button outline-light" href="/berita/pekan-proyek-siswa">Baca perjalanan mereka <ArrowRight size={18}/></Link></Reveal></div></section>

    <section className="facility-section section-pad depth-stage"><div className="container facility-head"><Reveal><span className="section-index">03 / RUANG TUMBUH</span><h2>Kampus untuk <em>mencoba.</em></h2></Reveal><Reveal><p>Dirancang untuk fokus, kolaborasi, dan kemungkinan baru.</p></Reveal></div><div className="facility-track">{facilities.map((f,i)=><Reveal className="facility-card depth-card" key={f[0]}><div className="facility-img" style={{backgroundImage:`url('${f[2]}')`}}><span>0{i+1}</span></div><h3>{f[0]}</h3><p>{f[1]}</p></Reveal>)}</div></section>

    <section id="berita" className="news section-pad"><div className="container"><Reveal className="news-head"><div><span className="section-index">04 / JURNAL SEKOLAH</span><h2>Yang sedang<br/><em>kami rayakan.</em></h2></div><a className="text-link" href="#berita">Lihat semua kabar <ArrowRight size={16}/></a></Reveal><div className="news-grid">{news.map((n,i)=><Reveal className={`news-item news-${i}`} key={n.slug}><Link href={`/berita/${n.slug}`}><div className="news-img" style={{backgroundImage:`url('${newsImages[i]}')`}}/><span>{n.date} · {i===0?"PRESTASI":i===1?"INOVASI":"AGENDA"}</span><h3>{n.title}</h3><p>{n.text}</p><ArrowRight/></Link></Reveal>)}</div></div></section>

    <section className="testimonial section-pad"><div className="container testimonial-layout"><Quote size={64}/><Reveal><blockquote>“Di sini, anak kami tidak diminta menjadi sama dengan yang lain. Ia dibantu mengenali kekuatannya, berani bertanya, dan bertanggung jawab atas pilihannya.”</blockquote><p><strong>Rina Prameswari</strong><br/>Orang tua siswa kelas XI</p></Reveal><div className="testimonial-photo"/></div></section>

    <section id="kontak" className="ppdb-cta"><div className="container cta-layout"><Reveal><span className="section-index light-index">PPDB 2026 / 2027</span><h2>Cakrawala berikutnya<br/>dimulai <em>di sini.</em></h2></Reveal><Reveal className="cta-side"><p>Pendaftaran gelombang pertama dibuka. Temukan lingkungan belajar yang tepat untuk langkah besar berikutnya.</p><Link className="button lime" href="/ppdb">Daftar PPDB sekarang <ArrowRight size={18}/></Link><span>Butuh bantuan? (0761) 555-0188</span></Reveal></div></section>
  </main>;
}
