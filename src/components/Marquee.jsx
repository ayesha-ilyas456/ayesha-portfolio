// variant "names": large light names, no separators. variant "tags": small caps with ✱ separators.
export default function Marquee({ items, variant = 'names', reverse = false }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-11 pr-11" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-11">
          <span className={variant === 'names' ? 'display text-[clamp(1.5rem,3vw,2.6rem)] leading-none' : 'label'}>{item}</span>
          {variant === 'tags' && <span className="text-accent" aria-hidden="true">✱</span>}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee-mask group overflow-hidden whitespace-nowrap border-y border-ink/10 py-5">
      <div className={`flex w-max group-hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
