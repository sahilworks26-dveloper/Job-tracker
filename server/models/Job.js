import mongoose from 'mongoose';

const STATUS_OPTIONS = ['Applied', 'Interview', 'Offer', 'Rejected'];

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: STATUS_OPTIONS,
      default: 'Applied',
    },
    dateApplied: {
      type: Date,
      required: [true, 'Date applied is required'],
    },
    jobUrl: {
      type: String,
      trim: true,
      default: '',
    },
    notes: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);
export { STATUS_OPTIONS };
export default Job;
