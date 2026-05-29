import Job, { STATUS_OPTIONS } from '../models/Job.js';

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id }).sort({ dateApplied: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    const { company, title, status, dateApplied, jobUrl, notes } = req.body;

    if (!company || !title || !dateApplied) {
      return res
        .status(400)
        .json({ message: 'Company, title, and date applied are required' });
    }

    if (status && !STATUS_OPTIONS.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const job = await Job.create({
      user: req.user._id,
      company,
      title,
      status: status || 'Applied',
      dateApplied,
      jobUrl: jobUrl || '',
      notes: notes || '',
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { company, title, status, dateApplied, jobUrl, notes } = req.body;

    if (status && !STATUS_OPTIONS.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    job.company = company ?? job.company;
    job.title = title ?? job.title;
    job.status = status ?? job.status;
    job.dateApplied = dateApplied ?? job.dateApplied;
    job.jobUrl = jobUrl ?? job.jobUrl;
    job.notes = notes ?? job.notes;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await job.deleteOne();
    res.json({ message: 'Job removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getJobs, createJob, updateJob, deleteJob };
