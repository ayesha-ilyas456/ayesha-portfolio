import { Link } from 'react-router-dom'
import ProjectVisual, { hasVisual } from './ProjectVisual'
import { ArrowUpRight } from './Icons'

// Order follows the reference card: number, title, description, year with arrow, then the image.
export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={`group block ${hasVisual(project) ? '' : 'border-t border-ink/10 pt-8'}`}>
      <div className="flex items-start justify-between gap-6">
        <div className="flex gap-5 md:gap-12">
          <span className="label pt-2 md:pt-4">{project.number}</span>
          <div>
            <h3 className="display text-[clamp(2rem,4.6vw,4rem)] leading-[1.08]">{project.title}</h3>
            <p className="mt-4 max-w-[54ch] text-mute">{project.blurb}</p>
          </div>
        </div>
        <span className="label flex items-center gap-2 whitespace-nowrap pt-3 transition-colors group-hover:text-accent md:pt-5">
          {project.year}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
      {hasVisual(project) && (
        <div className="mt-8">
          <ProjectVisual project={project} />
        </div>
      )}
    </Link>
  )
}
