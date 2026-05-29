const Phone = ({ children, className = '' }) => (
  <div className={`overflow-hidden rounded-[2rem] border-[5px] border-slate-800 bg-slate-800 shadow-2xl ${className}`}>
    <div className="rounded-[1.5rem] bg-white">{children}</div>
  </div>
);

const AppPreview = () => (
  <div className="relative flex items-end justify-center gap-4">
    <Phone className="z-10 w-[200px] -rotate-6 sm:w-[220px]">
      <div className="p-4">
        <p className="text-[10px] text-slate-400">Good morning,</p>
        <p className="text-sm font-bold text-slate-900">Alex Johnson</p>
        <div className="mt-3 rounded-xl bg-orange-50 p-3">
          <p className="text-[10px] font-medium text-orange-600">Active applications</p>
          <p className="text-2xl font-bold text-slate-900">12</p>
          <p className="text-[10px] text-emerald-600 font-medium">↑ 3 this week</p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-2">
            <div>
              <p className="text-[10px] font-semibold text-slate-800">Google</p>
              <p className="text-[9px] text-slate-500">Frontend Dev</p>
            </div>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[8px] font-medium text-blue-700">Applied</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-2">
            <div>
              <p className="text-[10px] font-semibold text-slate-800">Stripe</p>
              <p className="text-[9px] text-slate-500">React Engineer</p>
            </div>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[8px] font-medium text-amber-800">Interview</span>
          </div>
        </div>
      </div>
    </Phone>

    <Phone className="w-[200px] rotate-3 sm:w-[230px]">
      <div className="p-4">
        <p className="text-sm font-bold text-slate-900">Dashboard</p>
        <p className="text-[10px] text-slate-500">Application trends</p>
        <div className="mt-3 flex gap-1">
          {['Applied', 'Interview', 'Offer'].map((t) => (
            <span key={t} className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[8px] text-slate-600">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 flex h-24 items-end justify-between gap-1 px-1">
          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
            <div
              key={i}
              className="w-4 rounded-t bg-gradient-to-t from-orange-500 to-orange-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1 text-center">
          <div className="rounded-lg bg-blue-50 py-2">
            <p className="text-sm font-bold text-blue-700">5</p>
            <p className="text-[8px] text-blue-600">Applied</p>
          </div>
          <div className="rounded-lg bg-amber-50 py-2">
            <p className="text-sm font-bold text-amber-700">3</p>
            <p className="text-[8px] text-amber-600">Interview</p>
          </div>
          <div className="rounded-lg bg-emerald-50 py-2">
            <p className="text-sm font-bold text-emerald-700">1</p>
            <p className="text-[8px] text-emerald-600">Offer</p>
          </div>
        </div>
      </div>
    </Phone>
  </div>
);

export default AppPreview;
