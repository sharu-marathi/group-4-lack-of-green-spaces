'use client'

import { useRef } from 'react'

const LAYERS = [
  { bg: '#8fbf7f', z: 88 },
  { bg: '#5c8168', z: 66 },
  { bg: '#4a3323', z: 44 },
  { bg: '#6b4a30', z: 22 },
  { bg: '#7c5738', z: 0 },
  { bg: '#c9a06a', z: -22 },
]

export function SolutionTile() {
  const ref = useRef<HTMLDivElement>(null)
  const base = { x: 58, z: -38 }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${base.x - py * 14}deg) rotateZ(${base.z + px * 14}deg)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `rotateX(${base.x}deg) rotateZ(${base.z}deg)`
  }

  return (
    <div className="tile3d-wrap" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="tile3d-group" ref={ref}>
        {LAYERS.map((l, i) => (
          <div
            key={i}
            className="layer"
            style={{ background: l.bg, transform: `translateZ(${l.z}px)` }}
          />
        ))}
      </div>
    </div>
  )
}
