import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await api.get('/jobs');
      setJobs(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const addJob = async (jobData) => {
    const { data } = await api.post('/jobs', jobData);
    setJobs((prev) => [data, ...prev].sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied)));
    return data;
  };

  const updateJob = async (id, jobData) => {
    const { data } = await api.put(`/jobs/${id}`, jobData);
    setJobs((prev) =>
      prev
        .map((job) => (job._id === id ? data : job))
        .sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied))
    );
    return data;
  };

  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  const statusCounts = jobs.reduce(
    (acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 }
  );

  return {
    jobs,
    loading,
    error,
    statusCounts,
    fetchJobs,
    addJob,
    updateJob,
    deleteJob,
  };
};
