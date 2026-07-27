import { useState } from "react";

const statusColors = {
  normal: {
    bg: "bg-success-50 dark:bg-success-900/20",
    border: "border-success-100 dark:border-success-800",
    icon: "text-success-600 dark:text-success-400",
  },
  warning: {
    bg: "bg-warning-50 dark:bg-warning-900/20",
    border: "border-warning-100 dark:border-warning-800",
    icon: "text-warning-600 dark:text-warning-400",
  },
};

const sortOptions = [
  { value: "newest", label: "ថ្មីបំផុត", labelEn: "Newest" },
  { value: "oldest", label: "ចាស់បំផុត", labelEn: "Oldest" },
  { value: "alerts", label: "ការជូនដំណឹង", labelEn: "Alerts" },
  { value: "status", label: "ស្ថានភាព", labelEn: "Status" },
];

export default function HistoryScreen({ onNavigate, onGoBack, history, onSelectReport }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const filteredHistory = history
    .filter(
      (r) =>
        r.type.includes(searchQuery) ||
        r.typeEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.date.includes(searchQuery),
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "alerts") return b.alerts - a.alerts;
      if (sortBy === "status") {
        const order = { warning: 0, normal: 1 };
        return order[a.status] - order[b.status];
      }
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={onGoBack}
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
          ប្រវត្តិ
        </h1>
      </div>

      <div className="px-6 pt-2 pb-4">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300 dark:text-neutral-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="ស្វែងរករបាយការណ៍..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-sm text-neutral-800 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setSortMenuOpen(!sortMenuOpen)}
              className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/20 shrink-0 active:scale-95 transition-transform"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>

            {sortMenuOpen && (
              <div className="absolute right-0 top-14 w-44 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-slate-700 py-2 z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setSortMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between ${
                      sortBy === option.value
                        ? "bg-primary-50 dark:bg-primary-900/20"
                        : "hover:bg-neutral-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-medium ${
                        sortBy === option.value
                          ? "text-primary-700 dark:text-primary-300"
                          : "text-neutral-800 dark:text-white"
                      }`}>{option.label}</p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500">{option.labelEn}</p>
                    </div>
                    {sortBy === option.value && (
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-3 pb-24">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-wide">
          កក្កដា ២០២៦
        </p>

        {history.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <div className="w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-3xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-primary-500 dark:text-primary-400"
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
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-white mb-1">
                មិនទាន់មានរបាយការណ៍
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                ស្កេនរបាយការណ៍ដំបូងរបស់អ្នក ដើម្បីចាប់ផ្ដើមតាមដានសុខភាព
              </p>
            </div>
            <button
              onClick={() => onNavigate("scan", { replace: true })}
              className="px-6 py-3 bg-primary-600 text-white rounded-2xl text-sm font-semibold shadow-lg shadow-primary-600/20 active:scale-95 transition-transform"
            >
              ស្កេនរបាយការណ៍ដំបូង
            </button>
          </div>
        )}

        {history.length > 0 && filteredHistory.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-12">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-neutral-300 dark:text-neutral-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              រកមិនឃើញរបាយការណ៍
            </p>
          </div>
        )}

        {filteredHistory.map((report) => {
          const colors = statusColors[report.status];
          return (
            <button
              key={report.id}
              onClick={() => onSelectReport(report.id)}
              className={`w-full text-left p-5 rounded-2xl border bg-white dark:bg-slate-800 ${colors.border} transition-all active:scale-[0.98]`}
            >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <svg
                      className={`w-6 h-6 ${colors.icon}`}
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

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                      {report.type}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                      {report.typeEn}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        {report.date}
                      </span>
                      <span className="w-1 h-1 bg-neutral-200 dark:bg-slate-600 rounded-full" />
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        {report.findings} ចំណុច
                      </span>
                      {report.alerts > 0 && (
                        <>
                          <span className="w-1 h-1 bg-neutral-200 dark:bg-slate-600 rounded-full" />
                          <span className={`text-xs font-medium ${colors.icon}`}>
                            {report.alerts} ការជូនដំណឹង
                          </span>
                        </>
                      )}
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
            );
        })}
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white dark:bg-slate-800 border-t border-neutral-100 dark:border-slate-700 px-6 pb-6 pt-3 transition-colors">
        <div className="flex items-center justify-around">
          <button
            onClick={() => onNavigate("home", { replace: true })}
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
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
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
