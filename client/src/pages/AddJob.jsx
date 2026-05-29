import { useNavigate } from 'react-router-dom';
import JobForm from '../components/JobForm';
import PageHeader from '../components/PageHeader';
import { useJobsContext } from '../context/JobsContext';

const AddJob = () => {
  const { addJob } = useJobsContext();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await addJob(formData);
    navigate('/app/applications');
  };

  return (
    <div>
      <PageHeader
        title="Add application"
        description="Log a new job you've applied to"
      />
      <JobForm
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
        submitLabel="Add application"
      />
    </div>
  );
};

export default AddJob;
