import { useEffect } from "react";
import logo from "../assets/splash-logo.png";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-900 px-6 transition-colors">
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="SmartReport Logo"
          className="w-68 h-68 object-contain"
        />
        <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-4">
          យល់ដឹងពីសុខភាពរបស់អ្នក
        </p>
      </div>

      <div className="absolute bottom-8 text-xs text-neutral-300 dark:text-neutral-600">
        v1.0.0
      </div>
    </div>
  );
}
