import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

const ToastContext = createContext({ show: () => {}, copyEmail: () => {} })

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('')
  const timer = useRef(null)

  const show = useCallback((text) => {
    setMessage(text)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(''), 2000)
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      show('Email copied')
    } catch {
      show(profile.email)
    }
  }, [show])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={{ show, copyEmail }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom,0px)+24px)] left-1/2 z-[120] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-all duration-300 ${
          message ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
