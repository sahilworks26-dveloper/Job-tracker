import { useNavigate, useParams } from 'react-router-dom';
import JobForm from '../components/JobForm';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';
import { useJobsContext } from '../context/JobsContext';
import { toInputDate } from '../utils/status';

const EditJob = () => {
  const { id } = useParams();
  const { jobs, loading, updateJob } = useJobsContext();
  const navigate = useNavigate();

  const job = jobs.find((j) => j._id === id);

  const handleSubmit = async (formData) => {
    await updateJob(id, formData);
    navigate('/app/applications');
  };

  if (loading) return <LoadingSpinner />;

  if (!job) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        Job not found.{' '}
        <button type="button" onClick={() => navigate('/app/applications')} className="font-medium underline">
          Back to applications
        </button>
      </div>
    );
  }

  const initialData = {
    company: job.company,
    title: job.title,
    status: job.status,
    dateApplied: toInputDate(job.dateApplied),
    jobUrl: job.jobUrl,
    notes: job.notes,
  };

  return (
    <div>
      <PageHeader
        title="Edit application"
        description={`${job.company} — ${job.title}`}
      />
      <JobForm
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
        submitLabel="Save changes"
      />
    </div>
  );
};

export default EditJob;
