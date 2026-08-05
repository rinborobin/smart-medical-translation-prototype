const statusColors = {
  normal: {
    bg: "bg-success-50 dark:bg-success-900/20",
    border: "border-success-100 dark:border-success-800",
    dot: "bg-success-500 dark:bg-success-400",
    text: "text-success-700 dark:text-success-300",
  },
  warning: {
    bg: "bg-warning-50 dark:bg-warning-900/20",
    border: "border-warning-100 dark:border-warning-800",
    dot: "bg-warning-500 dark:bg-warning-400",
    text: "text-warning-700 dark:text-warning-300",
  },
};

export default function CaregiverScreen({
  onNavigate,
  familyMembers,
  onSelectMember,
  language = "kh",
}) {
  const t = (kh, en) => (language === "en" ? en : kh);
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center justify-between px-6 pt-14 pb-4">
        <div>
          <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {t("អ្នកថែទាំ", "Caregiver")}
          </h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            {t("Caregiver Dashboard", "Caregiver Dashboard")}
          </p>
        </div>
        <button
          onClick={() => onNavigate("addFamily")}
          className="w-11 h-11 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/20"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <div className="px-6 pt-2 pb-4">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-4 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0"
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
          <div>
            <p className="text-sm font-medium text-primary-800 dark:text-primary-300">
              {t("ការជូនដំណឹងថ្មី", "New alerts")}
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400">
              {t(
                "២ សមាជិកមានលទ្ធផលត្រូវយកចិត្តទុកដាក់",
                "2 members need attention",
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-3 pb-24">
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {t("សមាជិកគ្រួសារ", "Family Members")}
        </p>

        {familyMembers.map((member) => {
          const colors = statusColors[member.status];
          return (
            <button
              key={member.id}
              onClick={() => onSelectMember(member.id)}
              className={`w-full text-left p-5 rounded-2xl border bg-white dark:bg-slate-800 ${colors.border} transition-all active:scale-[0.98]`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center shrink-0`}
                >
                  <span className={`text-xl font-bold ${colors.text}`}>
                    {member.avatar}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-base font-semibold text-neutral-900 dark:text-white">
                      {member.name}
                    </p>
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  </div>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
                    {member.nameEn} ·{" "}
                    {language === "en" ? member.relationEn : member.relation}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">
                      {t("របាយការណ៍ចុងក្រោយ", "Last report")} :{" "}
                      {member.lastReport}
                    </span>
                  </div>

                  {member.alerts > 0 && (
                    <div className="mt-3 flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-warning-500 dark:text-warning-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-warning-700 dark:text-white">
                        {member.alerts} {t("ការជូនដំណឹង", "alerts")}
                      </span>
                    </div>
                  )}
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

        <button
          onClick={() => onNavigate("addFamily")}
          className="w-full p-5 rounded-2xl border-2 border-dashed border-neutral-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <svg
            className="w-5 h-5 text-neutral-400 dark:text-neutral-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {t("បន្ថែមសមាជិកគ្រួសារ", "Add family member")}
          </span>
        </button>
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
              {t("ទំព័រដើម", "Home")}
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
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
              {t("អ្នកថែទាំ", "Caregiver")}
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
              {t("ប្រវត្តិ", "History")}
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
              {t("ការកំណត់", "Settings")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
