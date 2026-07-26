export default function ExportModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl">
        <div className="w-20 h-20 bg-success-50 dark:bg-success-900/20 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
            នាំចេញជោគជ័យ
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Export Successful
          </p>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center leading-relaxed">
          របាយការណ៍ត្រូវបានរក្សាទុកក្នុងទូរស័ព្ទរបស់អ្នក។ អ្នកអាចចែករំលែកវាតាមរយៈកម្មវិធីផ្សេងៗ។
        </p>

        <div className="w-full space-y-3">
          <button
            onClick={() => {}}
            className="w-full py-4 bg-primary-600 text-white rounded-2xl text-base font-semibold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            ចែករំលែកឥឡូវ
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 bg-neutral-100 dark:bg-slate-700 text-neutral-700 dark:text-neutral-300 rounded-2xl text-base font-semibold active:scale-[0.98] transition-transform"
          >
            បិទ
          </button>
        </div>
      </div>
    </div>
  )
}
