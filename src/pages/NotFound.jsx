import Button from '../components/Button'
import SectionLabel from '../components/SectionLabel'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <div className="mx-auto max-w-page px-5 pb-24 pt-14 md:pt-[90px] md:px-10 md:pb-36">
      <SectionLabel number="404">Page not found</SectionLabel>
      <h1 className="display mb-6 mt-16 max-w-[12ch] text-[clamp(2.4rem,6.5vw,6rem)] leading-[1.05]">This page <em>doesn’t exist.</em></h1>
      <p className="mb-9 max-w-[46ch] text-mute">The link may be broken or the page may have moved. Head back to the index to find what you need.</p>
      <Button to="/" variant="primary">Back to index</Button>
    </div>
  )
}
