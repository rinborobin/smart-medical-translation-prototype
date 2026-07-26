import logo from "../assets/logo.png";

export default function HomeScreen({ onNavigate, notifications, onSelectReport }) {
  const unreadCount = notifications?.filter((n) => !n.read).length || 0
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="px-6 pt-14 pb-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="SmartReport"
              className="w-10 h-10 rounded-2xl object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">Smart Medical</span>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Translation</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate("notifications")}
            className="relative w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
          >
            <svg
              className="w-5 h-5 text-neutral-500 dark:text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-neutral-50 dark:border-slate-900">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            សួស្តី 👋
          </p>
          <h1 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5">
            សុខា រីក
          </h1>
        </div>

        <button
          onClick={() => onNavigate("scan")}
          className="w-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-xl shadow-primary-600/25 active:scale-[0.98] transition-transform"
        >
          <div className="w-20 h-20 bg-white/15 rounded-3xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">ស្កេនរបាយការណ៍</p>
            <p className="text-sm text-white/60 mt-1">Scan Report</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate("upload")}
          className="w-full mt-4 bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center gap-4 border border-neutral-100 dark:border-slate-700 active:scale-[0.98] transition-transform shadow-sm"
        >
          <div className="w-12 h-12 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-neutral-500 dark:text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              បង្ហោះពីរូបភាព
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              Upload from Gallery
            </p>
          </div>
          <svg
            className="w-4 h-4 text-neutral-300 dark:text-neutral-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-6 pt-2">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => onNavigate("history")}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center gap-3 border border-neutral-100 dark:border-slate-700 active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                ប្រវត្តិ
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                History
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("caregiver")}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center gap-3 border border-neutral-100 dark:border-slate-700 active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 bg-warning-50 dark:bg-warning-900/20 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-warning-600 dark:text-warning-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                អ្នកថែទាំ
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Caregiver
              </p>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-neutral-800 dark:text-white">
            របាយការណ៍ថ្មីៗ
          </h2>
          <button
            onClick={() => onNavigate("history")}
            className="text-sm text-primary-600 dark:text-primary-400 font-medium"
          >
            មើលទាំងអស់
          </button>
        </div>

        <button
          onClick={() => onSelectReport(1)}
          className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-warning-50 dark:bg-warning-900/20 rounded-xl flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-warning-600 dark:text-warning-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                លទ្ធផលពិសោធន៍
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                Lab Result · ២៣ កក្កដា ២០២៦
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 bg-warning-500 dark:bg-warning-400 rounded-full" />
                <span className="text-xs font-medium text-warning-700 dark:text-warning-300">
                  ២ ការជូនដំណឹង
                </span>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mt-1 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>

        <button
          onClick={() => onSelectReport(4)}
          className="w-full mt-3 bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-success-50 dark:bg-success-900/20 rounded-xl flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-success-600 dark:text-success-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                លទ្ធផលពិសោធន៍
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                Lab Result · ០១ កក្កដា ២០២៦
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 bg-success-500 dark:bg-success-400 rounded-full" />
                <span className="text-xs font-medium text-success-700 dark:text-success-300">
                  ទាំងអស់ធម្មតា
                </span>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mt-1 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 border-t border-neutral-100 dark:border-slate-700 px-6 pb-6 pt-3 mt-6 transition-colors">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <svg
              className="w-6 h-6 text-primary-600 dark:text-primary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
              ទំព័រដើម
            </span>
          </button>
          <button
            onClick={() => onNavigate("caregiver")}
            className="flex flex-col items-center gap-1"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              អ្នកថែទាំ
            </span>
          </button>
          <button
            onClick={() => onNavigate("history")}
            className="flex flex-col items-center gap-1"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              ប្រវត្តិ
            </span>
          </button>
          <button
            onClick={() => onNavigate("settings")}
            className="flex flex-col items-center gap-1"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              ការកំណត់
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
