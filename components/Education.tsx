'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Keystone School of Engineering',
      location: 'Pune, India',
      date: 'Expected Graduation: 2026',
      status: 'In Progress',
      icon: '🎓',
    },
    {
      degree: 'Diploma in Computer Technology',
      institution: 'Bharati Vidyapeeth Jawaharlal Nehru Institute Of Technology',
      location: 'Pune, India',
      date: 'Graduated: 2023',
      status: 'Completed',
      icon: '📚',
    },
  ]

  return (
    <section id="education" className="section-padding relative">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-dark-700 rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-1">
                            <GraduationCap size={16} />
                            <span className="text-sm">{item.institution}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      item.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-primary-400 font-semibold">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">Academic Focus</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about emerging technologies and dedicated to achieving excellence in every endeavor. 
              A quick learner with a competitive spirit, excellent teamwork abilities, and a commitment to continuous growth. 
              Seeking opportunities to contribute technical expertise and innovative thinking to drive organizational success 
              while advancing personal and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 