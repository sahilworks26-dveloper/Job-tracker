const FinanceAuthIllustration = () => (
  <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-blue-600 px-10 py-16 text-white">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
    </div>

    <div className="relative z-10 flex max-w-md flex-col items-center text-center">
      {/* Success badge */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-violet-900/20">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Finance vault / safe */}
      <svg
        className="w-full max-w-[280px] drop-shadow-2xl"
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse cx="140" cy="220" rx="90" ry="12" fill="#000" opacity="0.2" />
        <rect x="60" y="70" width="160" height="130" rx="24" fill="url(#vaultGrad)" />
        <rect x="60" y="70" width="160" height="130" rx="24" stroke="#93C5FD" strokeWidth="2" opacity="0.4" />
        <rect x="115" y="55" width="50" height="22" rx="6" fill="#1E3A8A" />
        <ellipse cx="140" cy="58" rx="18" ry="6" fill="#1E40AF" />
        <circle cx="140" cy="52" r="10" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
        <rect x="118" y="115" width="44" height="36" rx="8" fill="#FACC15" />
        <circle cx="128" cy="128" r="3" fill="#22C55E" />
        <circle cx="140" cy="128" r="3" fill="#22C55E" />
        <circle cx="152" cy="128" r="3" fill="#4ADE80" opacity="0.6" />
        <path d="M75 100 L85 95 L88 115 L78 120 Z" fill="#3B82F6" opacity="0.8" />
        <defs>
          <linearGradient id="vaultGrad" x1="60" y1="70" x2="220" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="mt-10 text-2xl font-bold leading-snug sm:text-3xl">
        Invest in your career
      </h2>
      <p className="mt-4 text-base leading-relaxed text-violet-100 sm:text-lg">
        Track every opportunity like a portfolio — organized, secure, and always within reach.
      </p>
      <ul className="mt-8 space-y-3 text-left text-sm text-violet-100/90">
        <li className="flex items-center gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
          Monitor applications at a glance
        </li>
        <li className="flex items-center gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
          Never miss a follow-up deadline
        </li>
        <li className="flex items-center gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
          Build momentum toward your next role
        </li>
      </ul>
    </div>
  </div>
);

export default FinanceAuthIllustration;
