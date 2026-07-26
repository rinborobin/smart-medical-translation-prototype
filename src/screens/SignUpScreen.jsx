import { useState } from "react";
import logo from "../assets/logo.png";

export default function SignUpScreen({ onNavigate }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <div className="flex-1 px-6 pt-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <img
            src={logo}
            alt="SmartReport Logo"
            className="w-34 h-34 object-contain"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              ឈ្មោះពេញ
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="បញ្ចូលឈ្មោះរបស់អ្នក..."
              className="w-full px-4 py-4 bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              លេខទូរស័ព្ទ
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 dark:text-neutral-500">
                +855
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="12 345 6789"
                className="w-full pl-16 pr-4 py-4 bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              ពាក្យសម្ងាត់
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="បញ្ចូលពាក្យសម្ងាត់..."
                className="w-full px-4 py-4 bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              បញ្ជាក់ពាក្យសម្ងាត់
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="បញ្ចូលពាក្យសម្ងាត់ម្តងទៀត..."
                className="w-full px-4 py-4 bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-2 focus:ring-primary-50 dark:focus:ring-primary-900"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 pt-4 space-y-4">
        <button
          onClick={() => onNavigate("home")}
          className="w-full py-4 bg-primary-600 text-white rounded-2xl text-base font-semibold shadow-lg shadow-primary-600/20 active:scale-[0.98] transition-transform"
        >
          ចុះឈ្មោះ
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-neutral-200 dark:bg-slate-700" />
          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            ឬ
          </span>
          <div className="flex-1 h-px bg-neutral-200 dark:bg-slate-700" />
        </div>

        <button
          onClick={() => onNavigate("home")}
          className="w-full py-4 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-2xl text-base font-semibold text-neutral-800 dark:text-white flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          ចុះឈ្មោះដោយប្រើ Google
        </button>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          មានគណនីរួចហើយ?{" "}
          <button
            onClick={() => onNavigate("signIn")}
            className="text-primary-600 dark:text-primary-400 font-semibold"
          >
            ចូលគណនី
          </button>
        </p>
      </div>
    </div>
  );
}
