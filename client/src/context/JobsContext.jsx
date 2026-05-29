import { createContext, useContext } from 'react';
import { useJobs } from '../hooks/useJobs';

const JobsContext = createContext(null);

export const JobsProvider = ({ children }) => {
  const jobsState = useJobs();
  return <JobsContext.Provider value={jobsState}>{children}</JobsContext.Provider>;
};

export const useJobsContext = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobsContext must be used within JobsProvider');
  }
  return context;
};
