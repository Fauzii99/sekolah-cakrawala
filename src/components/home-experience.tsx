"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Palette,
  Quote,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { facilities, faqs, heroStats, news, pillars, programs, stats, testimonials } from "@/lib/data";

const ICONS: Record<string, typeof FlaskConical> = { FlaskConical, Users, Trophy, Palette };

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${seen || reduced ? "in" : ""} ${className}`}
      style={{ transitionDelay: reduced ? "0s" : `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!seen || reduced) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, reduced, value]);

  return (
    <span ref={ref}>
      {(reduced || !seen ? value : count).toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

const MARQUEE = [
  "Sains & laboratorium",
  "Kepemimpinan",
  "Olahraga & ketangkasan",
  "Pengembangan kreatif",
  "Bahasa & komunikasi global",
  "Proyek lintas disiplin",
];

export function HomeExperience() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });
  const [feature, ...rest] = news;

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: bar }} aria-hidden="true" />

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85"
            alt="Siswa SMA Cakrawala Nusantara"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 38%" }}
          />
        </div>
        <div className="hero-scrim" />

        <div className="hero-inner">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-topline">
              <span className="hero-pill">
                <i aria-hidden="true" /> PPDB 2026 / 2027 dibuka
              </span>
              <span className="hero-pill">Sejak 1998 · Pekanbaru</span>
            </div>

            <h1 className="display">
              Berpikir luas.
              <br />
              <em>Berakar kuat.</em>
            </h1>

            <p className="hero-sub">
              Ruang tumbuh bagi generasi yang ingin memahami dunia — lalu berani mengubahnya.
              Akademik yang tajam, karakter yang kokoh, pengalaman yang nyata.
            </p>

            <div className="hero-actions">
              <Link className="btn btn--lime" href="/ppdb">
                Mulai perjalanan <ArrowRight size={17} />
              </Link>
              <a className="btn btn--ghost-light" href="#tentang">
                Kenali Cakrawala
              </a>
            </div>

            <div className="hero-stats">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="marquee-item" key={`${m}-${i}`}>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- ABOUT ---------------- */}
      <section className="about section-pad" id="tentang">
        <div className="container about-grid">
          <Reveal>
            <div className="about-media">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1300&q=85"
                alt="Suasana belajar di Cakrawala"
                fill
                sizes="(max-width: 900px) 90vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <span className="about-badge">
                <b>{new Date().getFullYear() - 1998}</b> tahun mengajar
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="about-copy">
            <span className="eyebrow">Selamat datang di Cakrawala</span>
            <h2 className="display h2">
              Pendidikan terbaik tidak memberi semua jawaban. Ia menyalakan <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>rasa ingin tahu</em>.
            </h2>
            <p className="lead">
              Sejak 1998, kami memadukan ketajaman akademik, integritas, dan pengalaman nyata.
              Setiap siswa dikenal, didengar, dan ditantang menemukan perannya.
            </p>
            <div className="about-quote">
              “Kami percaya pendidikan bukan sekadar buku — tapi membangun individu yang percaya diri,
              bertanggung jawab, dan mampu.”
              <cite>Kepala Sekolah · SMA Cakrawala Nusantara</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="pillars section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Empat pilar belajar</span>
              <h2 className="display h2" style={{ margin: 0 }}>
                Ruang untuk mencoba,
                <br />
                <em style={{ fontStyle: "normal", color: "var(--muted)" }}>bukan sekadar menghafal.</em>
              </h2>
            </div>
            <Link className="link-arrow" href="/benefit">
              Lihat semua benefit <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="pillar-grid">
            {pillars.map((p, i) => {
              const Icon = ICONS[p.icon] ?? FlaskConical;
              return (
                <Reveal key={p.title} className="pillar" delay={i * 0.06} as="article">
                  <span className="pillar-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMS ---------------- */}
      <section className="programs section-pad" id="program">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow on-dark">Bidang studi</span>
              <h2 className="display h2" style={{ margin: 0, color: "var(--white)" }}>
                Pilih arah belajar.
                <br />
                <em style={{ fontStyle: "normal", color: "var(--lime)" }}>Temukan masa depan.</em>
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: "34ch", margin: 0 }}>
              Tiga jalur utama, satu fondasi yang sama: kemampuan berpikir dan bertindak.
            </p>
          </div>

          <div className="program-list">
            {programs.map((p, i) => (
              <Reveal key={p.title} className="program" delay={i * 0.07} as="article">
                <span className="program-no">{p.no}</span>
                <div className="program-body">
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
                <div className="program-media">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={450}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COUNTERS ---------------- */}
      <section className="counters">
        <div className="container">
          <div className="counter-grid">
            {stats.map((s) => (
              <div className="counter" key={s.label}>
                <b>
                  <Counter value={s.value} suffix={s.suffix} />
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FACILITIES ---------------- */}
      <section className="facilities section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Ruang tumbuh</span>
              <h2 className="display h2" style={{ margin: 0 }}>
                Kampus untuk <em style={{ fontStyle: "normal", color: "var(--muted)" }}>mencoba.</em>
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: "32ch", margin: 0 }}>
              Dirancang untuk fokus, kolaborasi, dan kemungkinan baru.
            </p>
          </div>

          <div className="facility-grid">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} as="article">
                <div className="facility">
                  <span className="facility-tag">0{i + 1}</span>
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={900}
                    height={620}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="facility-body">
                    <h3>{f.title}</h3>
                    <p>{f.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIAL ---------------- */}
      <section className="testimonial section-pad">
        <div className="container testimonial-inner">
          <Reveal>
            <Quote size={40} color="var(--lime)" strokeWidth={1.5} />
            <blockquote style={{ marginTop: 22 }}>{testimonials[0].quote}</blockquote>
            <cite>
              {testimonials[0].name}
              <span>{testimonials[0].role}</span>
            </cite>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="testimonial-photo">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85"
                alt="Orang tua siswa Cakrawala"
                width={700}
                height={875}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- NEWS ---------------- */}
      <section className="news section-pad" id="jurnal">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Jurnal sekolah</span>
              <h2 className="display h2" style={{ margin: 0 }}>
                Yang sedang
                <br />
                <em style={{ fontStyle: "normal", color: "var(--muted)" }}>kami rayakan.</em>
              </h2>
            </div>
            <Link className="link-arrow" href="/#jurnal">
              Semua kabar <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="news-grid">
            <Reveal>
              <Link className="news-feature" href={`/berita/${feature.slug}`}>
                <div className="news-feature-img">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="news-feature-body">
                  <div className="news-meta">
                    <i aria-hidden="true" /> {feature.tag}
                    <span style={{ opacity: 0.55 }}>·</span>
                    <span style={{ letterSpacing: ".02em", textTransform: "none", fontWeight: 500 }}>
                      {feature.date}
                    </span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </Link>
            </Reveal>

            <div className="news-side">
              {rest.map((n, i) => (
                <Reveal key={n.slug} delay={0.08 + i * 0.06}>
                  <Link className="news-mini" href={`/berita/${n.slug}`}>
                    <div className="news-mini-img">
                      <Image
                        src={n.image}
                        alt={n.title}
                        width={176}
                        height={176}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4>{n.title}</h4>
                      <span>
                        {n.tag} · {n.date}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={0.22}>
                <Link className="news-mini" href="/ppdb" style={{ background: "var(--lime)", borderColor: "var(--lime)" }}>
                  <div style={{ padding: "4px 2px" }}>
                    <h4 style={{ marginBottom: 8 }}>Open House &amp; Konsultasi PPDB</h4>
                    <span style={{ color: "var(--ink-3)" }}>Daftar sekarang ↗</span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="faq section-pad">
        <div className="container faq-grid">
          <Reveal>
            <span className="eyebrow">FAQ &amp; jawaban</span>
            <h2 className="display h2" style={{ margin: "0 0 20px" }}>
              Pertanyaan yang
              <br />
              <em style={{ fontStyle: "normal", color: "var(--muted)" }}>sering muncul.</em>
            </h2>
            <p className="lead" style={{ marginBottom: 26 }}>
              Belum ketemu jawabannya? Tim PPDB kami siap membantu lewat telepon atau email.
            </p>
            <Link className="btn btn--dark" href="/ppdb">
              Hubungi tim PPDB <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <details className="faq-item" key={f.q} open={i === 0}>
                <summary>
                  <span>
                    <span className="faq-num">0{i + 1}</span>
                    {f.q}
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta section-pad" id="kontak">
        <div className="container cta-inner">
          <Reveal>
            <span className="eyebrow on-dark">PPDB 2026 / 2027</span>
            <h2 className="display h2">
              Cakrawala berikutnya
              <br />
              dimulai <em>di sini.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="cta-side">
            <p>
              Pendaftaran gelombang pertama dibuka. Temukan lingkungan belajar yang tepat untuk
              langkah besar berikutnya.
            </p>
            <Link className="btn btn--lime" href="/ppdb">
              Daftar PPDB sekarang <ArrowRight size={17} />
            </Link>
            <small>Butuh bantuan? (0761) 555-0188</small>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
