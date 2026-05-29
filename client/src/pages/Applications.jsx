import { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useJobsContext } from '../context/JobsContext';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import JobCard from '../components/JobCard';
import StatusFilterBar from '../components/StatusFilterBar';
import ConfirmDialog from '../components/ConfirmDialog';
import { STATUS_OPTIONS, STATUS_CARD_STYLES } from '../utils/status';

const Applications = () => {
  const { jobs, loading, error, deleteJob, updateJob, statusCounts } = useJobsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('desc');
  const [deleteTarget, setDeleteTarget] = useState(null);

  const statusFilter = searchParams.get('status');
  const activeFilter =
    statusFilter && STATUS_OPTIONS.includes(statusFilter) ? statusFilter : 'All';

  useEffect(() => {
    if (statusFilter && !STATUS_OPTIONS.includes(statusFilter)) {
      setSearchParams({}, { replace: true });
    }
  }, [statusFilter, setSearchParams]);

  const filterCounts = useMemo(
    () => ({
      All: jobs.length,
      ...statusCounts,
    }),
    [jobs.length, statusCounts]
  );

  const sortJobs = (list) =>
    [...list].sort((a, b) => {
      const dateA = new Date(a.dateApplied);
      const dateB = new Date(b.dateApplied);
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

  const filteredJobs = useMemo(() => {
    if (activeFilter === 'All') return sortJobs(jobs);
    return sortJobs(jobs.filter((job) => job.status === activeFilter));
  }, [jobs, activeFilter, sortOrder]);

  const groupedJobs = useMemo(() => {
    if (activeFilter !== 'All') return null;
    return STATUS_OPTIONS.map((status) => ({
      status,
      jobs: sortJobs(jobs.filter((j) => j.status === status)),
    }));
  }, [jobs, activeFilter, sortOrder]);

  const handleFilterChange = (status) => {
    if (status === 'All') {
      navigate('/app/applications');
    } else {
      setSearchParams({ status });
    }
  };

  const handleStatusChange = async (id, job) => {
    await updateJob(id, {
      company: job.company,
      title: job.title,
      status: job.status,
      dateApplied: job.dateApplied,
      jobUrl: job.jobUrl || '',
      notes: job.notes || '',
    });
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await deleteJob(deleteTarget._id);
    setDeleteTarget(null);
  };

  if (loading) return <LoadingSpinner label="Loading applications..." />;

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
        title={activeFilter === 'All' ? 'All applications' : activeFilter}
        description={`${filteredJobs.length} of ${jobs.length} application${jobs.length !== 1 ? 's' : ''}`}
        action={
          <Link to="/app/add" className="btn-primary">
            + Add job
          </Link>
        }
      />

      <div className="mb-4">
        <StatusFilterBar
          active={activeFilter}
          onChange={handleFilterChange}
          counts={filterCounts}
        />
      </div>

      <div className="card mb-6 flex justify-end p-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="input-field w-full sm:w-48"
          aria-label="Sort by date"
        >
          <option value="desc">Newest first</option>
          <option value="asc">Oldest first</option>
        </select>
      </div>

      {jobs.length === 0 ? (
        <EmptyState
          title="No applications yet"
          description="Add your first job and set its status to Applied, Interview, Offer, or Rejected."
          action={
            <Link to="/app/add" className="btn-primary">
              Add application
            </Link>
          }
        />
      ) : activeFilter === 'All' && groupedJobs ? (
        <div className="space-y-10">
          {groupedJobs.map(({ status, jobs: sectionJobs }) => (
            <section key={status}>
              <div
                className={`mb-4 flex items-center justify-between rounded-xl border px-4 py-3 ${STATUS_CARD_STYLES[status].header}`}
              >
                <h2 className="text-lg font-semibold">{status}</h2>
                <span className="text-sm font-medium">{sectionJobs.length} jobs</span>
              </div>
              {sectionJobs.length === 0 ? (
                <p className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-500">
                  No {status.toLowerCase()} applications
                </p>
              ) : (
                <div className="space-y-4">
                  {sectionJobs.map((job) => (
                    <JobCard
                      key={job._id}
                      job={job}
                      onDelete={setDeleteTarget}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      ) : filteredJobs.length === 0 ? (
        <EmptyState
          title={`No ${activeFilter} applications`}
          description={`You don't have any jobs marked as ${activeFilter} yet.`}
          action={
            <Link to="/app/applications" className="btn-secondary">
              View all
            </Link>
          }
        />
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onDelete={setDeleteTarget}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete application?"
        message={`Remove "${deleteTarget?.company} — ${deleteTarget?.title}"? This cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default Applications;
