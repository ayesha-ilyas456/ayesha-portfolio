// Placeholder until real screenshots exist. Shows each project's own live domains inside
// simple browser frames. To use a real screenshot, add `image: '/projects/name.png'` in content.js.
import { site } from '../data/content'

export const hasVisual = (project) => Boolean(project.image) || site.showPlaceholders

function Frame({ url, className }) {
  return (
    <div className={`absolute overflow-hidden rounded-lg border border-ink/10 bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,.55)] transition-transform duration-700 ease-out ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2.5">
        <i className="h-2 w-2 rounded-full bg-ink/20" />
        <i className="h-2 w-2 rounded-full bg-ink/20" />
        <i className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded bg-ink/5 px-2.5 py-1 text-[10px] font-normal text-mute">{url}</span>
      </div>
      <div className="space-y-2.5 p-4">
        <div className="h-2.5 w-2/5 rounded bg-ink/20" />
        <div className="h-2 w-4/5 rounded bg-ink/10" />
        <div className="h-2 w-3/5 rounded bg-ink/10" />
        <div className="grid grid-cols-3 gap-2 pt-1.5">
          <div className="h-10 rounded bg-ink/5 md:h-14" />
          <div className="h-10 rounded bg-accent/20 md:h-14" />
          <div className="h-10 rounded bg-ink/5 md:h-14" />
        </div>
      </div>
    </div>
  )
}

const layouts = {
  1: ['left-[12%] top-[14%] w-[76%] group-hover:-translate-y-2'],
  2: ['left-[7%] top-[12%] w-[56%] group-hover:-translate-y-2', 'left-[36%] top-[38%] w-[56%] group-hover:translate-y-2'],
  3: [
    'left-[5%] top-[10%] w-[52%] group-hover:-translate-y-2',
    'left-[28%] top-[30%] w-[52%] group-hover:translate-y-1',
    'left-[44%] top-[50%] w-[50%] group-hover:translate-y-3',
  ],
}

export default function ProjectVisual({ project, aspect = 'aspect-[16/10]' }) {
  if (!hasVisual(project)) return null
  const urls = project.sites.length ? project.sites.slice(0, 3) : [project.title.toLowerCase()]
  const pos = layouts[urls.length]

  return (
    <div className={`relative isolate overflow-hidden rounded-xl border border-ink/10 bg-bg2 ${aspect}`}>
      {project.image ? (
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgb(var(--accent)/.22),transparent_60%),radial-gradient(ellipse_at_0%_100%,rgb(var(--accent)/.08),transparent_55%)]" />
          {urls.map((u, i) => (
            <Frame key={u} url={u} className={pos[i]} />
          ))}
        </>
      )}
    </div>
  )
}
