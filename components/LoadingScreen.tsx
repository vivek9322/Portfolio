'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Database, Globe } from 'lucide-react'

export default function LoadingScreen() {
  const icons = [Code, Cpu, Database, Globe]
  
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Vivek Kakade
          </h1>
          <p className="text-xl text-gray-400">Loading Portfolio...</p>
        </motion.div>
        
        <div className="flex justify-center space-x-4">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-primary-500"
            >
              <Icon size={32} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
        />
      </div>
    </div>
  )
} 