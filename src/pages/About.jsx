import Button from '../components/Button'
import Portrait from '../components/Portrait'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { certifications, education, experience, profile, skillGroups } from '../data/content'
import usePageTitle from '../hooks/usePageTitle'

function Row({ label, children, last = false }) {
  return (
    <Reveal as="section" className={`grid gap-4 border-t border-ink/10 py-9 md:grid-cols-[200px_1fr] md:gap-14 md:py-12 ${last ? 'border-b' : ''}`}>
      <h2 className="label pt-2 text-base font-medium text-[#6a4fe6]">{label}</h2>
      <div>{children}</div>
    </Reveal>
  )
}

const bullet = (pt) => (
  <li key={pt} className="relative pl-6 text-mute">
    <span className="absolute left-0 top-0.5 text-sm text-accent" aria-hidden="true">✱</span>{pt}
  </li>
)

export default function About() {
  usePageTitle('About')
  return (
    <div className="mx-auto max-w-page px-5 md:px-10 lg:px-[72px]">
      <header className="pb-12 pt-14 md:pt-[90px] md:pb-20">
        <SectionLabel number="03" right={profile.location}>About — bio + experience</SectionLabel>
        <h1 className="display mt-12 text-[clamp(2.6rem,7.7vw,8rem)] leading-[1.05] md:mt-20">
          Backend, <em>end to end.</em>
        </h1>
      </header>

      <div className="mb-16 grid items-center gap-10 md:mb-24 md:grid-cols-[1.2fr_.8fr] md:gap-20">
        <Reveal>
          <p className="display max-w-[30ch] text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.2]">
            BSCS graduate (2025) and backend developer at Geekinn Private Limited.
          </p>
          <p className="mt-6 max-w-[56ch] text-mute">{profile.summary}</p>
        </Reveal>
        <Reveal delay={120}><Portrait caption={profile.location} /></Reveal>
      </div>

      <Row label="Experience">
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.role + job.company}>
              <h3 className="display text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.1]">{job.role}</h3>
              <p className="mb-4 mt-2 text-[15px] text-mute">{job.company} · {job.place} · {job.period}</p>
              <ul className="space-y-2.5">{job.points.map(bullet)}</ul>
            </div>
          ))}
        </div>
      </Row>

      <Row label="Education">
        <h3 className="display text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.1]">{education.degree}</h3>
        <p className="mb-3 mt-2 text-[15px] text-mute">{education.school} · {education.period}</p>
        <p className="text-mute">Relevant: {education.relevant}.</p>
      </Row>

      <Row label="Certifications">
        <ul className="space-y-4">
          {certifications.map((c) => (
            <li key={c.title} className="border-t border-ink/10 pt-4 first:border-t-0 first:pt-0">
              <p className="display text-[clamp(1.6rem,2.8vw,2.5rem)] font-bold leading-[1.1] text-ink">{c.title}</p>
              <p className="text-[15px] text-mute">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="Skills">
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label} className="border-t border-ink/10 py-4">
              <dt className="display mb-3 text-[clamp(1.6rem,2.8vw,2.5rem)] font-bold leading-[1.1] text-ink">{g.label}</dt>
              <dd className="text-lg">{g.items}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label="Elsewhere" last>
        <div className="flex flex-wrap gap-3">
          <Button href={profile.github} arrow="up-right">GitHub</Button>
          <Button href={profile.linkedin} arrow="up-right">LinkedIn</Button>
        </div>
      </Row>
      <div className="h-16 md:h-24" />
    </div>
  )
}
