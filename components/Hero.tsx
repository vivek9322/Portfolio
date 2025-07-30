'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const floatingElements = [
    { icon: '⚡', delay: 0 },
    { icon: '🚀', delay: 0.5 },
    { icon: '💻', delay: 1 },
    { icon: '🎯', delay: 1.5 },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-primary-600/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: element.delay, duration: 0.8 }}
          className="absolute text-4xl animate-float"
          style={{
            left: `${20 + index * 20}%`,
            top: `${20 + (index % 2) * 60}%`,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div ref={ref} className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Vivek Sanjay{' '}
            <span className="gradient-text">Kakade</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-primary-400"
          >
            <TypeAnimation
              sequence={[
                'Computer Engineering Student',
                2000,
                'Software Developer',
                2000,
                'AI/ML Enthusiast',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Motivated and ambitious Computer Engineering student with a strong foundation in software development, 
            problem-solving, and system design. Currently pursuing a degree at Keystone School of Engineering, 
            adept at applying theoretical knowledge to practical projects and real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/vivek-kakade"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/vivek9322"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:kakadevivek62@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-all duration-300"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 