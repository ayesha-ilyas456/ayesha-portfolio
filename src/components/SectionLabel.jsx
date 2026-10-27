// Hairline rule, then "● N° 01 · Index" on the left and optional meta on the right.
export default function SectionLabel({ number, children, right }) {
  return (
    <div className="border-t border-ink/10 pt-5">
      <div className="flex items-center justify-between gap-4">
        <p className="label flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          N° {number} · {children}
        </p>
        {right ? <div className="label text-right">{right}</div> : null}
      </div>
    </div>
  )
}
