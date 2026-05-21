'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    cursor.style.width = '12px'
    cursor.style.height = '12px'
    cursor.style.background = '#0ff'
    cursor.style.borderRadius = '0px'
    cursor.style.position = 'fixed'
    cursor.style.pointerEvents = 'none'
    cursor.style.zIndex = '999'
    cursor.style.mixBlendMode = 'difference'
    cursor.style.transform = 'translate(-50%, -50%)'
    cursor.style.transition = '0.05s linear'
    cursor.style.boxShadow = '0 0 8px #0ff'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}