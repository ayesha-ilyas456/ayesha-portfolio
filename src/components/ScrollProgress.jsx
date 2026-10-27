import { useEffect, useRef } from 'react'

// Thin accent line along the top edge that fills as the page scrolls.
export default function ScrollProgress() {
  const bar = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(el.scrollTop / max, 1) : 0})`
    }
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null
    ro?.observe(document.body)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      ro?.disconnect()
    }
  }, [])

  return <div ref={bar} aria-hidden="true" style={{ transform: 'scaleX(0)' }} className="pointer-events-none fixed left-0 top-0 z-[90] h-0.5 w-full origin-left bg-accent" />
}
