import { useEffect, useRef } from 'react'

// Ring cursor: follows the pointer with easing, grows over links and buttons,
// and steps aside over text fields. Only active on mouse/trackpad devices.
export default function Cursor() {
  const outer = useRef(null)
  const inner = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const root = document.documentElement
    root.classList.add('has-cursor')

    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false
    const setMode = (m) => { if (inner.current) inner.current.dataset.mode = m }
    const setShown = (v) => {
      shown = v
      if (outer.current) outer.current.style.opacity = v ? '1' : '0'
      if (dot.current) dot.current.style.opacity = v ? '1' : '0'
    }

    const onMove = (e) => {
      x = e.clientX; y = e.clientY
      if (!shown) { rx = x; ry = y; setShown(true) }
      const el = e.target instanceof Element ? e.target : null
      if (!el) return
      if (el.closest('input,textarea')) setMode('text')
      else if (el.closest('a,button,[role="button"],summary,label,select')) setMode('hover')
      else setMode('default')
    }
    const onLeave = () => setShown(false)
    const onDown = () => setMode('down')

    const tick = () => {
      rx += (x - rx) * 0.2
      ry += (y - ry) * 0.2
      if (outer.current) outer.current.style.transform = `translate3d(${rx - 14}px, ${ry - 14}px, 0)`
      if (dot.current) dot.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onMove)
    return () => {
      cancelAnimationFrame(raf)
      root.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onMove)
    }
  }, [])

  return (
    <>
      <div ref={outer} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[300] opacity-0 transition-opacity duration-300">
        <div
          ref={inner}
          data-mode="default"
          className="h-7 w-7 rounded-full border border-accent/80 bg-bg/20 transition-[transform,background-color] duration-300 ease-out data-[mode=down]:scale-75 data-[mode=hover]:scale-[1.7] data-[mode=hover]:bg-accent/15 data-[mode=text]:scale-0"
        />
      </div>
      <div ref={dot} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[300] h-1 w-1 rounded-full bg-accent opacity-0" />
    </>
  )
}
