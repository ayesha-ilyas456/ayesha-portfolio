import { useState } from 'react'
import Button from '../components/Button'
import { ArrowUpRight } from '../components/Icons'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { profile } from '../data/content'
import { useToast } from '../hooks/useToast'
import usePageTitle from '../hooks/usePageTitle'

const field =
  'w-full border-b border-ink/25 bg-transparent py-3.5 text-lg text-ink outline-none transition-colors placeholder:text-mute focus:border-ink'

export default function Contact() {
  usePageTitle('Contact')
  const { copyEmail } = useToast()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend needed: the form opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const rows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { label: 'GitHub', value: profile.githubHandle, href: profile.github },
    { label: 'LinkedIn', value: 'ayesha-ilyas', href: profile.linkedin },
    { label: 'Location', value: profile.location },
  ]
  return (
    <div className="mx-auto max-w-page px-5 md:px-10 lg:px-[72px]">
      <header className="pb-12 pt-14 md:pt-[90px] md:pb-20">
        <SectionLabel number="04" right={profile.location}>Contact — get in touch</SectionLabel>
        <h1 className="display mt-12 text-[clamp(2.6rem,7.7vw,8rem)] leading-[1.05] md:mt-20">
          Let’s <em>talk.</em>
        </h1>
        <p className="mt-7 max-w-[56ch] text-lg text-mute md:text-xl">
          Tell me about your project, or reach me directly below. Email is the fastest way.
        </p>
      </header>

      <div className="grid gap-14 pb-16 md:grid-cols-[1fr_1.1fr] md:gap-20 md:pb-24">
        <Reveal as="form" onSubmit={submit} className="space-y-6">
          <label className="block"><span className="label">Name</span>
            <input required value={form.name} onChange={set('name')} className={field} placeholder="Your name" autoComplete="name" />
          </label>
          <label className="block"><span className="label">Email</span>
            <input required type="email" value={form.email} onChange={set('email')} className={field} placeholder="you@example.com" autoComplete="email" />
          </label>
          <label className="block"><span className="label">Message</span>
            <textarea required rows={5} value={form.message} onChange={set('message')} className={`${field} resize-none`} placeholder="What are you building?" />
          </label>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button type="submit" variant="primary" arrow="up-right">Send message</Button>
            <p className="max-w-[28ch] text-sm text-mute">Opens your email app with the message ready to send.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-b border-ink/10">
            {rows.map((r) => {
              const inner = (
                <>
                  <div className="min-w-0">
                    <span className="label mb-1.5 block">{r.label}</span>
                    <span className="block break-words text-xl font-light leading-snug md:text-2xl">{r.value}</span>
                  </div>
                  {r.href ? <ArrowUpRight className="h-4 w-4 shrink-0" /> : null}
                </>
              )
              const base = 'flex items-center justify-between gap-6 border-t border-ink/10 py-5'
              return r.href ? (
                <a
                  key={r.label}
                  href={r.href}
                  {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`${base} group transition-all duration-300 hover:pl-2 hover:text-accent`}
                >
                  {inner}
                </a>
              ) : (
                <div key={r.label} className={base}>{inner}</div>
              )
            })}
          </div>
          <div className="mt-8"><Button onClick={copyEmail}>Copy email</Button></div>
        </Reveal>
      </div>
    </div>
  )
}