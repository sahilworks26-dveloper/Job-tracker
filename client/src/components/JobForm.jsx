import { useState } from 'react';
import StatusSelector from './StatusSelector';

const JobForm = ({ initialData, onSubmit, onCancel, submitLabel = 'Save' }) => {
  const [form, setForm] = useState({
    company: initialData?.company || '',
    title: initialData?.title || '',
    status: initialData?.status || 'Applied',
    dateApplied: initialData?.dateApplied || new Date().toISOString().split('T')[0],
    jobUrl: initialData?.jobUrl || '',
    notes: initialData?.notes || '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await onSubmit(form);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card mx-auto max-w-xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
              Company name *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={form.company}
              onChange={handleChange}
              className="input-field"
              placeholder="Acme Inc."
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-slate-700">
              Job title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={form.title}
              onChange={handleChange}
              className="input-field"
              placeholder="Frontend Developer"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Status — Applied · Interview · Offer · Rejected
            </label>
            <StatusSelector
              value={form.status}
              onChange={(status) => setForm((prev) => ({ ...prev, status }))}
            />
          </div>

          <div>
            <label htmlFor="dateApplied" className="mb-1.5 block text-sm font-medium text-slate-700">
              Date applied *
            </label>
            <input
              id="dateApplied"
              name="dateApplied"
              type="date"
              required
              value={form.dateApplied}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="jobUrl" className="mb-1.5 block text-sm font-medium text-slate-700">
              Job URL
            </label>
            <input
              id="jobUrl"
              name="jobUrl"
              type="url"
              placeholder="https://..."
              value={form.jobUrl}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-slate-700">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={form.notes}
              onChange={handleChange}
              className="input-field resize-none"
              placeholder="Interview dates, recruiter name, etc."
            />
          </div>
        </div>

        <div className="flex gap-3 border-t border-slate-100 pt-5">
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? 'Saving...' : submitLabel}
          </button>
          {onCancel && (
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default JobForm;
