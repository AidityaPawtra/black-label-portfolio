
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MapPin,
  Code2,
  Users,
  Lightbulb,
  Trophy,
  BriefcaseBusiness,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import './styles.css';

const experiences = [
  {
    year: '2026',
    type: 'Leadership',
    role: 'Ketua Pelaksana PKKMB Garda FT',
    org: 'Fakultas Teknik · UNESA',
    desc: 'Merancang dan mengoordinasikan pengalaman penyambutan mahasiswa baru yang inklusif dan berdampak.',
    tag: 'Event leadership'
  },
  {
    year: '2026 - sekarang',
    type: 'Organization',
    role: 'BEM Fakultas Teknik',
    org: 'Wakil Ketua Departemen Dalam Negeri',
    desc: 'Terlibat dalam pengembangan kapasitas mahasiswa, organisasi, dan kolaborasi lintas elemen.',
    tag: 'Student organization'
  },
  {
    year: '2025',
    type: 'Organization',
    role: 'Sekretaris Umum PKKMB Kampus 5 UNESA',
    org: 'Universitas Negeri Surabaya · Kampus 5 Magetan',
    desc: 'Mengelola administrasi, dokumentasi, dan koordinasi kesekretariatan untuk mendukung pelaksanaan PKKMB.',
    tag: 'General secretary'
  },
  {
    year: '2025',
    type: 'Organization',
    role: 'Sekretaris Umum UKM Basket Kampus 5 UNESA',
    org: 'Unit Kegiatan Mahasiswa Basket · UNESA',
    desc: 'Mendukung administrasi organisasi, pengelolaan dokumen, dan koordinasi kegiatan UKM Basket.',
    tag: 'Organizational administration'
  },
  {
    year: '2024 - 2025',
    type: 'Leadership',
    role: 'Ketua Himpunan Mahasiswa Prodi Informatika',
    org: 'UNESA Kampus 5 Magetan',
    desc: 'Mengembangkan kolaborasi, solidaritas, dan program kerja organisasi mahasiswa Informatika.',
    tag: 'Organization leadership'
  },
  {
    year: '2021 - 2024',
    type: 'Leadership',
    role: 'Wakil Ketua Komisi C MPK',
    org: 'SMA Negeri 15 Kota Bekasi',
    desc: 'Mendukung pelaksanaan fungsi komisi, koordinasi anggota, dan tanggung jawab organisasi dalam MPK.',
    tag: 'Student leadership'
  },
  {
    year: '2024 - sekarang',
    type: 'Business & Entrepreneurship',
    role: 'CEO Arey Project Vendor',
    org: 'Merchandise & Konveksi',
    desc: 'Mengelola operasional, pengembangan usaha, dan strategi bisnis Arey Project Vendor.',
    tag: 'Business & entrepreneurship'
  }
];

const projects = [
  {
    no: '01',
    category: 'Web App',
    title: 'Sistem Keuangan & Peminjaman BUMDes',
    desc: 'Konsep sistem pengelolaan transaksi, inventaris, peminjaman barang, dan laporan BUMDes.',
    stack: ['React', 'Vite', 'LocalStorage'],
    symbol: '01'
  },
  {
    no: '02',
    category: 'IoT / Research',
    title: 'Absensi Mahasiswa Berbasis IoT',
    desc: 'Rancangan sistem absensi dengan QR code dinamis serta validasi waktu dan lokasi.',
    stack: ['IoT', 'QR Code', 'System Design'],
    symbol: '02'
  },
  {
    no: '03',
    category: 'Brand / Business',
    title: 'Arey Project',
    desc: 'Pengembangan identitas brand merchandise dan konveksi dengan visual yang konsisten.',
    stack: ['Branding', 'Design', 'Business'],
    symbol: 'AP'
  }
];

const skills = [
  {
    title: 'Development',
    items: ['JavaScript', 'React', 'HTML & CSS', 'REST API · dasar']
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Microsoft Office']
  },
  {
    title: 'Leadership',
    items: ['Project coordination', 'Public speaking', 'Team collaboration', 'Problem solving']
  }
];

