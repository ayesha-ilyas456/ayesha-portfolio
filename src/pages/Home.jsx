import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import Portrait from '../components/Portrait'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { focusTicker, profile, projects, site, skillTicker } from '../data/content'
import usePageTitle from '../hooks/usePageTitle'

const textLink = 'border-b border-current pb-1 text-ink transition-colors hover:text-accent'

export default function Home() {
  usePageTitle('')

  return (
    <>
      {/* N° 01 · Index */}
      <section className="mx-auto max-w-page px-5 md:px-10 lg:px-[72px]">
        <div className="pt-14 md:pt-[90px]">
          <SectionLabel number="01" right={`${site.issue} · ${profile.location}`}>Index</SectionLabel>
        </div>
        <div className="pb-16 pt-14 md:pb-28 md:pt-[88px]">
          <h1
            className="display text-[clamp(2.6rem,7.7vw,8rem)] leading-[1.05] tracking-[-0.02em]"
            aria-label="I build scalable backend systems that run in production."
          >
            <span className="rise"><span style={{ '--i': 0 }}>I build <em>scalable</em></span></span>
            <span className="rise"><span style={{ '--i': 1 }}>backend systems that</span></span>
            <span className="rise"><span style={{ '--i': 2 }}><em>run in production.</em></span></span>
          </h1>

          <div className="mt-12 grid items-end gap-8 md:mt-20 md:grid-cols-2 md:gap-14">
            <Reveal as="p" className="max-w-[54ch] text-lg text-mute md:text-xl">
              <strong className="text-ink">{profile.name}</strong> — PHP Laravel backend developer. {profile.summary}
            </Reveal>
            <Reveal delay={100} className="flex flex-wrap gap-3 md:justify-end">
              <Button to="/projects" variant="primary" arrow="down">Selected work</Button>
              <Button to="/contact">Get in touch</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* N° 02 · Selected work */}
      <section className="mx-auto max-w-page px-5 py-16 md:px-10 md:py-24 lg:px-[72px]" aria-label="Selected work">
        <Reveal className="mb-12 md:mb-16">
          <SectionLabel
            number="02"
            right={<Link to="/projects" className="transition-colors hover:text-accent">All work →</Link>}
          >
            Selected work · 2025—2026
          </SectionLabel>
        </Reveal>
        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* N° 03 · About */}
      <section className="mx-auto max-w-page px-5 py-16 md:px-10 md:py-24 lg:px-[72px]" aria-label="About">
        <Reveal><SectionLabel number="03">About</SectionLabel></Reveal>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.2fr_.8fr] md:gap-20">
          <Reveal>
            <blockquote className="display text-[clamp(1.6rem,3.4vw,3.2rem)] leading-[1.15]">“{profile.quote}”</blockquote>
            <Link to="/about" className={`${textLink} mt-9 inline-block text-sm`}>More about me ↗</Link>
          </Reveal>
          <Reveal delay={120}>
            <Portrait caption="Backend developer · Geekinn" />
          </Reveal>
        </div>
      </section>

      {/* Skills and focus marquees */}
      <section className="mt-8" aria-label="Skills and focus areas">
        <Marquee items={skillTicker} variant="names" />
        <div className="-mt-px">
          <Marquee items={focusTicker} variant="tags" reverse />
        </div>
      </section>

      {/* N° 04 · Contact */}
      <section className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-32 lg:px-[72px]" aria-label="Contact">
        <Reveal><SectionLabel number="04">Let's talk</SectionLabel></Reveal>
        <Reveal as="h2" className="display mb-8 mt-12 max-w-[16ch] text-[clamp(2.5rem,7.7vw,7.5rem)] leading-[1.05]">
          Need a backend that <em>holds up?</em>
        </Reveal>
        <Reveal as="p" className="mb-10 max-w-[50ch] text-mute">
          Have a Laravel or PHP project in mind? Tell me about it and I will get back to you.
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          <Button to="/contact" variant="primary" arrow="up-right">Get in touch</Button>
          <Button href={`mailto:${profile.email}`}>Or email me directly</Button>
        </Reveal>
      </section>
    </>
  )
}
