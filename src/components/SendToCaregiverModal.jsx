import { useState } from 'react'

const mockCaregivers = [
  { id: 1, name: 'សុខា រីក', nameEn: 'Sokha Reach', relation: 'កូនស្រី', avatar: 'S' },
  { id: 2, name: 'វិចិត្រ ប៉ា', nameEn: 'Vichet Pa', relation: 'បងប្រុស', avatar: 'V' },
  { id: 3, name: 'ម៉ាលី ជី', nameEn: 'Maly Chi', relation: 'កូនស្រី', avatar: 'M' },
]

export default function SendToCaregiverModal({ isOpen, onClose }) {
  const [selectedId, setSelectedId] = useState(null)
  const [sent, setSent] = useState(false)

  if (!isOpen) return null

  const handleSend = () => {
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setSelectedId(null)
      onClose()
    }, 2000)
  }

  const handleClose = () => {
    setSelectedId(null)
    setSent(false)
    onClose()
  }

  if (sent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center gap-5 shadow-2xl">
          <div className="w-20 h-20 bg-success-50 dark:bg-success-900/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">ផ្ញើជោគជ័យ</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Sent Successfully</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
            របាយការណ៍ត្រូវបានផ្ញើទៅ <span className="font-semibold">{mockCaregivers.find(c => c.id === selectedId)?.name}</span> រួចហើយ។
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-t-3xl w-full max-w-[430px] max-h-[80vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">ផ្ញើទៅអ្នកថែទាំ</h2>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">Send to Caregiver</p>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-2">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl px-4 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-primary-500 dark:text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <p className="text-xs text-primary-700 dark:text-primary-300">
              ជ្រើសរើសអ្នកថែទាំដើម្បីផ្ញើរបាយការណ៍នេះ
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {mockCaregivers.map((caregiver) => (
            <button
              key={caregiver.id}
              onClick={() => setSelectedId(caregiver.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                selectedId === caregiver.id
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-neutral-100 dark:border-slate-700 bg-white dark:bg-slate-800'
              }`}
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{caregiver.avatar}</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-neutral-800 dark:text-white">{caregiver.name}</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">{caregiver.nameEn} · {caregiver.relation}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                selectedId === caregiver.id
                  ? 'border-primary-500 bg-primary-500'
                  : 'border-neutral-200 dark:border-slate-600'
              }`}>
                {selectedId === caregiver.id && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="px-6 pb-8 pt-4 border-t border-neutral-100 dark:border-slate-700">
          <button
            onClick={handleSend}
            disabled={!selectedId}
            className={`w-full py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-3 transition-all ${
              selectedId
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 active:scale-[0.98]'
                : 'bg-neutral-200 dark:bg-slate-700 text-neutral-400 dark:text-neutral-500'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            ផ្ញើរបាយការណ៍
          </button>
        </div>
      </div>
    </div>
  )
}
