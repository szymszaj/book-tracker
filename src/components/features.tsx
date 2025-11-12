'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BookOpen,
  BarChart3,
  Target,
  Calendar,
  Trophy,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Track Your Reading',
    description:
      'Log every book you read with detailed information including progress, ratings, and notes.',
  },
  {
    icon: BarChart3,
    title: 'Beautiful Analytics',
    description:
      'Visualize your reading habits with interactive charts and meaningful insights.',
  },
  {
    icon: Target,
    title: 'Set Goals',
    description:
      'Create reading goals and track your progress with motivating milestones.',
  },
  {
    icon: Calendar,
    title: 'Reading Streaks',
    description:
      'Build consistency with daily reading streaks and activity tracking.',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description:
      'Earn badges and achievements as you reach reading milestones.',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description:
      'Monitor your reading time and optimize your reading schedule.',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              Read More
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Powerful features designed to help you build a consistent reading
            habit and track your progress.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
