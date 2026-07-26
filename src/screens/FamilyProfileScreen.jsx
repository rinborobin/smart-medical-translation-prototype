import { useState } from 'react'

const mockReports = [
  { id: 1, type: 'លទ្ធផលពិសោធន៍', typeEn: 'Lab Result', date: '២៣ កក្កដា ២០២៦', findings: 4, alerts: 2, status: 'warning' },
  { id: 2, type: 'វេជ្ជបញ្ជា', typeEn: 'Prescription', date: '១៨ កក្កដា ២០២៦', findings: 3, alerts: 0, status: 'normal' },
  { id: 3, type: 'លទ្ធផលពិសោធន៍', typeEn: 'Lab Result', date: '១០ កក្កដា ២០២៦', findings: 5, alerts: 1, status: 'warning' },
]

const statusColors = {
  normal: { bg: 'bg-success-50 dark:bg-success-900/20', border: 'border-success-100 dark:border-success-800', icon: 'text-success-600 dark:text-success-400' },
  warning: { bg: 'bg-warning-50 dark:bg-warning-900/20', border: 'border-warning-100 dark:border-warning-800', icon: 'text-warning-600 dark:text-warning-400' },
}

export default function FamilyProfileScreen({ onNavigate, familyMembers, selectedId, onDelete }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const member = familyMembers.find((m) => m.id === selectedId) || familyMembers[0]
  if (!member) {
    return (
      <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors items-center justify-center px-6">
        <p className="text-neutral-500 dark:text-neutral-400">សមាជិកនេះមិនមានទេ</p>
        <button
          onClick={() => onNavigate('caregiver')}
          className="mt-4 px-6 py-3 bg-primary-600 text-white rounded-2xl text-sm font-semibold"
        >
          ត្រឡប់ទៅអ្នកថែទាំ
        </button>
      </div>
    )
  }

  const handleDelete = () => {
    onDelete(member.id)
    setShowDeleteConfirm(false)
    onNavigate('caregiver')
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={() => onNavigate('caregiver')}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">{member.name}</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">{member.nameEn} · {member.relation}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
          >
            <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-slate-700 py-2 z-20">
              <button
                onClick={() => { setMenuOpen(false); onNavigate('history') }}
                className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-neutral-50 dark:hover:bg-slate-700"
              >
                <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">ប្រវត្តិការពិសោធន៍</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Test History</p>
                </div>
              </button>
              <button
                onClick={() => { setMenuOpen(false); setShowDeleteConfirm(true) }}
                className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-error-50 dark:hover:bg-error-900/20"
              >
                <svg className="w-5 h-5 text-error-500 dark:text-error-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-error-600 dark:text-error-400">លុបសមាជិក</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Delete Member</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pt-4 pb-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-warning-50 dark:bg-warning-900/20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-warning-700 dark:text-warning-300">{member.avatar}</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-900 dark:text-white">{member.name}</p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">{member.nameEn}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{member.relation} · {member.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-neutral-50 dark:bg-slate-700 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">១២</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">របាយការណ៍</p>
            </div>
            <div className="bg-warning-50 dark:bg-warning-900/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-warning-700 dark:text-warning-300">{member.alerts}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">ការជូនដំណឹង</p>
            </div>
            <div className="bg-success-50 dark:bg-success-900/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-success-700 dark:text-success-300">៩</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">ធម្មតា</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-2">
        <div className="bg-warning-50 dark:bg-warning-900/20 rounded-2xl border border-warning-100 dark:border-warning-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-warning-800 dark:text-warning-300">ការជូនដំណឹងថ្មី</p>
              <p className="text-xs text-warning-600 dark:text-warning-400">Latest Alerts</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-warning-400 dark:bg-warning-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-sm text-warning-700 dark:text-warning-300">
                <span className="font-semibold">ជាតិស្ករ</span> ខ្ពស់ (142 mg/dL) — ២៣ កក្កដា
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-warning-400 dark:bg-warning-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-sm text-warning-700 dark:text-warning-300">
                <span className="font-semibold">អេម៉ូក្លូប៊ីន</span> ទាប (11.2 g/dL) — ២៣ កក្កដា
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pt-6 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-neutral-800 dark:text-white">ប្រវត្តិរបាយការណ៍</h2>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              isPlaying
                ? 'bg-primary-600 text-white'
                : 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
            }`}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
            <span className="text-xs font-medium">{isPlaying ? 'កំពុងអាន' : 'ស្ដាប់'}</span>
          </button>
        </div>

        <div className="space-y-3">
          {mockReports.map((report) => {
            const colors = statusColors[report.status]
            return (
              <button
                key={report.id}
                onClick={() => onNavigate('summary')}
                className={`w-full text-left p-5 rounded-2xl border bg-white dark:bg-slate-800 ${colors.border} transition-all active:scale-[0.98]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <svg className={`w-6 h-6 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-800 dark:text-white">{report.type}</p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{report.typeEn}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">{report.date}</span>
                      <span className="w-1 h-1 bg-neutral-200 dark:bg-slate-600 rounded-full" />
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">{report.findings} ចំណុច</span>
                      {report.alerts > 0 && (
                        <>
                          <span className="w-1 h-1 bg-neutral-200 dark:bg-slate-600 rounded-full" />
                          <span className={`text-xs font-medium ${colors.icon}`}>{report.alerts} ការជូនដំណឹង</span>
                        </>
                      )}
                    </div>
                  </div>

                  <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl">
            <div className="w-14 h-14 bg-error-50 dark:bg-error-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-error-500 dark:text-error-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center text-neutral-900 dark:text-white mb-2">លុបសមាជិក?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6">
              តើអ្នកប្រាកដជាចង់លុប <span className="font-semibold text-neutral-900 dark:text-white">{member.name}</span> ចេញពីអ្នកថែទាមរបស់អ្នកទេ?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 rounded-2xl bg-neutral-100 dark:bg-slate-700 text-neutral-700 dark:text-neutral-300 font-semibold text-sm"
              >
                បោះបង់
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-3 rounded-2xl bg-error-500 text-white font-semibold text-sm shadow-lg shadow-error-500/20"
              >
                លុប
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white dark:bg-slate-800 border-t border-neutral-100 dark:border-slate-700 px-6 pb-6 pt-3 transition-colors">
        <div className="flex items-center justify-around">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">ទំព័រដើម</span>
          </button>
          <button onClick={() => onNavigate('caregiver')} className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">អ្នកថែទាំ</span>
          </button>
          <button onClick={() => onNavigate('history')} className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">ប្រវត្តិ</span>
          </button>
          <button onClick={() => onNavigate('settings')} className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">ការកំណត់</span>
          </button>
        </div>
      </div>
    </div>
  )
}
