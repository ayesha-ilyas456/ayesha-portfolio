import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons'

const base =
  'group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-ink px-6 text-[15px] font-medium transition duration-300 hover:-translate-y-0.5'
const variants = {
  primary: 'bg-ink text-bg hover:border-accent hover:bg-accent hover:text-accent-ink',
  outline: 'hover:bg-ink hover:text-bg',
}

export default function Button({ to, href, onClick, type = 'button', variant = 'outline', arrow = null, children }) {
  const cls = `${base} ${variants[variant]}`
  const icon =
    arrow === 'down' ? <span aria-hidden="true">↓</span> : arrow === 'up-right' ? (
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    ) : null

  if (to) return <Link to={to} className={cls}>{children}{icon}</Link>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}{icon}
      </a>
    )
  }
  return <button type={type} onClick={onClick} className={cls}>{children}{icon}</button>
}
