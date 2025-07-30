'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Edunet-IBM Internship',
      role: 'Intern Trainee',
      location: 'Pune, Maharashtra',
      date: 'June 2024 – July 2024',
      company: 'IBM',
      achievements: [
        'Developed AI and machine learning models using IBM Cloud Platform (Watson Studio) for healthcare applications, achieving over 90% accuracy in predicting heart disease risk factors across diverse patient datasets.',
        'Developed and launched a user-friendly chatbot for the college admission process, improving response times by 60% and providing prospective students with immediate answers to frequently asked questions.',
        'Gained hands-on experience with cloud-based AI/ML tools and frameworks, ensuring accurate model predictions and user-friendly chatbot deployment.',
      ],
    },
    {
      title: 'Web Development Intern',
      role: 'Intern Trainee',
      location: 'Pune, Maharashtra',
      date: 'Jan 2025 – Feb 2025',
      company: 'Web Development Company',
      achievements: [
        'Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile optimization.',
        'Collaborated with a team to design and implement web components, enhancing site performance and user experience.',
        'Used GitHub for version control and GitHub Pages for project deployment.',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-dark-800 relative">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10 hidden lg:block" />

                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-700 rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            <span className="text-sm">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary-400 font-semibold">
                          <Calendar size={16} />
                          <span>{experience.date}</span>
                        </div>
                      </div>
                      <div className="bg-primary-500/20 px-3 py-1 rounded-full">
                        <span className="text-primary-400 text-sm font-medium">
                          {experience.role}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 