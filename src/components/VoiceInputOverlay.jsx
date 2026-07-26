import { useState, useEffect } from 'react'

export default function VoiceInputOverlay({ isOpen, onClose, onResult }) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setIsListening(true)
      setTranscript('')
      const interval = setInterval(() => {
        setPulse((p) => (p + 1) % 4)
      }, 400)

      const timeout = setTimeout(() => {
        clearInterval(interval)
        setIsListening(false)
        const mockResults = [
          'លទ្ធផលពិសោធន៍',
          'វេជ្ជបញ្ជា',
          'កំណត់ត្រាគ្រូពេទ្យ',
          'ជាតិស្ករ',
          'កូលេស្តេរ៉ុល',
        ]
        const result = mockResults[Math.floor(Math.random() * mockResults.length)]
        setTranscript(result)
        setTimeout(() => {
          onResult(result)
          onClose()
        }, 1200)
      }, 3000)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [isOpen, onClose, onResult])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 mx-6 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl">
        <div className="relative">
          <button
            onClick={() => {
              setIsListening(false)
              onClose()
            }}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
              isListening
                ? 'bg-error-500 shadow-lg shadow-error-500/30'
                : 'bg-neutral-200 dark:bg-slate-700'
            }`}
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </button>

          {isListening && (
            <>
              <div className="absolute inset-0 rounded-full bg-error-500/20 animate-ping" />
              <div className={`absolute -inset-3 rounded-full border-2 border-error-400/30 transition-all duration-300 ${pulse > 0 ? 'scale-110 opacity-100' : 'scale-100 opacity-50'}`} />
              <div className={`absolute -inset-6 rounded-full border-2 border-error-400/20 transition-all duration-300 ${pulse > 1 ? 'scale-110 opacity-100' : 'scale-100 opacity-50'}`} />
            </>
          )}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
            {isListening ? 'កំពុងស្ដាប់...' : 'រួចរាល់'}
          </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            {isListening ? 'Listening...' : 'Ready'}
          </p>
        </div>

        {isListening && (
          <div className="flex items-center gap-1 h-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary-500 dark:bg-primary-400 rounded-full transition-all duration-150"
                style={{
                  height: `${Math.random() * 24 + 8}px`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        )}

        {transcript && !isListening && (
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl px-5 py-3 w-full">
            <p className="text-sm text-primary-700 dark:text-primary-300 text-center font-medium">
              "{transcript}"
            </p>
          </div>
        )}

        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
          ប៉ះមីក្រូហ្វូនដើម្បីបញ្ឈប់
        </p>
      </div>
    </div>
  )
}
