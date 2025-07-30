'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vivek-kakade',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/vivek9322',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:kakadevivek62@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container-max px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Vivek Sanjay Kakade
            </h3>
            <p className="text-gray-400 text-sm">
              Computer Engineering Student & Software Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Vivek Sanjay Kakade. All Rights Reserved.
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> using Next.js
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 