import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, staggerContainer } from './AnimatedSection'

const contactLinks = [
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+62 831-7160-0344', href: 'https://wa.me/6283171600344' },
  { icon: FiMail, label: 'Email', value: 'Adrianreka71@gmail.com', href: 'mailto:Adrianreka71@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/reka-adrian-4479ab292', href: 'https://linkedin.com/in/reka-adrian-4479ab292' },
  { icon: FiGithub, label: 'Github', value: 'github.com/NOMADEB', href: 'https://github.com/NOMADEB' }
]

const topics = [
  'Proyek website fullstack',
  'Kolaborasi antar tim',
  'Desain UI / UX interaktif'
]

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-card mb-16 scroll-mt-24"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">Ayo bicara</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Saya siap bekerja pada proyek baru atau berdiskusi kebutuhan tim Anda.
          </h2>
          <p className="mt-6 max-w-full sm:max-w-xl text-slate-600 dark:text-slate-300 leading-8">
            Jika Anda mencari developer yang mampu menangani front-end React modern dan integrasi back-end, silakan hubungi saya untuk presentasi portofolio lengkap dan kasus nyata.
          </p>
          <div className="mt-8 space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 transition-transform group-hover:scale-110 dark:text-sky-300">
                  <link.icon className="h-5 w-5" />
                </span>
                <span className="break-words">
                  <strong className="text-slate-800 dark:text-slate-100">{link.label}:</strong> {link.value}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="rounded-[2rem] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-950/90"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Mulai diskusi</p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Pilih topik:</h3>
              <ul className="mt-3 space-y-3 text-slate-500 dark:text-slate-400">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/6283171600344"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> Chat via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
