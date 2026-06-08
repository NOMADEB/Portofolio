import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { fadeUp, staggerContainer } from './AnimatedSection'

const projects = [
  {
    title: 'SanurPro',
    description: 'Website perusahaan PT. SanurPro IndoTeknologi yang saya kembangkan secara fullstack — front-end responsif dan back-end dengan integrasi API.',
    tags: ['React', 'Node.js', 'Laravel', 'MySQL'],
    link: 'https://sanurpro.co.id'
  },
  {
    title: 'Dashboard Penjualan Modern',
    description: 'Aplikasi dashboard analytics dengan grafik interaktif, notifikasi real-time, dan filter data untuk tim bisnis.',
    tags: ['React', 'Tailwind', 'API', 'Responsive']
  },
  {
    title: 'E-commerce Fullstack',
    description: 'Platform toko online lengkap dengan manajemen produk, keranjang belanja, dan integrasi pembayaran.',
    tags: ['React', 'Node.js', 'Express', 'MySQL']
  }
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="section-card mb-16 scroll-mt-24"
    >
      <motion.div
        variants={fadeUp}
        className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
            Proyek unggulan
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Contoh pekerjaan saya yang siap dilihat HRD.
          </h2>
        </div>
        <p className="max-w-full text-slate-500 dark:text-slate-400 sm:max-w-md sm:text-right">
          Tiap proyek dirancang agar tampilan modern dan alur pengguna jelas, dengan stabilitas back-end yang kuat.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const isLink = Boolean(project.link)
          const Card = isLink ? motion.a : motion.article
          const linkProps = isLink
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Card
              key={project.title}
              {...linkProps}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="group relative block overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50/90 p-6 shadow-soft transition-shadow hover:shadow-glow dark:border-slate-700/70 dark:bg-slate-950/90"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:from-sky-500/10 group-hover:to-indigo-500/10 group-hover:opacity-100" />
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
                  {isLink ? 'Live' : 'Proyek'}
                </span>
                <FiArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500 dark:group-hover:text-sky-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-200/80 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900/80 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {isLink && (
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky-600 dark:text-sky-300">
                  Kunjungi situs <FiArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </Card>
          )
        })}
      </div>
    </motion.section>
  )
}
