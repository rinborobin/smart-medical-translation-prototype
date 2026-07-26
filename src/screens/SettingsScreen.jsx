import { useState } from "react";
import logo from "../assets/logo.png";

export default function SettingsScreen({ onNavigate, darkMode, setDarkMode }) {
  const [textSize, setTextSize] = useState("large");
  const [language, setLanguage] = useState("kh");

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={() => onNavigate("home")}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
        >
          <svg
            className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">
          ការកំណត់
        </h1>
      </div>

      <div className="flex-1 px-6 pt-4 pb-24 space-y-6">
        <button
          onClick={() => onNavigate('qrCode')}
          className="w-full text-left bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-5 text-white shadow-lg shadow-primary-600/20 active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
              សរ
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold">សុខា រីក</p>
              <p className="text-sm text-white/80">sokha.reak@email.com</p>
              <p className="text-xs text-white/60 mt-1">ប្រើប្រាស់ចាប់តាំងពី មិថុនា ២០២៦</p>
            </div>
            <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.75a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Zm10 0a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2ZM3.75 14.75a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Zm15-10a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Z" />
              </svg>
            </div>
          </div>
        </button>

        <div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-wide mb-3 px-1">
            ការបង្ហាញ
          </p>
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 divide-y divide-neutral-100 dark:divide-slate-700">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800 dark:text-white">
                      របៀបងងឹត
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">
                      Dark Mode
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    darkMode
                      ? "bg-primary-600"
                      : "bg-neutral-200 dark:bg-slate-600"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                      darkMode ? "translate-x-5.5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3M3 11.25h4.5m0 0V8.625m0 2.625h4.5m-4.5 0v2.625"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">
                    ភាសា
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    Language
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("kh")}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    language === "kh"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 dark:bg-slate-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  ខ្មែរ
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    language === "en"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 dark:bg-slate-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">
                    ទំហំអក្សរ
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    Text Size
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTextSize("medium")}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    textSize === "medium"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 dark:bg-slate-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  មធ្យម
                </button>
                <button
                  onClick={() => setTextSize("large")}
                  className={`flex-1 py-3 rounded-xl text-base font-medium transition-all ${
                    textSize === "large"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 dark:bg-slate-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  ធំ
                </button>
                <button
                  onClick={() => setTextSize("xlarge")}
                  className={`flex-1 py-3 rounded-xl text-lg font-medium transition-all ${
                    textSize === "xlarge"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 dark:bg-slate-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  ធំបំផុត
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-wide mb-3 px-1">
            ទិន្នន័យ
          </p>
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 divide-y divide-neutral-100 dark:divide-slate-700">
            <button className="w-full p-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-neutral-800 dark:text-white">
                  នាំចេញទិន្នន័យ
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Export Data
                </p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-300 dark:text-neutral-600"
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

            <button className="w-full p-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-error-50 dark:bg-error-900/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-error-500 dark:text-error-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-error-600 dark:text-error-400">
                  លុបប្រវត្តិទាំងអស់
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Clear All History
                </p>
              </div>
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-wide mb-3 px-1">
            អំពី
          </p>
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-5">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="SmartReport Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Smart Medical Translation v1.0.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white dark:bg-slate-800 border-t border-neutral-100 dark:border-slate-700 px-6 pb-6 pt-3 transition-colors">
        <div className="flex items-center justify-around">
          <button
            onClick={() => onNavigate("home")}
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
              ការកំណត់
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
