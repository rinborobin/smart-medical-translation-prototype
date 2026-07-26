import { useState } from 'react'

const relations = [
  { value: 'mother', label: 'ម្ដាយ', labelEn: 'Mother' },
  { value: 'father', label: 'ឪពុក', labelEn: 'Father' },
  { value: 'grandmother', label: 'ជីដូន', labelEn: 'Grandmother' },
  { value: 'grandfather', label: 'ជីតា', labelEn: 'Grandfather' },
  { value: 'sibling', label: 'បងប្អូន', labelEn: 'Sibling' },
  { value: 'other', label: 'ផ្សេងៗ', labelEn: 'Other' },
]

const avatarLetters = {
  mother: 'ម',
  father: 'ឪ',
  grandmother: 'ជ',
  grandfather: 'ជ',
  sibling: 'ប',
  other: 'ផ',
}

export default function AddFamilyScreen({ onNavigate, onAdd }) {
  const [mode, setMode] = useState('manual')
  const [name, setName] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [phone, setPhone] = useState('')
  const [relation, setRelation] = useState('')
  const [scanned, setScanned] = useState(false)

  const handleManualAdd = () => {
    if (!name || !relation) return
    const selected = relations.find((r) => r.value === relation)
    onAdd({
      name,
      nameEn: nameEn || name,
      relation: selected.label,
      relationEn: selected.labelEn,
      phone: phone || 'មិនមាន',
      avatar: avatarLetters[relation] || name.charAt(0).toUpperCase(),
    })
    onNavigate('caregiver')
  }

  const handleQrAdd = () => {
    setScanned(true)
    setTimeout(() => {
      onAdd({
        name: 'ប៉ា វិចិត្រ',
        nameEn: 'Vichet Pa',
        relation: 'ឪពុក',
        relationEn: 'Father',
        phone: '+855 23 456 789',
        avatar: 'វ',
      })
      onNavigate('caregiver')
    }, 1200)
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
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">បន្ថែមអ្នកថែទាំ</h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">Add Caregiver</p>
        </div>
      </div>

      <div className="px-6 pt-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-1.5 border border-neutral-100 dark:border-slate-700 flex">
          <button
            onClick={() => setMode('manual')}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              mode === 'manual'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            បញ្ចូលដៃ
          </button>
          <button
            onClick={() => setMode('qr')}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              mode === 'qr'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            ស្កេន QR
          </button>
        </div>
      </div>

      {mode === 'manual' ? (
        <div className="flex-1 px-6 pt-6 pb-8 space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary-50 dark:bg-primary-900/20 rounded-3xl flex items-center justify-center border-2 border-dashed border-primary-200 dark:border-primary-800">
              <svg className="w-10 h-10 text-primary-400 dark:text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                ឈ្មោះ (ខ្មែរ)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="បញ្ចូលឈ្មោះ..."
                className="w-full px-4 py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Name (English)
              </label>
              <input
                type="text"
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                placeholder="Enter name..."
                className="w-full px-4 py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                លេខទូរស័ព្ទ
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+855 12 345 678"
                className="w-full px-4 py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                ទំនាក់ទំនង
              </label>
              <div className="grid grid-cols-2 gap-2">
                {relations.map((rel) => (
                  <button
                    key={rel.value}
                    onClick={() => setRelation(rel.value)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      relation === rel.value
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <div className="text-center">
                      <p>{rel.label}</p>
                      <p className="text-xs opacity-70 mt-0.5">{rel.labelEn}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <p className="text-xs text-primary-700 dark:text-primary-300 leading-relaxed">
              អ្នកថែទាំនឹងទទួលបានការជូនដំណឹងដើម្បីបព្ជាក់ថាពួកគេត្រូវបានបញ្ចូល។ ពួកគេអាចគ្រប់គ្រងការចែករំលែករបាយការណ៍បានគ្រប់ពេល។
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-6 pt-6 pb-8 flex flex-col items-center">
          <div className="w-full max-w-sm aspect-[3/4] bg-neutral-900 rounded-3xl overflow-hidden relative border-4 border-neutral-200 dark:border-slate-700 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.75a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Zm10 0a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2ZM3.75 14.75a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Zm15-10a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2Z" />
                </svg>
                <p className="text-sm font-medium opacity-80">សួរអ្នកថែទាំដាក់ QR ក្នុងបន្ទាត់</p>
                <p className="text-xs opacity-50 mt-1">Position QR code inside frame</p>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-white/50 rounded-2xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary-400 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary-400 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary-400 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary-400 rounded-br-lg" />
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button
                onClick={handleQrAdd}
                disabled={scanned}
                className="bg-white text-neutral-900 px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg active:scale-95 transition-transform disabled:opacity-70"
              >
                {scanned ? 'កំពុងស្កេន...' : 'សញ្ញាសម្គាល់ QR'}
              </button>
            </div>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-6 leading-relaxed">
            សួរអ្នកថែទាំបើកការកំណត់ &gt; QR របស់ពួកគេ<br />រួចស្កេន QR ដើម្បីបញ្ចូលពួកគេ
          </p>
        </div>
      )}

      {mode === 'manual' && (
        <div className="px-6 pb-8 pt-4">
          <button
            onClick={handleManualAdd}
            disabled={!name || !relation}
            className={`w-full py-4 rounded-2xl text-base font-semibold transition-all ${
              name && relation
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 active:scale-[0.98]'
                : 'bg-neutral-200 dark:bg-slate-700 text-neutral-400 dark:text-neutral-500'
            }`}
          >
            បន្ថែមអ្នកថែទាំ
          </button>
        </div>
      )}
    </div>
  )
}
