import { Link } from 'react-router-dom';
import { useJobsContext } from '../context/JobsContext';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import StatusBadge from '../components/StatusBadge';
import { STATUS_OPTIONS, STATUS_CARD_STYLES, formatDate } from '../utils/status';
import { STATUS_ICONS } from '../components/icons';

const Dashboard = () => {
  const { jobs, loading, error, statusCounts } = useJobsContext();
  const recentJobs = [...jobs]
    .sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied))
    .slice(0, 5);

  if (loading) return <LoadingSpinner label="Loading dashboard..." />;

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description={`${jobs.length} total application${jobs.length !== 1 ? 's' : ''}`}
        action={
          <Link to="/app/add" className="btn-primary">
            + Add application
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATUS_OPTIONS.map((status) => {
          const styles = STATUS_CARD_STYLES[status];
          return (
            <Link
              key={status}
              to={`/app/applications?status=${status}`}
              className={`card border p-5 transition hover:shadow-md ${styles.card}`}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}>
                  {STATUS_ICONS[status]}
                </div>
                <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600">{status}</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                {statusCounts[status]}
              </p>
            </Link>
          );
        })}
      </div>

      {jobs.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="No applications yet"
            description="Add your first job application to see stats and track your progress."
            action={
              <Link to="/app/add" className="btn-primary">
                Add your first job
              </Link>
            }
          />
        </div>
      ) : (
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Recent applications</h2>
            <Link to="/app/applications" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View all →
            </Link>
          </div>
          <div className="card divide-y divide-slate-100 overflow-hidden">
            {recentJobs.map((job) => (
              <Link
                key={job._id}
                to={`/app/edit/${job._id}`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">{job.company}</p>
                  <p className="truncate text-sm text-slate-500">{job.title}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <StatusBadge status={job.status} />
                  <span className="text-xs text-slate-400">{formatDate(job.dateApplied)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
