import { profile } from '../data/content'

export default function Portrait({ caption }) {
  return (
    <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-xl border border-ink/10 bg-gradient-to-br from-bg2 to-card">
      {profile.photo ? (
        <img src={profile.photo} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgb(var(--accent)/.35),transparent_55%)]" />
          <span role="img" aria-label={`${profile.name} monogram`} className="display relative z-10 text-[clamp(7.5rem,18vw,16rem)] italic leading-none">AI</span>
        </>
      )}
      <span className="label absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-full border border-ink/10 bg-bg px-3.5 py-2.5 text-ink">
        <span className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-accent" />
        {caption}
      </span>
    </div>
  )
}
