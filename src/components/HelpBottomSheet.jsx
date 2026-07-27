import { useEffect } from 'react'

export default function HelpBottomSheet({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[430px] bg-white dark:bg-slate-800 rounded-t-3xl p-6 shadow-2xl animate-slide-up">
        <div className="w-12 h-1.5 bg-neutral-200 dark:bg-slate-700 rounded-full mx-auto mb-6" />

        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">ជំនួយ / Help</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-full flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pb-6">
          {children}
        </div>
      </div>
    </div>
  )
}
