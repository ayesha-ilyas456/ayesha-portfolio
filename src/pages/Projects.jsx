import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/content'
import usePageTitle from '../hooks/usePageTitle'

export default function Projects() {
  usePageTitle('Work')
  return (
    <div className="mx-auto max-w-page px-5 md:px-10 lg:px-[72px]">
      <header className="pb-14 pt-14 md:pt-[90px] md:pb-24">
        <SectionLabel number="02" right={`${projects.length} projects`}>All work · 2025—2026</SectionLabel>
        <h1 className="display mt-12 text-[clamp(2.6rem,7.7vw,8rem)] leading-[1.05] md:mt-20">
          Selected <em>work.</em>
        </h1>
        <p className="mt-7 max-w-[56ch] text-lg text-mute md:text-xl">
          Production Laravel, Yii2 and Core PHP projects across education, e-commerce and hospitality, plus my final year project.
        </p>
      </header>
      <div className="flex flex-col gap-20 pb-16 md:gap-28 md:pb-24">
        {projects.map((p) => (
          <Reveal key={p.id}><ProjectCard project={p} /></Reveal>
        ))}
      </div>
    </div>
  )
}
