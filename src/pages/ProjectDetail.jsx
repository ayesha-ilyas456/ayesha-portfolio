import { Link, useParams } from 'react-router-dom'
import ProjectVisual, { hasVisual } from '../components/ProjectVisual'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { ArrowUpRight } from '../components/Icons'
import { projects } from '../data/content'
import usePageTitle from '../hooks/usePageTitle'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  usePageTitle(project ? project.title : 'Project not found')
  if (!project) return <NotFound />
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="mx-auto max-w-page px-5 md:px-10 lg:px-[72px]">
      <header className="pb-12 pt-14 md:pt-[90px] md:pb-16">
        <SectionLabel number={project.number} right={project.year}>{project.kind}</SectionLabel>
        <h1 className="display mt-12 max-w-[18ch] text-[clamp(2.4rem,6.2vw,6rem)] leading-[1.05] md:mt-20">{project.title}</h1>
        <p className="mt-7 max-w-[56ch] text-lg text-mute md:text-xl">{project.blurb}</p>
        {project.note && <p className="label mt-6">{project.note}</p>}
      </header>

      {hasVisual(project) && (
        <div className="group"><ProjectVisual project={project} aspect="aspect-[16/10]" /></div>
      )}

      <div className={`grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20 ${hasVisual(project) ? 'py-16 md:py-24' : 'border-t border-ink/10 py-12 md:py-16'}`}>
        <Reveal>
          <p className="label mb-5">Stack and focus</p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-ink/10 px-3.5 py-2 text-xs">{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          {project.points.length > 0 && (
            <>
              <p className="label mb-5">What it covers</p>
              <ul className="mb-10 space-y-3">
                {project.points.map((pt) => (
                  <li key={pt} className="relative pl-7 text-lg text-mute">
                    <span className="absolute left-0 top-1 text-sm text-accent" aria-hidden="true">✱</span>{pt}
                  </li>
                ))}
              </ul>
            </>
          )}
          {project.sites.length > 0 && (
            <>
              <p className="label mb-5">Live sites</p>
              <ul className="border-t border-ink/10">
                {project.sites.map((s) => (
                  <li key={s}>
                    <a href={`https://${s}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-ink/10 py-4 text-xl transition-all duration-300 hover:pl-2.5 hover:text-accent">
                      {s}<ArrowUpRight className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Reveal>
      </div>

      <Link to={`/projects/${next.slug}`} className="group block border-t border-ink/10 py-12 md:py-16">
        <p className="label mb-4">Next project</p>
        <p className="display flex items-center justify-between gap-6 text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] transition-colors group-hover:text-accent">
          {next.title}<ArrowUpRight className="h-8 w-8 shrink-0 md:h-12 md:w-12" />
        </p>
      </Link>
    </div>
  )
}