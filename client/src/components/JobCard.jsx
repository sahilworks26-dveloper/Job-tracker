import { useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import StatusSelector from './StatusSelector';
import { companyInitial, formatDate } from '../utils/status';

const JobCard = ({ job, onDelete, onStatusChange }) => {
  const [updating, setUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    if (newStatus === job.status || updating) return;
    setUpdating(true);
    try {
      await onStatusChange(job._id, { ...job, status: newStatus });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <article className="card flex flex-col gap-4 p-5 transition hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-sm">
            {companyInitial(job.company)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-base font-semibold text-slate-900">{job.company}</h3>
              <StatusBadge status={job.status} />
            </div>
            <p className="mt-0.5 text-sm text-slate-600">{job.title}</p>
            <p className="mt-2 text-xs font-medium text-slate-400">
              Applied {formatDate(job.dateApplied)}
            </p>
            {job.notes && (
              <p className="mt-2 line-clamp-2 text-xs text-slate-500">{job.notes}</p>
            )}
            {job.jobUrl && (
              <a
                href={job.jobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
              >
                View posting
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <Link to={`/app/edit/${job._id}`} className="btn-secondary">
            Edit
          </Link>
          <button type="button" onClick={() => onDelete(job)} className="btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Move to
        </p>
        <StatusSelector
          value={job.status}
          onChange={handleStatusChange}
          size="sm"
          disabled={updating}
        />
      </div>
    </article>
  );
};

export default JobCard;
