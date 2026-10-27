import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Ayesha Ilyas` : 'Ayesha Ilyas | PHP Laravel Backend Developer'
  }, [title])
}
