import { useState, useEffect } from 'react'

const stages = [
  { id: 1, label: 'កំពុងស្កេនអត្ថបទ', sub: 'Scanning text' },
  { id: 2, label: 'កំពុងវិភាគ', sub: 'Analysing' },
  { id: 3, label: 'កំពុងបកប្រែ', sub: 'Translating' },
]

export default function ProcessingScreen({ onNavigate }) {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onNavigate('summary'), 500)
          return 100
        }
        return prev + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onNavigate])

  useEffect(() => {
    if (progress >= 70) setCurrentStage(2)
    else if (progress >= 35) setCurrentStage(1)
  }, [progress])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-900 px-6 transition-colors">
      <div className="flex flex-col items-center gap-8 w-full max-w-xs">
        <div className="w-24 h-24 bg-primary-50 dark:bg-primary-900/20 rounded-3xl flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin" />
        </div>

        <div className="w-full space-y-4">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                index === currentStage
                  ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800'
                  : index < currentStage
                  ? 'bg-success-50 dark:bg-success-900/20 border border-success-100 dark:border-success-800'
                  : 'bg-neutral-50 dark:bg-slate-800 border border-neutral-100 dark:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                index === currentStage
                  ? 'bg-primary-100 dark:bg-primary-900/30'
                  : index < currentStage
                  ? 'bg-success-100 dark:bg-success-900/30'
                  : 'bg-neutral-100 dark:bg-slate-700'
              }`}>
                {index < currentStage ? (
                  <svg className="w-5 h-5 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    index === currentStage ? 'bg-primary-500 dark:bg-primary-400 animate-pulse' : 'bg-neutral-300 dark:bg-slate-600'
                  }`} />
                )}
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  index === currentStage ? 'text-primary-700 dark:text-primary-300' : index < currentStage ? 'text-success-700 dark:text-success-300' : 'text-neutral-400 dark:text-neutral-500'
                }`}>
                  {stage.label}
                </p>
                <p className={`text-xs ${
                  index === currentStage ? 'text-primary-400 dark:text-primary-500' : index < currentStage ? 'text-success-400 dark:text-success-500' : 'text-neutral-300 dark:text-neutral-600'
                }`}>
                  {stage.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="w-full h-2 bg-neutral-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-500 dark:bg-primary-400 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 text-center">
            សូមរង់ចាំ... {progress}%
          </p>
        </div>
      </div>
    </div>
  )
}
