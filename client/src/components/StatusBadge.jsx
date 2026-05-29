import { STATUS_COLORS } from '../utils/status';

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${STATUS_COLORS[status] || 'bg-slate-100 text-slate-800 ring-slate-200'}`}
  >
    {status}
  </span>
);

export default StatusBadge;
