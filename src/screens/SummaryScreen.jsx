import { useState } from 'react'
import ExportModal from '../components/ExportModal'
import SendToCaregiverModal from '../components/SendToCaregiverModal'
import HelpBottomSheet from '../components/HelpBottomSheet'

const mockFindings = [
  { id: 1, name: 'CRP Quantitative', nameKh: 'ស៊ីអ៊ារភី បរិមាណ', value: '3.5 mg/L', normalRange: '< 3 mg/L', status: 'high', explanation: 'កម្រិតស៊ីអ៊ារភីខ្ពស់ជាងធម្មតាបន្តិច។ នេះអាចបង្ហាញពីការរលាកក្នុងរាងកាយ។', section: 'SEROLOGY', confidence: 94, dataSource: 'Mayo Clinic / WHO' },
  { id: 2, name: 'Hemoglobin', nameKh: 'អេម៉ូក្លូប៊ីន', value: '11.8 g/dL', normalRange: '12.0 - 15.5 g/dL', status: 'low', explanation: 'កម្រិតឈាមក្រហមទាបជាងធម្មតាបន្តិច។ អាចបង្ហាញពីកង្វះជាតិដែក។', section: 'HEMATOLOGY', confidence: 96, dataSource: 'Cleveland Clinic / NIH' },
  { id: 3, name: 'WBC', nameKh: 'កោសិកាឈាមស', value: '7,200 /μL', normalRange: '4,000 - 11,000 /μL', status: 'normal', explanation: 'កម្រិតកោសិកាឈាមសធម្មតា។ ប្រព័ន្ធភាពស៊ាំដំណើរការល្អ។', section: 'HEMATOLOGY', confidence: 98, dataSource: 'Lab Tests Online / WHO' },
  { id: 4, name: 'Platelets', nameKh: 'ប្លាកែត', value: '245,000 /μL', normalRange: '150,000 - 400,000 /μL', status: 'normal', explanation: 'ចំនួនប្លាកែតក្នុងដែនកំណត់ធម្មតា។ ការកកឈាមដំណើរការល្អ។', section: 'HEMATOLOGY', confidence: 97, dataSource: 'Cleveland Clinic / NIH' },
  { id: 5, name: 'Neutrophils', nameKh: 'ណឺត្រូហ្វីល', value: '58%', normalRange: '40 - 70%', status: 'normal', explanation: 'សមាមាត្រណឺត្រូហ្វីលធម្មតា។ គ្មានសញ្ញានៃការបង្ករោគធ្ងន់ធ្ងរ។', section: 'HEMATOLOGY', confidence: 95, dataSource: 'MedlinePlus / WHO' },
]

const statusConfig = {
  normal: { bg: 'bg-success-50 dark:bg-success-900/20', border: 'border-success-100 dark:border-success-800', text: 'text-success-700 dark:text-success-300', dot: 'bg-success-500 dark:bg-success-400', label: 'ធម្មតា' },
  low: { bg: 'bg-warning-50 dark:bg-warning-900/20', border: 'border-warning-100 dark:border-warning-800', text: 'text-warning-700 dark:text-warning-300', dot: 'bg-warning-500 dark:bg-warning-400', label: 'ទាប' },
  high: { bg: 'bg-error-50 dark:bg-error-900/20', border: 'border-error-100 dark:border-error-800', text: 'text-error-700 dark:text-error-300', dot: 'bg-error-500 dark:bg-error-400', label: 'ខ្ពស់' },
}

