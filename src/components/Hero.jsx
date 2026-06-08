import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiJavascript
} from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, staggerContainer } from '../components/AnimatedSection'
import fotoSaya from '../../image/foto.jpg'

const technologies = [
  { name: 'React.js', icon: SiReact, color: 'text-sky-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-slate-400' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' }
]

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 px-6 py-12 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/15" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-2xl">
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-600 dark:text-sky-300"
          >
            Fullstack Web Developer • ReactJS • UI Modern
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Halo, saya Reka Adrian, developer fullstack web dengan pengalaman membangun aplikasi modern untuk bisnis dan produk digital.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-full text-slate-600 dark:text-slate-300 lg:max-w-xl leading-8"
          >
            Saya menciptakan antarmuka bersih, responsif, dan interaktif menggunakan React.js, sambil menghubungkan back-end untuk alur kerja yang andal dan mudah dikembangkan.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link to="/proyek" className="btn-primary w-full text-center sm:w-auto">
              Lihat Proyek <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/6283171600344"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center sm:w-auto"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> Hubungi Saya
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-4 shadow-soft dark:border-slate-800/80 dark:bg-slate-950/80"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
              Teknologi yang saya gunakan
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((tech) => (
                <motion.span
                  key={tech.name}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  className="technology-badge"
                >
                  <span className="technology-icon">
                    <tech.icon className={`h-5 w-5 ${tech.color}`} />
                  </span>
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex w-full justify-center lg:w-auto"
        >
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 blur-2xl" />
            {/* Foto profil */}
            <img
              src={fotoSaya}
              alt="Reka Adrian"
              className="h-64 w-64 rounded-full border-4 border-white/80 object-cover shadow-soft dark:border-slate-800/80 sm:h-72 sm:w-72 md:h-80 md:w-80"
            />
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-soft dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-slate-200"
            >
              Reka Adrian
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
