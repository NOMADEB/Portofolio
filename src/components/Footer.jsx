import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: FaWhatsapp, href: 'https://wa.me/6283171600344', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:Adrianreka71@gmail.com', label: 'Email' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/reka-adrian-4479ab292?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/NOMADEB', label: 'Github' }
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 text-center shadow-soft dark:border-slate-700/70 dark:bg-slate-900/80"
    >
      <div className="flex justify-center gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 text-slate-500 transition-all hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700/70 dark:text-slate-400 dark:hover:text-sky-300"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="mt-6 text-slate-500 dark:text-slate-400">
        © 2026 Reka Adrian — Fullstack Web Developer.
      </p>
    </motion.footer>
  )
}
