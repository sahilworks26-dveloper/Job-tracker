import express from 'express';
import protect from '../middleware/auth.js';
import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

const router = express.Router();

router.use(protect);

router.route('/').get(getJobs).post(createJob);
router.route('/:id').put(updateJob).delete(deleteJob);

export default router;
