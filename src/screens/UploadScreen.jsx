import { useState } from 'react'

const mockFiles = [
  { id: 1, name: 'Medical_Report_2026.pdf', date: '២៣ កក្កដា ២០២៦', size: '1.2 MB', type: 'pdf' },
  { id: 2, name: 'Prescription_Jul.jpg', date: '២០ កក្កដា ២០២៦', size: '845 KB', type: 'image' },
  { id: 3, name: 'Lab_Result.png', date: '១៥ កក្កដា ២០២៦', size: '2.1 MB', type: 'image' },
  { id: 4, name: 'Doctor_Notes.pdf', date: '១០ កក្កដា ២០២៦', size: '560 KB', type: 'pdf' },
]

export default function UploadScreen({ onNavigate, onGoBack }) {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={onGoBack}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">បង្ហោះពីរូបភាព</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">Upload from Gallery</p>
        </div>
      </div>

      <div className="px-6 pt-2 pb-4">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl px-4 py-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-primary-500 dark:text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <p className="text-xs text-primary-700 dark:text-primary-300">
            គាំទ្រ JPG, PNG, PDF (អតិបរមា 10MB)
          </p>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-3">
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">ឯកសារថ្មីៗ</p>

        {mockFiles.map((file) => (
          <button
            key={file.id}
            onClick={() => setSelectedId(file.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
              selectedId === file.id
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                : 'border-neutral-100 dark:border-slate-700 bg-white dark:bg-slate-800'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
              file.type === 'pdf' ? 'bg-error-50 dark:bg-error-900/20' : 'bg-neutral-100 dark:bg-slate-700'
            }`}>
              {file.type === 'pdf' ? (
                <svg className="w-7 h-7 text-error-500 dark:text-error-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              )}
            </div>

            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-medium text-neutral-800 dark:text-white truncate">{file.name}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{file.date} · {file.size}</p>
            </div>

            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
              selectedId === file.id
                ? 'border-primary-500 bg-primary-500'
                : 'border-neutral-200 dark:border-slate-600'
            }`}>
              {selectedId === file.id && (
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="px-6 pb-8 pt-4">
        <button
          onClick={() => onNavigate('processing')}
          disabled={!selectedId}
          className={`w-full py-4 rounded-2xl text-base font-semibold transition-all ${
            selectedId
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 active:scale-[0.98]'
              : 'bg-neutral-200 dark:bg-slate-700 text-neutral-400 dark:text-neutral-500'
          }`}
        >
          បង្ហោះ
        </button>
      </div>
    </div>
  )
}
