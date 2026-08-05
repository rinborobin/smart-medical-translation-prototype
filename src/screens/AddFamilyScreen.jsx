import { useState } from "react";

const relations = [
  { value: "mother", label: "ម្ដាយ", labelEn: "Mother" },
  { value: "father", label: "ឪពុក", labelEn: "Father" },
  { value: "grandmother", label: "ជីដូន", labelEn: "Grandmother" },
  { value: "grandfather", label: "ជីតា", labelEn: "Grandfather" },
  { value: "sibling", label: "បងប្អូន", labelEn: "Sibling" },
  { value: "other", label: "ផ្សេងៗ", labelEn: "Other" },
];

const avatarLetters = {
  mother: "ម",
  father: "ឪ",
  grandmother: "ជ",
  grandfather: "ជ",
  sibling: "ប",
  other: "ផ",
};

export default function AddFamilyScreen({
  onNavigate,
  onAdd,
  language = "kh",
}) {
  const [mode, setMode] = useState("manual");
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [flashOn, setFlashOn] = useState(false);
  const t = (kh, en) => (language === "en" ? en : kh);

  const handleManualAdd = () => {
    if (!name || !relation) return;
    const selected = relations.find((r) => r.value === relation);
    onAdd({
      name,
      nameEn: nameEn || name,
      relation: selected.label,
      relationEn: selected.labelEn,
      phone: phone || t("មិនមាន", "Not provided"),
      avatar: avatarLetters[relation] || name.charAt(0).toUpperCase(),
    });
    onNavigate("caregiver");
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3 px-6 pt-14 pb-4">
        <button
          onClick={() => onNavigate("caregiver")}
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
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t("បន្ថែមអ្នកថែទាំ", "Add Caregiver")}
          </h1>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            {t("Add Caregiver", "Add Caregiver")}
          </p>
        </div>
      </div>

      <div className="px-6 pt-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-1.5 border border-neutral-100 dark:border-slate-700 flex">
          <button
            onClick={() => setMode("manual")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              mode === "manual"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {t("បញ្ចូលដៃ", "Manual")}
          </button>
          <button
            onClick={() => setMode("qr")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              mode === "qr"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {t("ស្កេន QR", "Scan QR")}
          </button>
        </div>
      </div>

      {mode === "manual" ? (
        <div className="flex-1 px-6 pt-6 pb-8 space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary-50 dark:bg-primary-900/20 rounded-3xl flex items-center justify-center border-2 border-dashed border-primary-200 dark:border-primary-800">
              <svg
                className="w-10 h-10 text-primary-400 dark:text-primary-600"
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
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t("ឈ្មោះ (ខ្មែរ)", "Name (Khmer)")}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("បញ្ចូលឈ្មោះ...", "Enter name...")}
                className="w-full px-4 py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t("Name (English)", "Name (English)")}
              </label>
              <input
                type="text"
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                placeholder={t("Enter name...", "Enter name...")}
                className="w-full px-4 py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t("លេខទូរស័ព្ទ", "Phone Number")}
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
                {t("ទំនាក់ទំនង", "Relation")}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {relations.map((rel) => (
                  <button
                    key={rel.value}
                    onClick={() => setRelation(rel.value)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      relation === rel.value
                        ? "bg-primary-600 text-white"
                        : "bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 text-neutral-600 dark:text-neutral-400"
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
            <svg
              className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <p className="text-xs text-primary-700 dark:text-primary-300 leading-relaxed">
              {t(
                "អ្នកថែទាំនឹងទទួលបានការជូនដំណឹងដើម្បីបព្ជាក់ថាពួកគេត្រូវបានបញ្ចូល។ ពួកគេអាចគ្រប់គ្រងការចែករំលែករបាយការណ៍បានគ្រប់ពេល។",
                "The caregiver will receive a notification confirming they were added. They can manage report sharing anytime.",
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-6 pt-6 pb-8 flex flex-col items-center">
          <div className="w-full max-w-sm aspect-[3/4] bg-neutral-900 rounded-3xl overflow-hidden relative border-4 border-neutral-200 dark:border-slate-700 shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-400 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-400 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-400 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-400 rounded-br-xl" />
                <div className="absolute left-2 right-2 h-0.5 bg-primary-400/60 -translate-y-0 animate-scan" />
              </div>
            </div>

            <div className="text-center mt-6 max-w-sm space-y-1">
              <p className="text-sm font-medium text-neutral-400 dark:text-white">
                {t(
                  "សួរអ្នកថែទាំដាក់ QR ក្នុងបន្ទាត់",
                  "Ask the caregiver to place the QR code in frame",
                )}
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                {t(
                  "Position QR code inside frame",
                  "Position QR code inside frame",
                )}
              </p>
            </div>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-3 leading-relaxed max-w-sm">
            {t(
              "សួរអ្នកថែទាំបើកការកំណត់ &gt; QR របស់ពួកគេ",
              "Ask the caregiver to open Settings > QR",
            )}
            <br />
            {t(
              "QR នឹងត្រូវស្កេនស្វ័យប្រវត្តិនៅពេលដាក់ក្នុងបន្ទាត់",
              "The QR code will be scanned automatically when placed in frame",
            )}
          </p>

          <div className="mt-6 w-full max-w-sm grid grid-cols-2 gap-3">
            <button
              onClick={() => setFlashOn(!flashOn)}
              className={`py-4 rounded-2xl border-primary-400 border flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                flashOn
                  ? "bg-yellow-400 border-yellow-400 text-neutral-900"
                  : "bg-white dark:bg-slate-800 border-neutral-100 dark:border-slate-700 text-neutral-700 dark:text-neutral-300"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              {t("Flash", "Flash")}
            </button>

            <button className="py-4 border-primary-400 bg-white dark:bg-slate-800 rounded-2xl border border-neutral-100 dark:border-slate-700 flex items-center justify-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 active:scale-[0.98] transition-transform">
              <svg
                className="w-5 h-5"
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
              {t("បញ្ចូល QR", "Scan QR")}
            </button>
          </div>
        </div>
      )}

      {mode === "manual" && (
        <div className="px-6 pb-8 pt-4">
          <button
            onClick={handleManualAdd}
            disabled={!name || !relation}
            className={`w-full py-4 rounded-2xl text-base font-semibold transition-all ${
              name && relation
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                : "bg-neutral-200 dark:bg-slate-700 text-neutral-400 dark:text-neutral-500"
            }`}
          >
            {t("បន្ថែមអ្នកថែទាំ", "Add Caregiver")}
          </button>
        </div>
      )}
    </div>
  );
}
