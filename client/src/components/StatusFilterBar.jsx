import { STATUS_OPTIONS, FILTER_ACTIVE } from '../utils/status';

const StatusFilterBar = ({ active, onChange, counts }) => {
  const tabs = ['All', ...STATUS_OPTIONS];

  return (
    <div className="card p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Filter by status
      </p>
      <div className="flex flex-wrap gap-2">
        {tabs.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onChange(status)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              active === status
                ? FILTER_ACTIVE[status]
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {status}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                active === status ? 'bg-white/25' : 'bg-white text-slate-700'
              }`}
            >
              {counts[status] ?? 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilterBar;
