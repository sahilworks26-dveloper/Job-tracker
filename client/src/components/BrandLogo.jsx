const BrandLogo = ({ className = '', variant = 'violet', onDark = false }) => {
  const iconBg = variant === 'orange' ? 'bg-orange-500' : 'bg-violet-600';
  const textColor = onDark ? 'text-white' : 'text-slate-900';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBg} shadow-sm`}>
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5 4.5 5 3 6.8 3 9v11a2 2 0 002 2h14a2 2 0 002-2V9c0-2.2-1.5-4-3.5-4.5C16.5 3.5 14.5 2 12 2zm0 2c1.2 0 2.2.5 3 1.2V7H9V5.2C9.8 4.5 10.8 4 12 4zM5 9c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2H5V9zm0 4h14v7H5v-7z" />
        </svg>
      </div>
      <span className={`text-lg font-bold tracking-tight ${textColor}`}>Job Tracker</span>
    </div>
  );
};

export default BrandLogo;
