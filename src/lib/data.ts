export type NewsItem = { slug: string; title: string; date: string; text: string; tag: string; image: string };

export const school = {
  name: "SMA Cakrawala Nusantara",
  short: "Cakrawala",
  tagline: "Berpikir luas. Berakar kuat.",
  city: "Pekanbaru",
  address: "Jl. Sudirman No. 18, Pekanbaru, Riau 28116",
  email: "info@cakrawalanusantara.sch.id",
  phone: "(0761) 555-0188",
  whatsapp: "+6276****0188",
  established: 1998,
  npsn: "20200198",
  accreditation: "A",
};

export const stats = [
  { value: 1240, label: "Siswa aktif", suffix: "" },
  { value: 86, label: "Pendidik & mentor", suffix: "" },
  { value: 32, label: "Program prestasi", suffix: "" },
  { value: 98, label: "Alumni lanjut studi", suffix: "%" },
];

export const heroStats = [
  { value: "98%", label: "Alumni ke PT pilihan" },
  { value: "27", label: "Tahun mengajar" },
  { value: "32", label: "Prestasi nasional" },
];

export const pillars = [
  {
    icon: "FlaskConical",
    title: "Sains & laboratorium",
    text: "Eksperimen lintas disiplin di laboratorium terpadu.",
  },
  {
    icon: "Users",
    title: "Kepemimpinan",
    text: "Mentoring dan organisasi yang membentuk integritas.",
  },
  {
    icon: "Trophy",
    title: "Olahraga & ketangkasan",
    text: "Arena Cakrawala untuk gerak, strategi, sportivitas.",
  },
  {
    icon: "Palette",
    title: "Kreativitas",
    text: "Creative studio untuk produksi visual, audio, desain.",
  },
];

export const programs = [
  {
    no: "01",
    title: "IPA",
    copy: "Pembelajaran biologi, fisika, dan kimia berbasis eksperimen untuk melatih observasi, penalaran ilmiah, serta pemecahan masalah nyata.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    no: "02",
    title: "IPS",
    copy: "Kajian ekonomi, geografi, sosiologi, dan sejarah yang membantu siswa memahami masyarakat serta mengambil keputusan berbasis data.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
  },
  {
    no: "03",
    title: "Matematika",
    copy: "Pendalaman logika, numerasi, statistika, dan pemodelan untuk membangun cara berpikir terstruktur, akurat, dan adaptif.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=85",
  },
];

export const facilities = [
  {
    title: "Laboratorium Terpadu",
    copy: "Eksperimen tanpa batas disiplin",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1300&q=85",
  },
  {
    title: "Perpustakaan Kolaboratif",
    copy: "22.000 koleksi, ruang sunyi dan diskusi",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1300&q=85",
  },
  {
    title: "Creative Studio",
    copy: "Ruang produksi visual, audio, dan desain",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1300&q=85",
  },
  {
    title: "Arena Cakrawala",
    copy: "Gerak, strategi, dan sportivitas",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1300&q=85",
  },
];

export const news: NewsItem[] = [
  {
    slug: "prestasi-olimpiade-sains",
    title: "Tim Sains Meraih Tiga Medali Tingkat Provinsi",
    date: "18 Agustus 2026",
    text: "Siswa Cakrawala meraih satu medali emas dan dua perak pada Olimpiade Sains Jawa Barat.",
    tag: "Prestasi",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "pekan-proyek-siswa",
    title: "Pekan Proyek: Solusi Nyata untuk Kota Berkelanjutan",
    date: "12 Agustus 2026",
    text: "Lebih dari 40 tim mempresentasikan inovasi energi, pangan, dan mobilitas ramah lingkungan.",
    tag: "Inovasi",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "agenda-open-house",
    title: "Open House dan Konsultasi PPDB 2026/2027",
    date: "30 Agustus 2026",
    text: "Keluarga calon siswa dapat mengenal kurikulum, fasilitas, dan budaya belajar kami.",
    tag: "Agenda",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1000&q=85",
  },
];

export const faqs = [
  {
    q: "Program apa saja yang tersedia?",
    a: "Tiga bidang utama: IPA (biologi, fisika, kimia), IPS (ekonomi, geografi, sosiologi, sejarah), dan Matematika (logika, statistika, pemodelan). Masing-masing diperkuat proyek lintas disiplin dan pendampingan mentor.",
  },
  {
    q: "Bagaimana alur penerimaan siswa baru?",
    a: "Pendaftaran gelombang pertama dibuka 1 September–30 November 2026. Alurnya: registrasi dokumen, asesmen akademik, lalu wawancara keluarga. Hasil diumumkan maksimal 14 hari kerja setelah asesmen.",
  },
  {
    q: "Apakah ada beasiswa?",
    a: "Ada. Beasiswa prestasi akademik, beasiswa jalur olahraga dan seni, serta bantuan biaya bagi keluarga yang membutuhkan. Setiap jalur punya proses seleksi dan kuota sendiri.",
  },
  {
    q: "Bagaimana keamanan dan kesejahteraan siswa?",
    a: "Kampus berpagar dengan akses terkontrol, pendampingan wali kelas, layanan konseling, dan kanal pelaporan anonim. Setiap siswa punya mentor yang memantau perkembangan akademik dan sosialnya.",
  },
];

export const testimonials = [
  {
    quote:
      "Di sini, anak kami tidak diminta menjadi sama dengan yang lain. Ia dibantu mengenali kekuatannya, berani bertanya, dan bertanggung jawab atas pilihannya.",
    name: "Rina Prameswari",
    role: "Orang tua siswa kelas XI",
  },
  {
    quote:
      "Guru-gurunya tahu nama setiap siswa dan tahu di mana titik lemahnya. Itu yang membuat anak saya akhirnya percaya diri di depan kelas.",
    name: "Bayu Anggara",
    role: "Orang tua siswa kelas X",
  },
];
