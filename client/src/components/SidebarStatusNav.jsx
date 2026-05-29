import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useJobsContext } from '../context/JobsContext';
import { STATUS_OPTIONS, STATUS_CARD_STYLES } from '../utils/status';

const linkClass = (active) =>
  `flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition ${
    active
      ? 'bg-white/15 text-white'
      : 'text-indigo-100 hover:bg-white/10 hover:text-white'
  }`;

const SidebarStatusNav = ({ onNavigate }) => {
  const { statusCounts } = useJobsContext();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const currentStatus = searchParams.get('status');
  const onApplications = pathname.startsWith('/app/applications');
  const total = STATUS_OPTIONS.reduce((sum, s) => sum + (statusCounts[s] || 0), 0);

  const handleClick = () => onNavigate?.();

  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-indigo-300">
        By status
      </p>
      <div className="space-y-0.5">
        <Link
          to="/app/applications"
          onClick={handleClick}
          className={linkClass(onApplications && !currentStatus)}
        >
          <span>All applications</span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">{total}</span>
        </Link>
        {STATUS_OPTIONS.map((status) => (
          <Link
            key={status}
            to={`/app/applications?status=${status}`}
            onClick={handleClick}
            className={linkClass(onApplications && currentStatus === status)}
          >
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${STATUS_CARD_STYLES[status].dot}`} />
              {status}
            </span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">
              {statusCounts[status] || 0}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarStatusNav;
