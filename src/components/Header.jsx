import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, profile } from '../data/content'
import { useTheme } from '../hooks/useTheme'
import { Moon, Sun } from './Icons'

export default function Header({ onOpenPalette }) {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const themeLabel = theme === 'dark' ? 'Light theme' : 'Dark theme'

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 md:px-10 lg:px-[72px]">
          <Link to="/" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
            <span className="text-[22px] font-normal leading-none tracking-[-0.01em]">{profile.name}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="label hidden sm:inline">Backend developer</span>
          </Link>

          <nav className="hidden gap-8 md:flex" aria-label="Primary">
            {nav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `relative py-2 text-[14px] font-normal transition-colors after:absolute after:-bottom-px after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 ${
                    isActive ? 'text-ink after:scale-x-100' : 'text-mute after:scale-x-0'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenPalette}
              className="hidden h-7 items-center rounded-md border border-ink/10 bg-ink/5 px-2.5 text-[11px] font-normal tracking-wide text-mute transition hover:border-ink/30 hover:text-ink md:inline-flex"
              aria-label="Open command menu"
            >
              ⌘ K
            </button>
            <button
              type="button"
              onClick={toggle}
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-ink/5 text-ink/80 transition hover:border-ink/30 hover:text-ink"
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 items-center rounded-full border border-ink/10 bg-ink/5 px-4 text-[13px] font-normal text-mute transition hover:text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: backdrop-filter would otherwise trap this fixed overlay. */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-bg px-5 pb-10 pt-[calc(env(safe-area-inset-top,0px)+96px)] transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] md:hidden ${
          open ? 'visible translate-y-0' : 'invisible -translate-y-full'
        }`}
      >
        <nav aria-label="Mobile">
          {nav.map((l, i) => (
            <Link key={l.to} to={l.to} className="flex items-baseline justify-between border-b border-ink/10 py-3 text-[clamp(2.25rem,10vw,3.5rem)] font-light leading-[1.1]">
              {l.label}
              <span className="label">0{i + 1}</span>
            </Link>
          ))}
        </nav>
        <button type="button" onClick={toggle} className="label mt-8 self-start">{themeLabel}</button>
      </div>
    </>
  )
}
