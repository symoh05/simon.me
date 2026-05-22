'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  })

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        x: directions[direction].x,
        y: directions[direction].y
      }}
      animate={inView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}