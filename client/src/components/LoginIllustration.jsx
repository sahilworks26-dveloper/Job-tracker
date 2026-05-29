const LoginIllustration = () => (
  <div className="relative h-full min-h-[520px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-violet-500 via-violet-600 to-indigo-700">
    {/* clouds */}
    <div className="absolute left-8 top-16 h-10 w-20 rounded-full bg-white/25 blur-[1px]" />
    <div className="absolute left-20 top-12 h-8 w-14 rounded-full bg-white/20" />
    <div className="absolute right-16 top-20 h-12 w-24 rounded-full bg-white/25" />
    <div className="absolute right-32 top-10 h-8 w-16 rounded-full bg-white/15" />
    <div className="absolute bottom-32 left-12 h-10 w-20 rounded-full bg-white/20" />

    {/* check bubble */}
    <div className="absolute left-[18%] top-[38%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600">
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>

    {/* lock */}
    <div className="absolute right-[14%] top-[32%] z-20">
      <svg className="h-16 w-16 text-white drop-shadow-md" viewBox="0 0 64 64" fill="currentColor">
        <path d="M20 28V22a12 12 0 1124 0v6h2a4 4 0 014 4v22a4 4 0 01-4 4H18a4 4 0 01-4-4V32a4 4 0 014-4h2zm4 0h16v-6a8 8 0 10-16 0v6z" opacity="0.95" />
      </svg>
    </div>

    {/* phone */}
    <div className="absolute left-1/2 top-1/2 z-10 w-[200px] -translate-x-1/2 -translate-y-[45%]">
      <div className="rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-violet-400/60 bg-violet-500/20">
            <svg className="h-9 w-9 text-violet-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.24 2 7 4.24 7 7v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-1V7c0-2.76-2.24-5-5-5zm-3 6V7c0-1.66 1.34-3 3-3s3 1.34 3 3v1H9zm2 9.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
            </svg>
          </div>
          <div className="mx-auto h-1.5 w-3/4 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400" />
          </div>
          <p className="mt-4 text-center text-[10px] leading-tight text-slate-300">
            Please tap your finger
            <br />
            to your phone
          </p>
        </div>
      </div>
    </div>

    {/* character */}
    <div className="absolute bottom-[12%] left-1/2 z-30 -translate-x-[30%]">
      <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="188" rx="40" ry="8" fill="black" opacity="0.15" />
        <path d="M55 95 L85 75 L90 130 L50 140 Z" fill="#FACC15" />
        <path d="M58 130 L88 120 L92 175 L54 185 Z" fill="#F8FAFC" />
        <path d="M62 175 L75 175 L78 195 L60 195 Z" fill="#1E293B" />
        <path d="M82 175 L95 175 L98 195 L80 195 Z" fill="#1E293B" />
        <circle cx="78" cy="62" r="18" fill="#FDBA74" />
        <path d="M62 55 Q78 48 94 55" stroke="#1E293B" strokeWidth="3" fill="none" />
        <path d="M95 78 L115 65" stroke="#FDBA74" strokeWidth="10" strokeLinecap="round" />
        <circle cx="118" cy="62" r="6" fill="#FDBA74" />
      </svg>
    </div>
  </div>
);

export default LoginIllustration;
