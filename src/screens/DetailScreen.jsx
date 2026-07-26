import { useState } from 'react'
import SendToCaregiverModal from '../components/SendToCaregiverModal'

const findingDetails = {
  'CRP Quantitative': {
    glossary: [
      { term: 'CRP', definition: 'C-Reactive Protein សារធាតុបង្ហាញការរលាក' },
      { term: 'SEROLOGY', definition: 'ការពិនិត្យសេរ៉ូមក្នុងឈាម' },
      { term: 'mg/L', definition: 'មីលីក្រាមក្នុងមួយលីត្រ' },
    ],
    recommendations: [
      'សូមពិគ្រោះជាមួយគ្រូពេទ្យដើម្បីវាយតម្លៃមូលហេតុនៃការរលាក',
      'តាមដានរោគសញ្ញាដូចជា គ្រុនក្ដៅ ឈឺចាប់ ឬហើម',
      'អាចត្រូវពិនិត្យ CRP ឡើងវិញក្នុងរយៈពេល ២-៤ សប្ដាហ៍',
    ],
    fullExplanation: 'កម្រិតស៊ីអ៊ារភី (CRP) របស់អ្នកគឺ <strong>3.5 mg/L</strong> ដែលខ្ពស់ជាងកម្រិតធម្មតា (&lt; 3 mg/L) បន្តិច។ CRP គឺជាសារធាតុប្រូតេអ៊ីនដែលផលិតដោយថ្លើម នៅពេលមានការរលាកក្នុងរាងកាយ។ កម្រិតខ្ពស់បន្តិចអាចបង្ហាញពីការរលាកស្រាល ឬការបង្ករោគ។',
    barConfig: {
      gradientType: 'threshold',
      markerPosition: '65%',
      markerColor: 'border-warning-500 dark:border-warning-400',
      labels: ['ធម្មតា (<3)', 'ខ្ពស់បន្តិច', 'ខ្ពស់'],
    },
  },
  'Hemoglobin': {
    glossary: [
      { term: 'Hemoglobin', definition: 'ប្រូតេអ៊ីនក្នុងគ្រាប់ឈាមក្រហមដែលដឹកអុកស៊ីសែន' },
      { term: 'HEMATOLOGY', definition: 'ការសិក្សាអំពីឈាម និងជំងឺឈាម' },
      { term: 'g/dL', definition: 'ក្រាមក្នុងមួយដេស៊ីលីត្រ' },
    ],
    recommendations: [
      'បរិភោគអាហារសម្បូរជាតិដែកដូចជា សាច់ក្រហម ស្ពៃខ្មៅ សណ្ដែក',
      'ពិគ្រោះជាមួយគ្រូពេទ្យអំពីការបំពេញជាតិដែក',
      'ពិនិត្យឈាមឡើងវិញក្នុងរយៈពេល ១-៣ ខែ',
    ],
    fullExplanation: 'កម្រិតអេម៉ូក្លូប៊ីនរបស់អ្នកគឺ <strong>11.8 g/dL</strong> ដែលទាបជាងកម្រិតធម្មតា (12.0 - 15.5 g/dL) បន្តិច។ អេម៉ូក្លូប៊ីនគឺជាប្រូតេអ៊ីនក្នុងគ្រាប់ឈាមក្រហមដែលដឹកអុកស៊ីសែនទៅកាន់រាងកាយ។ កម្រិតទាបអាចបណ្ដាលឱ្យមានអាការៈហត់ អស់កម្លាំង ឬវិលមុខ។',
    barConfig: {
      gradientType: 'range',
      markerPosition: '18%',
      markerColor: 'border-warning-500 dark:border-warning-400',
      labels: ['ទាប', 'ធម្មតា (12-15.5)', 'ខ្ពស់'],
    },
  },
  'WBC': {
    glossary: [
      { term: 'WBC', definition: 'White Blood Cells កោសិកាឈាមសដែលការពាររាងកាយ' },
      { term: 'HEMATOLOGY', definition: 'ការសិក្សាអំពីឈាម និងជំងឺឈាម' },
      { term: '/μL', definition: 'កោសិកាក្នុងមួយមីក្រូលីត្រ' },
    ],
    recommendations: [
      'កម្រិតកោសិកាឈាមសធម្មតា មិនចាំបាច់ធ្វើអ្វីបន្ថែម',
      'បន្តរក្សាសុខភាពល្អតាមរយៈការញ៉ាំអាហារមានជីវជាតិ',
      'ពិនិត្យឈាមតាមការណែនាំរបស់គ្រូពេទ្យ',
    ],
    fullExplanation: 'កម្រិតកោសិកាឈាមសរបស់អ្នកគឺ <strong>7,200 /μL</strong> ដែលស្ថិតក្នុងដែនកំណត់ធម្មតា (4,000 - 11,000 /μL)។ កោសិកាឈាមសជួយការពាររាងកាយពីការបង្ករោគ។ កម្រិតធម្មតាបង្ហាញថាប្រព័ន្ធភាពស៊ាំរបស់អ្នកដំណើរការល្អ។',
    barConfig: {
      gradientType: 'range',
      markerPosition: '45%',
      markerColor: 'border-success-500 dark:border-success-400',
      labels: ['ទាប (<4K)', 'ធម្មតា (4K-11K)', 'ខ្ពស់ (>11K)'],
    },
  },
  'Platelets': {
    glossary: [
      { term: 'Platelets', definition: 'ប្លាកែត កោសិកាជួយកកឈាម' },
      { term: 'HEMATOLOGY', definition: 'ការសិក្សាអំពីឈាម និងជំងឺឈាម' },
      { term: '/μL', definition: 'កោសិកាក្នុងមួយមីក្រូលីត្រ' },
    ],
    recommendations: [
      'ចំនួនប្លាកែតធម្មតា មិនចាំបាច់ព្រួយបារម្ភ',
      'បន្តរក្សាសុខភាពល្អ និងការហាត់ប្រាណទៀងទាត់',
      'ពិនិត្យឈាមតាមការណែនាំរបស់គ្រូពេទ្យ',
    ],
    fullExplanation: 'ចំនួនប្លាកែតរបស់អ្នកគឺ <strong>245,000 /μL</strong> ដែលស្ថិតក្នុងដែនកំណត់ធម្មតា (150,000 - 400,000 /μL)។ ប្លាកែតជួយឱ្យឈាមកក នៅពេលមានរបួស។ កម្រិតធម្មតាបង្ហាញថាការកកឈាមរបស់អ្នកដំណើរការល្អ។',
    barConfig: {
      gradientType: 'range',
      markerPosition: '42%',
      markerColor: 'border-success-500 dark:border-success-400',
      labels: ['ទាប (<150K)', 'ធម្មតា (150K-400K)', 'ខ្ពស់ (>400K)'],
    },
  },
  'Neutrophils': {
    glossary: [
      { term: 'Neutrophils', definition: 'ប្រភេទកោសិកាឈាមសដែលប្រយុទ្ធប្រឆាំងបាក់តេរី' },
      { term: 'HEMATOLOGY', definition: 'ការសិក្សាអំពីឈាម និងជំងឺឈាម' },
      { term: '%', definition: 'ភាគរយនៃកោសិកាឈាមសសរុប' },
    ],
    recommendations: [
      'សមាមាត្រណឺត្រូហ្វីលធម្មតា គ្មានសញ្ញានៃការបង្ករោគ',
      'បន្តរក្សាអនាម័យល្អ និងការពារពីការឆ្លងរោគ',
      'ពិនិត្យឈាមតាមការណែនាំរបស់គ្រូពេទ្យ',
    ],
    fullExplanation: 'សមាមាត្រណឺត្រូហ្វីលរបស់អ្នកគឺ <strong>58%</strong> ដែលស្ថិតក្នុងដែនកំណត់ធម្មតា (40 - 70%)។ ណឺត្រូហ្វីលគឺជាប្រភេទកោសិកាឈាមសដែលប្រយុទ្ធប្រឆាំងនឹងបាក់តេរី។ សមាមាត្រធម្មតាបង្ហាញថាគ្មានសញ្ញានៃការបង្ករោគធ្ងន់ធ្ងរ។',
    barConfig: {
      gradientType: 'range',
      markerPosition: '48%',
      markerColor: 'border-success-500 dark:border-success-400',
      labels: ['ទាប (<40%)', 'ធម្មតា (40-70%)', 'ខ្ពស់ (>70%)'],
    },
  },
}