export default function SummaryScreen({ onNavigate, onGoBack, onSelectFinding, history, selectedReportId, onDeleteReport }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showExportModal, setShowExportModal] = useState(false)
  const [showCaregiverModal, setShowCaregiverModal] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const report = history?.find((r) => r.id === selectedReportId) || history?.[0]

  const handleDelete = () => {
    if (report) {
      onDeleteReport(report.id)
      setShowDeleteConfirm(false)
      onNavigate('history')
    }
  }

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
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">សង្ខេបរបាយការណ៍</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">Report Summary</p>
        </div>
        <button
          onClick={() => setHelpOpen(true)}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700 mr-2"
        >
          <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </button>
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
            <div className="absolute right-0 top-12 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-slate-700 py-2 z-20">
              <button
                onClick={() => { setMenuOpen(false); setShowExportModal(true) }}
                className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-neutral-50 dark:hover:bg-slate-700"
              >
                <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">នាំចេញរបាយការណ៍</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Export Report</p>
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
                  <p className="text-sm font-medium text-error-600 dark:text-error-400">លុបរបាយការណ៍</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Delete Report</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pt-2">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-900 dark:text-white">{report?.type || 'លទ្ធផលពិសោធន៍'}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">{report?.typeEn || 'Lab Result'} · {report?.date || '២៣ កក្កដា ២០២៦'}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 bg-warning-50 dark:bg-warning-900/20 rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-warning-500 dark:text-warning-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <p className="text-sm text-warning-700 dark:text-warning-300 font-medium">
              រកឃើញ {report?.alerts || 2} ចំណុចត្រូវយកចិត្តទុកដាក់
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-neutral-800 dark:text-white">លទ្ធផលសំខាន់ៗ</h2>
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

        <div className="space-y-3 pb-6">
          {mockFindings.map((finding) => {
            const config = statusConfig[finding.status]
            return (
              <button
                key={finding.id}
                onClick={() => onSelectFinding(finding)}
                className={`w-full text-left p-5 rounded-2xl border ${config.bg} ${config.border} transition-all active:scale-[0.98]`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                      <p className="text-sm font-semibold text-neutral-800 dark:text-white">{finding.nameKh}</p>
                    </div>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">{finding.name}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-neutral-900 dark:text-white">{finding.value}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-lg ${config.bg} ${config.text}`}>{config.label}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">{finding.explanation}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <svg className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  <span className="text-[11px] font-medium text-primary-600 dark:text-primary-400">AI confidence: {finding.confidence}%</span>
                  <span className="text-[10px] text-neutral-300 dark:text-neutral-600">·</span>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 truncate max-w-[120px]">{finding.dataSource}</span>
                </div>
              </button>
            )
          })}

          <div className="bg-warning-50 dark:bg-warning-900/20 rounded-2xl border border-warning-100 dark:border-warning-800 p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-warning-600 dark:text-warning-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-warning-800 dark:text-warning-300 mb-1">
                  សម្រាប់ការយល់ដឹងទូទៅប៉ុណ្ណោះ
                </p>
                <p className="text-xs text-warning-700 dark:text-warning-300 leading-relaxed">
                  ព័ត៌មាននេះមានគោលបំណងជួយអ្នកយល់ដឹងបន្ថែមអំពីគំនិត និងគោលការណ៍ណែនាំសុខភាព។ សូមប្រឹក្សាជាមួយគ្រូពេទ្យជំនាញជានិច្ចសម្រាប់ដំបូន្មានវេជ្ជសាស្រ្ត ការធ្វើរោគវិនិច្ឆ័យ ឬការព្យាបាល។
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 pt-4 space-y-3">
        <button
          onClick={() => setShowExportModal(true)}
          className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl text-base font-semibold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          នាំចេញរបាយការណ៍
        </button>

        <button
          onClick={() => setShowCaregiverModal(true)}
          className="w-full py-4 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-2xl text-base font-semibold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          ផ្ញើទៅអ្នកថែទាំ
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl">
            <div className="w-14 h-14 bg-error-50 dark:bg-error-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-error-500 dark:text-error-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center text-neutral-900 dark:text-white mb-2">លុបរបាយការណ៍?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6">
              តើអ្នកប្រាកដជាចង់លុប <span className="font-semibold text-neutral-900 dark:text-white">{report?.type}</span> ចេញពីប្រវត្តិទេ?
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

      <HelpBottomSheet
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
        title="របៀបអានសង្ខេបរបាយការណ៍"
      >
        <div className="space-y-3">
          <p>
            ទំព័រនេះបង្ហាញលទ្ធផលសង្ខេបពីរបាយការណ៍សុខភាពរបស់អ្នក។ រាល់ចំណុចបង្ហាញដោយពណ៌៖
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-success-500 rounded-full mt-2 shrink-0" />
              <span><strong>ខៀវ / បៃតង</strong> — លទ្ធផលស្ថិតក្នុងដែនកំណត់ធម្មតា</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-warning-500 rounded-full mt-2 shrink-0" />
              <span><strong>លឿង</strong> — លទ្ធផលខ្ពស់ឬទាបបន្តិច ត្រូវយកចិត្តទុកដាក់</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-error-500 rounded-full mt-2 shrink-0" />
              <span><strong>ក្រហម</strong> — លទ្ធផលខ្ពស់ឬទាបច្រើន សូមប្រឹក្សាគ្រូពេទ្យ</span>
            </li>
          </ul>
          <p>
            <strong>AI confidence</strong> បង្ហាញកម្រិតទំនុកចិត្តរបស់ប្រព័ន្ធក្នុងការបកប្រែតម្លៃនីមួយៗ។ ប្រសិនបើអ្នកមានសំណួរ សូមចុចលើចំណុចណាមួយដើម្បីអានបរិយាយលម្អិត។
          </p>
        </div>
      </HelpBottomSheet>

      <ExportModal isOpen={showExportModal} onClose={() => setShowExportModal(false)} onNavigate={onNavigate} />
      <SendToCaregiverModal isOpen={showCaregiverModal} onClose={() => setShowCaregiverModal(false)} />
    </div>
  )
}
