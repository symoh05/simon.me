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
    threshold: 0.15,
    rootMargin: '-30px 0px -30px 0px'
  })

  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        x: directions[direction].x,
        y: directions[direction].y,
        scale: 0.95
      }}
      animate={inView ? { 
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      } : {}}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}