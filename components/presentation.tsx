'use client'

import { useCallback, useEffect, useState } from 'react'
import { SLIDES } from './slides'

export function Presentation() {
  const [idx, setIdx] = useState(0)
  const total = SLIDES.length

  const go = useCallback(
    (n: number) => {
      setIdx((prev) => {
        const next = Math.max(0, Math.min(total - 1, n))
        return next
      })
    },
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        setIdx((p) => Math.min(total - 1, p + 1))
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        setIdx((p) => Math.max(0, p - 1))
      } else if (e.key === 'Home') {
        setIdx(0)
      } else if (e.key === 'End') {
        setIdx(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  // touch swipe
  useEffect(() => {
    let touchX: number | null = null
    const onStart = (e: TouchEvent) => {
      touchX = e.touches[0].clientX
    }
    const onEnd = (e: TouchEvent) => {
      if (touchX === null) return
      const dx = e.changedTouches[0].clientX - touchX
      if (Math.abs(dx) > 50) {
        setIdx((p) =>
          dx < 0 ? Math.min(total - 1, p + 1) : Math.max(0, p - 1),
        )
      }
      touchX = null
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [total])

  const current = SLIDES[idx]

  return (
    <div className="deck-root">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      <div className="topbar">
        <span className="section-label">{current.section}</span>
        <span className="slide-counter">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <nav className="dot-rail" aria-label="Slide navigation">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            className={`dot${i === idx ? ' on' : ''}`}
            aria-label={`Go to slide ${i + 1}: ${s.section}`}
            aria-current={i === idx}
            onClick={() => go(i)}
          />
        ))}
      </nav>

      <main className="stage">
        <div className="deck">
          {SLIDES.map((s, i) => {
            let pos = 'far'
            if (i === idx) pos = 'active'
            else if (i === idx - 1) pos = 'prev'
            else if (i === idx + 1) pos = 'next'
            return (
              <section
                key={i}
                className={`slide ${pos}`}
                data-tone={s.tone}
                aria-hidden={i !== idx}
              >
                {s.content}
              </section>
            )
          })}
        </div>
      </main>

      <div className="nav-controls">
        <button
          className="nav-btn"
          aria-label="Previous slide"
          disabled={idx === 0}
          onClick={() => go(idx - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="nav-btn"
          aria-label="Next slide"
          disabled={idx === total - 1}
          onClick={() => go(idx + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
