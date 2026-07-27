export default function ScanScreen({ onNavigate, onGoBack }) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={onGoBack}
          className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-white">
          ស្កេនរបាយការណ៍
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative w-full aspect-[3/4] bg-neutral-800 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[85%] h-[85%] border-2 border-white/40 rounded-2xl relative">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-3 border-l-3 border-primary-400 rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-3 border-r-3 border-primary-400 rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-3 border-l-3 border-primary-400 rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-3 border-r-3 border-primary-400 rounded-br-lg" />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
        </div>

        <p className="text-sm text-white/60 mt-6 text-center">
          ដាក់របាយការណ៍ក្នុងប្រអប់
        </p>
        <p className="text-xs text-white/30 mt-1">
          Place the report inside the frame
        </p>
      </div>

      <div className="px-6 pb-12 pt-8">
        <div className="flex items-center justify-between">
          <button className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </button>

          <button
            onClick={() => onNavigate('processing')}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/20 active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 border-4 border-neutral-900 rounded-full" />
          </button>

          <button
            onClick={() => onNavigate('upload')}
            className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
