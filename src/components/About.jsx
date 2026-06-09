import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { fadeUp, staggerContainer } from './AnimatedSection'

const stats = [
  { text: 'S1', label: 'Sarjana Informatika, Universitas Mercu Buana Yogyakarta' },
  { value: 4, suffix: '', label: 'Peran profesional: fullstack, front-end, cyber, freelance' },
  { text: 'Azure', label: 'Tersertifikasi Microsoft Azure Basic' },
  { text: 'Fullstack', label: 'Front-end React & back-end Node.js / Laravel' }
]

const experiences = [
  {
    role: 'Full Stack Web Developer',
    company: 'PT. SanurPro IndoTeknologi',
    period: 'Agu 2025 - Sekarang',
    points: [
      'Membangun aplikasi web end-to-end sesuai kebutuhan klien, mencakup front-end dan back-end.',
      'Merancang UI/UX responsif dengan HTML, CSS, JavaScript, dan framework modern.',
      'Membangun layanan back-end dengan Node.js / PHP Laravel termasuk pengembangan REST API.',
      'Mengelola dan mengintegrasikan database MySQL untuk penanganan data yang efisien dan scalable.'
    ]
  },
  {
    role: 'Cyber Analyst',
    company: 'Hacktoberfest',
    period: 'Okt 2024',
    points: [
      'Melakukan vulnerability scanning dan analisis keamanan website sebagai kontribusi etis.',
      'Mengidentifikasi dan melaporkan kerentanan seperti SQL Injection, XSS, dan misconfiguration.',
      'Menggunakan tools seperti OWASP ZAP dan Burp Suite untuk analisis dan pengujian.'
    ]
  },
  {
    role: 'Thesis Writing Services',
    company: 'Freelance',
    period: 'Jan 2025 - Sekarang',
    points: [
      'Menyusun proposal skripsi dan membuat kode program sesuai kebutuhan klien.'
    ]
  },
  {
    role: 'Front-End Developer',
    company: 'Freelance',
    period: 'Feb 2024 - Agu 2024',
    points: [
      'Merancang dan menulis eBook informatif sesuai kebutuhan website klien.',
      'Melakukan riset untuk memastikan akurasi data dan relevansi konten.',
      'Mendesain layout eBook dengan Canva / Adobe InDesign agar menarik dan mudah dibaca.'
    ]
  }
]

const technicalSkills = [
  'HTML & CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'PHP / Laravel',
  'MySQL',
  'Kotlin',
  'Kali Linux',
  'Vibe Coding (AI-assisted)',
  'Troubleshooting',
  'Operating Software'
]

const softSkills = [
  'Komunikasi yang baik',
  'Mampu bekerja dalam tim',
  'Kemampuan problem solving'
]

function CountUp({ target, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-card mb-16 scroll-mt-24"
    >
      <div className="block md:hidden mb-4 rounded-lg bg-red-600/90 text-white px-4 py-2 text-sm font-medium">DEBUG: About component mounted (mobile)</div>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <motion.div variants={fadeUp} className="max-w-full lg:max-w-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
            Tentang pekerjaan
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
            Saya membangun aplikasi yang menciptakan nilai nyata.
          </h2>
          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
            Sarjana Informatika dengan pengalaman di bidang technical support dan pengembangan sistem web. Berpengalaman dalam troubleshooting hardware dan software, instalasi sistem, serta memberikan solusi teknis kepada pengguna. Juga berpengalaman menguji perangkat komputer dan pengembangan game. Siap berkontribusi dan berkembang dalam lingkungan kerja kolaboratif.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-3xl border border-slate-200/70 bg-slate-50/90 p-6 dark:border-slate-800/70 dark:bg-slate-950/90"
            >
              <p className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
                {stat.text ? (
                  stat.text
                ) : (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-3 text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeUp} className="mt-12 border-t border-slate-200/70 pt-10 dark:border-slate-800/70">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">Pengalaman</p>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          Perjalanan dan pengalaman kerja saya.
        </h3>

        <div className="relative mt-8 space-y-8 before:absolute before:left-2 before:top-2 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 sm:before:left-2.5">
          {experiences.map((exp) => (
            <motion.div key={`${exp.role}-${exp.period}`} variants={fadeUp} className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-500 bg-white dark:bg-slate-950">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {exp.role}{' '}
                  <span className="font-normal text-slate-500 dark:text-slate-400">· {exp.company}</span>
                </h4>
                <span className="text-sm font-medium text-sky-600 dark:text-sky-300">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2 text-slate-600 dark:text-slate-300 leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-500/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 border-t border-slate-200/70 pt-10 dark:border-slate-800/70">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">Pendidikan</p>
        <div className="mt-6 rounded-3xl border border-slate-200/70 bg-slate-50/90 p-6 dark:border-slate-800/70 dark:bg-slate-950/90">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
              Universitas Mercu Buana Yogyakarta
            </h4>
            <span className="text-sm font-medium text-sky-600 dark:text-sky-300">Agu 2021 - Agu 2025</span>
          </div>
          <p className="mt-1 text-slate-600 dark:text-slate-300">S1 Informatika</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {['Pengembangan AI game', 'Godot Engine', 'Asset creation RPG', 'AI boss movement'].map((item) => (
              <li
                key={item}
                className="rounded-full bg-slate-200/80 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900/80 dark:text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 border-t border-slate-200/70 pt-10 dark:border-slate-800/70">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">Keahlian</p>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          Teknologi dan kemampuan yang saya kuasai.
        </h3>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Keahlian Teknis
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {technicalSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  className="rounded-full border border-slate-200/80 bg-slate-50/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Soft Skill
            </h4>
            <ul className="mt-4 space-y-3">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-950/90">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Sertifikasi
              </p>
              <p className="mt-1 font-medium text-slate-800 dark:text-slate-100">Microsoft Azure Basic</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