const statusConfig = {
  normal: { iconBg: 'bg-success-50 dark:bg-success-900/20', iconColor: 'text-success-500 dark:text-success-400', valueColor: 'text-success-600 dark:text-success-400', badgeBg: 'bg-success-50 dark:bg-success-900/20', badgeText: 'text-success-600 dark:text-success-400', markerBorder: 'border-success-500 dark:border-success-400', label: 'ធម្មតា' },
  low: { iconBg: 'bg-warning-50 dark:bg-warning-900/20', iconColor: 'text-warning-500 dark:text-warning-400', valueColor: 'text-warning-600 dark:text-warning-400', badgeBg: 'bg-warning-50 dark:bg-warning-900/20', badgeText: 'text-warning-600 dark:text-warning-400', markerBorder: 'border-warning-500 dark:border-warning-400', label: 'ទាប' },
  high: { iconBg: 'bg-error-50 dark:bg-error-900/20', iconColor: 'text-error-500 dark:text-error-400', valueColor: 'text-error-600 dark:text-error-400', badgeBg: 'bg-error-50 dark:bg-error-900/20', badgeText: 'text-error-600 dark:text-error-400', markerBorder: 'border-error-500 dark:border-error-400', label: 'ខ្ពស់' },
}

export default function DetailScreen({ onNavigate, finding }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCaregiverModal, setShowCaregiverModal] = useState(false)

  if (!finding) {
    return (
      <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin" />
      </div>
    )
  }

  const detail = findingDetails[finding.name]
  const status = statusConfig[finding.status]

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={() => onNavigate('summary')}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">លម្អិត</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">Detail</p>
        </div>
      </div>

      <div className="flex-1 px-6 pt-2 pb-6 space-y-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 ${status.iconBg} rounded-xl flex items-center justify-center`}>
              {finding.status === 'normal' ? (
                <svg className={`w-5 h-5 ${status.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <svg className={`w-5 h-5 ${status.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              )}
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-900 dark:text-white">{finding.nameKh}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">{finding.name} · {finding.section}</p>
            </div>
          </div>

          <div className="flex items-end gap-2 mb-2">
            <span className={`text-4xl font-bold ${status.valueColor}`}>{finding.value.split(' ')[0]}</span>
            <span className="text-sm text-neutral-400 dark:text-neutral-500 mb-1">{finding.value.split(' ').slice(1).join(' ')}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${status.badgeBg} ${status.badgeText}`}>{status.label}</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">ធម្មតា: {finding.normalRange}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-6">
          <p className="text-sm font-semibold text-neutral-800 dark:text-white mb-4">កម្រិតប្រៀបធៀប</p>

          <div className={`relative h-4 rounded-full overflow-hidden mb-6 ${
            detail.barConfig.gradientType === 'threshold'
              ? 'bg-gradient-to-r from-success-400 via-warning-400 to-error-400 dark:from-success-600 dark:via-warning-600 dark:to-error-600'
              : 'bg-gradient-to-r from-warning-400 via-success-400 to-error-400 dark:from-warning-600 dark:via-success-600 dark:to-error-600'
          }`}>
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white dark:bg-slate-900 border-3 ${detail.barConfig.markerColor} rounded-full shadow-md`}
              style={{ left: detail.barConfig.markerPosition }}
            />
          </div>

          <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500">
            {detail.barConfig.labels.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            <p className="text-sm font-semibold text-neutral-800 dark:text-white">កម្រិតទំនុកចិត្តរបស់ AI</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-neutral-100 dark:text-slate-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="text-primary-500 dark:text-primary-400"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray={`${finding.confidence}, 100`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-neutral-900 dark:text-white">{finding.confidence}%</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                AI វិភាគលទ្ធផលនេះដោយទំនុកចិត្ត <span className="font-semibold text-primary-600 dark:text-primary-400">{finding.confidence}%</span>
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                ប្រភពទិន្នន័យ៖ {finding.dataSource}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800 p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <p className="text-sm font-semibold text-primary-800 dark:text-primary-300">តើវាមានន័យយ៉ាងម៉េច?</p>
          </div>
          <p
            className="text-sm text-primary-700 dark:text-primary-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: detail.fullExplanation }}
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
            </svg>
            <p className="text-sm font-semibold text-neutral-800 dark:text-white">ពាក្យពេទ្យ</p>
          </div>

          <div className="space-y-3">
            {detail.glossary.map((item, i) => (
              <div key={i}>
                {i > 0 && <div className="border-t border-neutral-100 dark:border-slate-700 mb-3" />}
                <div className="flex gap-3">
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 w-20 shrink-0 pt-0.5">{item.term}</span>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.definition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl border p-6 ${
          finding.status === 'normal'
            ? 'bg-success-50 dark:bg-success-900/20 border-success-100 dark:border-success-800'
            : 'bg-warning-50 dark:bg-warning-900/20 border-warning-100 dark:border-warning-800'
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <svg className={`w-5 h-5 ${finding.status === 'normal' ? 'text-success-600 dark:text-success-400' : 'text-warning-600 dark:text-warning-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <p className={`text-sm font-semibold ${finding.status === 'normal' ? 'text-success-800 dark:text-success-300' : 'text-warning-800 dark:text-warning-300'}`}>អនុសាសន៍</p>
          </div>
          <ul className="space-y-2">
            {detail.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${finding.status === 'normal' ? 'bg-success-400 dark:bg-success-500' : 'bg-warning-400 dark:bg-warning-500'}`} />
                <p className={`text-sm ${finding.status === 'normal' ? 'text-success-700 dark:text-success-300' : 'text-warning-700 dark:text-warning-300'}`}>{rec}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-8 pt-2 space-y-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-full py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-3 transition-all ${
            isPlaying
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
              : 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
          }`}
        >
          {isPlaying ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
              កំពុងអាន... ប៉ះដើម្បីឈប់
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              ស្ដាប់ការពន្យល់ (TTS)
            </>
          )}
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center gap-2 py-4 bg-white dark:bg-slate-800 rounded-2xl border border-neutral-200 dark:border-slate-700 active:scale-95 transition-transform">
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <span className="text-sm font-medium text-neutral-800 dark:text-white">ចែករំលែក</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">Share</span>
          </button>

          <button
            onClick={() => setShowCaregiverModal(true)}
            className="flex flex-col items-center gap-2 py-4 bg-white dark:bg-slate-800 rounded-2xl border border-neutral-200 dark:border-slate-700 active:scale-95 transition-transform"
          >
            <svg className="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <span className="text-sm font-medium text-neutral-800 dark:text-white">ផ្ញើអ្នកថែទាំ</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">Send to Caregiver</span>
          </button>
        </div>

        <button className="w-full py-4 bg-white dark:bg-slate-800 rounded-2xl border border-neutral-200 dark:border-slate-700 flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <span className="text-sm font-medium text-neutral-800 dark:text-white">កត់ត្រាចំណាំ</span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Save Notes</span>
        </button>
      </div>

      <SendToCaregiverModal isOpen={showCaregiverModal} onClose={() => setShowCaregiverModal(false)} />
    </div>
  )
}
