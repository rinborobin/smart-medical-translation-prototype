import { QRCodeSVG } from 'qrcode.react'

export default function QRCodeScreen({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={() => onNavigate('settings')}
          className="w-11 h-11 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-slate-700"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">QR បញ្ចូលជាអ្នកថែទាំ</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">QR for Adding Caregiver</p>
        </div>
      </div>

      <div className="flex-1 px-6 pt-6 pb-8 flex flex-col items-center">
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-neutral-100 dark:border-slate-700 p-8 shadow-sm w-full max-w-sm">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-700 dark:text-primary-300">សរ</span>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">សុខា រីក</p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">sokha.reak@email.com</p>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-neutral-100 dark:border-slate-700">
              <QRCodeSVG
                value="smartreport://add-caregiver?user=sokha.reak&code=SR-123456"
                size={200}
                level="M"
                bgColor="transparent"
                fgColor="currentColor"
                className="text-neutral-900 dark:text-white"
              />
            </div>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center leading-relaxed">
              សួរអ្នកថែទាំស្កេន QR នេះ<br />ដើម្បីបញ្ចូលអ្នកជាអ្នកតាមដានសុខភាព
            </p>
          </div>
        </div>

        <div className="mt-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-4 flex items-start gap-3 w-full max-w-sm">
          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <p className="text-xs text-primary-700 dark:text-primary-300 leading-relaxed">
            អ្នកថែទាំនឹងទទួលបានការជូនដំណឹងដើម្បីបព្ជាក់ថាពួកគេត្រូវបានបញ្ចូល។ ពួកគេអាចគ្រប់គ្រងការចែករំលែករបាយការណ៍បានគ្រប់ពេល។
          </p>
        </div>
      </div>
    </div>
  )
}
