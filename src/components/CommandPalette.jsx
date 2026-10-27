import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nav, profile, projects } from '../data/content'
import { useTheme } from '../hooks/useTheme'
import { useToast } from '../hooks/useToast'

export default function CommandPalette({ open, onClose }) {
  const navigate = useNavigate()
  const { toggle } = useTheme()
  const { copyEmail } = useToast()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const items = useMemo(
    () => [
      ...nav.map((l) => ({ group: 'Pages', label: l.label === 'Work' ? 'All work' : l.label, desc: l.label === 'Work' ? null : l.desc, run: () => navigate(l.to) })),
      ...projects.map((p) => ({ group: 'Projects', label: p.title, desc: `${p.kind} · ${p.year}`, run: () => navigate(`/projects/${p.slug}`) })),
      { group: 'Actions', label: 'Toggle theme', run: toggle },
      { group: 'Actions', label: 'Copy email address', run: copyEmail },
      { group: 'Actions', label: 'Open GitHub', run: () => window.open(profile.github, '_blank', 'noopener') },
      { group: 'Actions', label: 'Open LinkedIn', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
    ],
    [navigate, toggle, copyEmail],
  )

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? items.filter((i) => `${i.label} ${i.group}`.toLowerCase().includes(q)) : items
  }, [items, query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      const t = setTimeout(() => inputRef.current?.focus(), 20)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => setSelected(0), [query])
  useEffect(() => {
    listRef.current?.querySelector('[data-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  if (!open) return null

  const run = (item) => {
    if (!item) return
    onClose()
    item.run()
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((s) => (s + 1) % Math.max(shown.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((s) => (s - 1 + shown.length) % Math.max(shown.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      run(shown[selected])
    }
  }

  let lastGroup = ''
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/45 px-4 pb-4 pt-[calc(env(safe-area-inset-top,0px)+12vh)] backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
    >
      <div className="w-full max-w-xl animate-pop overflow-hidden rounded-2xl border border-ink/10 bg-bg shadow-2xl" onKeyDown={onKeyDown}>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, projects and actions"
          className="w-full border-b border-ink/10 bg-transparent px-5 py-5 text-lg text-ink outline-none placeholder:text-mute"
          aria-label="Search"
        />
        <div ref={listRef} className="max-h-[min(52vh,420px)] overflow-auto p-2">
          {shown.length === 0 && <p className="p-6 text-center text-mute">Nothing matches “{query}”. Try a page or project name.</p>}
          {shown.map((item, n) => {
            const heading = item.group !== lastGroup ? <p className="px-3.5 pb-1.5 pt-3 text-xs font-medium text-mute">{item.group}</p> : null
            lastGroup = item.group
            return (
              <div key={item.group + item.label}>
                {heading}
                <button
                  type="button"
                  data-selected={n === selected}
                  onMouseEnter={() => setSelected(n)}
                  onClick={() => run(item)}
                  className={`flex w-full items-center justify-between rounded-lg px-3.5 py-3 text-left text-[15.5px] ${n === selected ? 'bg-bg2' : ''}`}
                >
                  <span className="shrink-0">{item.label}</span>
                  {item.desc && <span className="ml-3 truncate text-xs text-mute">{item.desc}</span>}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
