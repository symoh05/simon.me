'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const circleRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let circleX = 0
    let circleY = 0
    let dotX = 0
    let dotY = 0
    let animationFrame: number

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      dotX = e.clientX
      dotY = e.clientY
    }

    const animate = () => {
      // Circle chases the dot with easing
      circleX += (dotX - circleX) * 0.15
      circleY += (dotY - circleY) * 0.15
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      
      animationFrame = requestAnimationFrame(animate)
    }

    // Detect hover on clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMouse)
    window.addEventListener('mouseover', handleMouseOver)
    animate()

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      {/* Dot - fast, follows cursor exactly */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transition: 'transform 0.05s linear',
          boxShadow: '0 0 4px rgba(255,255,255,0.5)'
        }}
      />
      
      {/* Circle - chases the dot with delay */}
      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[9998] transition-all duration-100"
        style={{
          width: isHovering ? '50px' : '32px',
          height: isHovering ? '50px' : '32px',
          border: `2px solid ${isHovering ? 'white' : 'rgba(255,255,255,0.6)'}`,
          borderRadius: '50%',
          transform: `translate(-20px, -20px)`,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          boxShadow: isHovering ? '0 0 15px rgba(255,255,255,0.3)' : 'none'
        }}
      />
    </>
  )
}