const education = [
  {
    year: '2012 — 2018',
    level: 'SD / sederajat',
    place: 'SD Insan Kamil Kota Bekasi',
    note: 'Awal perjalanan pendidikan dan pengembangan diri.'
  },
  {
    year: '2018 — 2021',
    level: 'SMP / sederajat',
    place: 'SMP Negeri 31 Kota Bekasi',
    note: 'Siswa dengan nilai rapor terbaik.'
  },
  {
    year: '2021 — 2024',
    level: 'SMA / sederajat',
    place: 'SMA Negeri 15 Kota Bekasi',
    note: 'Jurusan IPS, anggota MPK, dan ekstrakurikuler basket. Juara 1 Lomba Turnamen Basket Antar Jurusan 2023.'
  },
  {
    year: '2024 — sekarang',
    level: 'Sarjana / S1',
    place: 'Teknik Informatika · Fakultas Teknik Universitas Negeri Surabaya',
    note: 'Mahasiswa aktif, Ketua HMP Informatika, Wakil Departemen Dalam Negeri BEM FT, dan Ketua Pelaksana PKKMB Garda FT 2026. Fokus pada pengembangan produk digital, organisasi, dan kepemimpinan.'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeEdu, setActiveEdu] = useState(1);

  const filters = ['All', 'Leadership', 'Organization', 'Business & Entrepreneurship'];

  const filteredExperiences =
    filter === 'All'
      ? experiences
      : experiences.filter(item => item.type === filter);

  const navigation = [
    ['About', 'about'],
    ['Journey', 'journey'],
    ['Experience', 'experience'],
    ['Projects', 'projects'],
    ['Skills', 'skills'],
    ['Contact', 'contact']
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="AP home">
          A<span>P</span><i>.</i>
        </a>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="top-cta" href="#contact">
          Let's connect <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              PERSONAL PORTFOLIO
              <span className="eyebrow-year">2026 / 27</span>
            </div>

            <p className="hero-pre">Hello, I'm</p>

            <h1>
              Aditya Putra
              <br />
              <em>Wicaksana.</em>
            </h1>

            <p className="hero-role">
              Informatics student <span>·</span> Builder <span>·</span> Young leader
            </p>

            <p className="hero-desc">
              Menghubungkan teknologi, kepemimpinan, dan ide menjadi karya
              yang punya tujuan. Ini adalah ruang untuk melihat perjalanan,
              hal yang sedang dibangun, dan langkah berikutnya.
            </p>

            <div className="hero-actions">
              <a className="btn btn-red" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-outline" href="#contact">
                <Mail size={16} /> Get in touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 size={17} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Users size={17} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <ExternalLink size={17} />
              </a>
              <span className="social-rule" />
              <span>Based in Indonesia</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-red-shape" />

            <div className="portrait-placeholder has-photo">
             <img
                className="portrait-photo"
                src="/profile.png"
                alt="Foto Aditya Putra Wicaksana"
                onError={(event) => {
                  console.error('Foto gagal dimuat:', event.currentTarget.src);
                  event.currentTarget.style.display = 'none';
                }}
              />
              <div className="portrait-fallback">
                <div className="portrait-initials">AP</div>
                <span>YOUR PORTRAIT</span>
                <small>Tambahkan public/profile.jpg</small>
              </div>
            </div>

            <div className="art-label label-top">
              INFORMATICS
              <br />
              ENGINEERING
            </div>

            <div className="art-label label-bottom">
              <span className="gold-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <div className="hero-index">
              01 <span>—</span> INTRODUCTION
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDownRight size={16} />
          </a>
        </section>

        <section className="intro section-wrap section-pad" id="about">
          <div className="section-kicker">
            <span>01</span> / ABOUT ME
          </div>

          <div className="intro-grid">
            <h2>
              Curious by nature.
              <br />
              <em>Driven by purpose.</em>
            </h2>

            <div className="intro-content">
              <p className="lead">
                Saya percaya perkembangan terbaik terjadi saat rasa ingin
                tahu bertemu keberanian untuk mengambil tanggung jawab.
              </p>

              <p>
                Saya adalah mahasiswa Teknik Informatika yang tertarik pada
                pengembangan produk digital, organisasi, dan cara membangun
                kolaborasi yang efektif. Saya senang belajar dengan
                mengerjakan hal nyata, mulai dari merancang sistem hingga
                mengoordinasikan orang dan ide.
              </p>

              <div className="values-row">
                <div>
                  <Code2 />
                  <b>Tech-minded</b>
                  <span>Build & explore</span>
                </div>
                <div>
                  <Users />
                  <b>People-first</b>
                  <span>Lead & collaborate</span>
                </div>
                <div>
                  <Lightbulb />
                  <b>Growth-driven</b>
                  <span>Learn by doing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="journey section-wrap section-pad" id="journey">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02</span> / THE JOURNEY
              </div>
              <h2>
                Every chapter
                <br />
                <em>shapes the next.</em>
              </h2>
            </div>
            <p>
              Perjalanan bukan hanya tentang tempat yang pernah disinggahi,
              tetapi juga tentang apa yang dipelajari di setiap tahap.
            </p>
          </div>

          <div className="journey-panel">
            <div className="journey-map">
              <div className="map-grid" />

              <svg
                className="journey-path"
                viewBox="0 0 700 260"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M 55 195 C 115 190, 145 55, 235 82 S 355 165, 425 125 S 500 230, 565 205" />
                <path
                    className="path-glow"
                    d="M 55 195 C 115 190, 145 55, 235 82 S 355 165, 425 125 S 500 230, 565 205"
                  />
              </svg>

              {education.map((item, index) => (
                <button
                  key={item.place}
                  className={`map-point point-${index}${activeEdu === index ? ' active' : ''}`}
                  onClick={() => setActiveEdu(index)}
                >
                  <span className="point-dot" />
                  <span className="point-label">
                    <b>{item.place}</b>
                    <small>{item.year}</small>
                  </span>
                </button>
              ))}

              <div className="map-coordinate">
                JOURNEY / INDONESIA
                <br />
                <span>Interactive timeline · Select a point</span>
              </div>
            </div>

            <div className="journey-detail">
              <div className="detail-number">
                0{activeEdu + 1} <span>/ 0{education.length}</span>
              </div>

              <GraduationCap className="detail-icon" />

              <span className="gold-overline">
                {education[activeEdu].year}
              </span>

              <h3>{education[activeEdu].level}</h3>
              <h4>{education[activeEdu].place}</h4>
              <p>{education[activeEdu].note}</p>

              <div className="detail-foot">
                <MapPin size={14} /> EDUCATION MILESTONE
              </div>
            </div>
          </div>

          <p className="micro-note">
            * Periksa kembali tahun dan detail pendidikan sebelum website dipublikasikan.
          </p>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>03</span> / EXPERIENCE
              </div>
              <h2>
                Work with intent.
                <br />
                <em>Lead with clarity.</em>
              </h2>
            </div>

            <div className="filter-tabs">
              {filters.map(item => (
                <button
                  key={item}
                  className={filter === item ? 'selected' : ''}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="experience-layout">
            <div className="experience-list">
              {filteredExperiences.map(item => (
                <motion.article
                  layout
                  key={item.role}
                  className="experience-item"
                >
                  <div className="exp-year">
                    {item.year}
                    <span />
                  </div>

                  <div className="exp-content">
                    <div className="exp-type">{item.type}</div>
                    <h3>{item.role}</h3>
                    <div className="exp-org">{item.org}</div>
                    <p>{item.desc}</p>
                    <span className="exp-tag">{item.tag}</span>
                  </div>

                  <ArrowUpRight className="exp-arrow" size={18} />
                </motion.article>
              ))}
            </div>

            <aside className="quote-card">
              <span className="quote-mark">“</span>
              <p>
                Leadership is not a title. It's the responsibility to make
                things move forward.
              </p>
              <div className="quote-bottom">
                <span /> A PRINCIPLE I TRY TO LIVE BY ADITYA PUTRA WICAKSANA
              </div>
              <div className="quote-watermark">AP</div>
            </aside>
          </div>
        </section>

        <section className="achievements section-wrap section-pad">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>04</span> / HIGHLIGHTS
              </div>
              <h2>
                Proof of progress.
                <br />
                <em>Room to grow.</em>
              </h2>
            </div>
            <p>
              Bagian ini akan menampilkan pencapaian, sertifikasi, dan
              kontribusi yang dapat diverifikasi.
            </p>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card">
              <Trophy />
              <span className="ach-number">01</span>
              <h3>Achievements</h3>
              <p>Prestasi akademik, kompetisi, atau penghargaan yang pernah diraih.</p>
              <span className="ach-status">Juara 1 Lomba Basket 2023</span>
              <span className="ach-status">Menjadi Siswa Dengan Nilai Tertinggi 2019-2021</span>
              <span className="ach-status">Menjadi Speaker/Narasumber LKMM - Pra TD Informatika 2025</span>
              <span className="ach-status">Menjadi Speaker/Narasumber LKMM - Pra TD Prodi Pariwisata 2026</span>
            </div>

            <div className="achievement-card">
              <GraduationCap />
              <span className="ach-number">02</span>
              <h3>Certifications</h3>
              <p>Sertifikasi pelatihan, kursus, dan pengembangan kompetensi.</p>
              <span className="ach-status">Pelatihan LKMM - TD, TM, TL, PPTD.</span>
              <span className="ach-status">Kursus Pemrograman, UI/UX Design, Data Science.</span>
              <span className="ach-status">Sertifikasi Seminar Internasional, Conference.</span>
            </div>

            <div className="achievement-card">
              <BriefcaseBusiness />
              <span className="ach-number">03</span>
              <h3>Contributions</h3>
              <p>Kegiatan, program, atau karya yang memberi dampak bagi orang lain.</p>
              <span className="ach-status">Menjadi Steering Committee berbagai kegiatan HMPTICS 2024-2025.</span>
              <span className="ach-status">Menjadi Steering Committee kegiatan Departemen Dalam Negeri BEM FT 2026.</span>
              <span className="ach-status">Menjadi Ketua Pelaksana PKKMB Garda FT 2026.</span>
              <span className="ach-status">Menjadi Anggota Tim Penyelenggara Event Seminar Nasional 2024 dan 2025.</span>
              <span className="ach-status">Menjadi Sekretaris Umum PKKMB Kampus 5 UNESA 2025.</span>
              <span className="ach-status">Menjadi Sekretaris Umum Unit Kegiatan Mahasiswa Basket Kampus 5 UNESA 2025.</span>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>05</span> / SELECTED WORK
              </div>
              <h2>
                Ideas made
                <br />
                <em>tangible.</em>
              </h2>
            </div>
            <p>
              Proyek dan ide yang merepresentasikan ketertarikan pada
              teknologi, pemecahan masalah, dan pengembangan brand.
            </p>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.no}>
                <div className="project-visual">
                  <span className="project-no">
                    {project.no} / SELECTED PROJECT
                  </span>
                  <span className="project-symbol">{project.symbol}</span>
                  <div className="visual-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <ArrowUpRight size={19} />
                  </div>
                  <p>{project.desc}</p>
                  <div className="stack-list">
                    {project.stack.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="micro-note">
            * Tambahkan tautan demo, repository, screenshot, dan hasil proyek yang sudah diverifikasi.
          </p>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-kicker">
            <span>06</span> / CAPABILITIES
          </div>

          <div className="skills-head">
            <h2>
              Tools are useful.
              <br />
              <em>Thinking is essential.</em>
            </h2>
            <p>
              Keahlian ditampilkan berdasarkan pengalaman nyata, bukan
              sekadar daftar teknologi.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.title}>
                <div className="skill-index">0{index + 1}</div>
                <h3>{skill.title}</h3>
                <div className="skill-chips">
                  {skill.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="skill-card-foot">
                  {index === 0
                    ? 'TECHNICAL'
                    : index === 1
                    ? 'WORKFLOW'
                    : 'PEOPLE & PROJECTS'}
                  <ArrowUpRight size={14} />
                </div>
              </article>
            ))}
          </div>

          <p className="micro-note">
            * Sesuaikan daftar keahlian dengan kemampuan yang benar-benar dikuasai.
          </p>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-top">
            <div className="section-kicker">
              <span>07</span> / CONTACT
            </div>
            <span className="contact-stamp">
              LET'S BUILD SOMETHING MEANINGFUL
            </span>
          </div>

          <div className="contact-grid">
            <div>
              <h2>
                Have a good idea?
                <br />
                <em>Let's talk.</em>
              </h2>
              <p>
                Terbuka untuk diskusi proyek, kolaborasi, kesempatan belajar,
                dan koneksi baru.
              </p>
              <a className="btn btn-red" href="mailto:wicaksanaadityaputra@gmail.com">
                Send me an email <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:wicaksanaadityaputra@gmail.com">
                <span><Mail /></span>
                <div>
                  <small>EMAIL</small>
                  <b>wicaksanaadityaputra@gmail.com</b>
                </div>
                <ArrowUpRight />
              </a>

              <a href="www.linkedin.com/in/aditya-putra-wicaksana-9aa592349" target="_blank" rel="noreferrer">
                <span><Users /></span>
                <div>
                  <small>LINKEDIN</small>
                  <b>www.linkedin.com/in/aditya-putra-wicaksana-9aa592349</b>
                </div>
                <ArrowUpRight />
              </a>

              <a href="https://github.com/AidityaPawtra" target="_blank" rel="noreferrer">
                <span><Code2 /></span>
                <div>
                  <small>GITHUB</small>
                  <b>https://github.com/AidityaPawtra</b>
                </div>
                <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <a className="brand" href="#home">
              A<span>P</span><i>.</i>
            </a>
            <span>ADITYA PUTRA WICAKSANA · PERSONAL PORTFOLIO</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 AP Portfolio</span>
        <span>DESIGNED WITH INTENTION <i>✦</i></span>
        <span>BLACK / RED / GOLD</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);