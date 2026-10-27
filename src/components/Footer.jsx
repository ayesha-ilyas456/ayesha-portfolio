import { Link } from 'react-router-dom'
import { profile, site } from '../data/content'

export default function Footer() {
  const link = 'transition-colors hover:text-ink'
  return (
    <footer className="mt-5 border-t border-ink/10 pb-11 pt-9 text-sm text-mute">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-5 px-5 md:px-10 lg:px-[72px]">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-[22px]">
          <Link className={link} to="/projects">Work</Link>
          <Link className={link} to="/about">About</Link>
          <Link className={link} to="/contact">Contact</Link>
          <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </nav>
        <p className="label">{site.builtWith}</p>
      </div>
    </footer>
  )
}
