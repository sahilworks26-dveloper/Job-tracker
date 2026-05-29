export const STATUS_OPTIONS = ['Applied', 'Interview', 'Offer', 'Rejected'];

export const STATUS_LABELS = {
  Applied: 'Applied',
  Interview: 'Interview',
  Offer: 'Offer',
  Rejected: 'Rejected',
};

export const STATUS_COLORS = {
  Applied: 'bg-blue-100 text-blue-800 ring-blue-200/60',
  Interview: 'bg-amber-100 text-amber-900 ring-amber-200/60',
  Offer: 'bg-emerald-100 text-emerald-800 ring-emerald-200/60',
  Rejected: 'bg-red-100 text-red-800 ring-red-200/60',
};

export const STATUS_CARD_STYLES = {
  Applied: {
    card: 'border-blue-200/80 bg-gradient-to-br from-blue-50 to-white',
    icon: 'bg-blue-500/10 text-blue-600',
    dot: 'bg-blue-500',
    header: 'border-blue-200 bg-blue-50 text-blue-800',
  },
  Interview: {
    card: 'border-amber-200/80 bg-gradient-to-br from-amber-50 to-white',
    icon: 'bg-amber-500/10 text-amber-600',
    dot: 'bg-amber-500',
    header: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  Offer: {
    card: 'border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-white',
    icon: 'bg-emerald-500/10 text-emerald-600',
    dot: 'bg-emerald-500',
    header: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  Rejected: {
    card: 'border-red-200/80 bg-gradient-to-br from-red-50 to-white',
    icon: 'bg-red-500/10 text-red-600',
    dot: 'bg-red-500',
    header: 'border-red-200 bg-red-50 text-red-800',
  },
};

export const FILTER_ACTIVE = {
  All: 'bg-slate-900 text-white shadow-sm',
  Applied: 'bg-blue-600 text-white shadow-sm',
  Interview: 'bg-amber-500 text-white shadow-sm',
  Offer: 'bg-emerald-600 text-white shadow-sm',
  Rejected: 'bg-red-600 text-white shadow-sm',
};

export const STATUS_BUTTON = {
  Applied: {
    active: 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-1',
    idle: 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50',
  },
  Interview: {
    active: 'bg-amber-500 text-white ring-2 ring-amber-500 ring-offset-1',
    idle: 'bg-white text-amber-800 border border-amber-200 hover:bg-amber-50',
  },
  Offer: {
    active: 'bg-emerald-600 text-white ring-2 ring-emerald-600 ring-offset-1',
    idle: 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50',
  },
  Rejected: {
    active: 'bg-red-600 text-white ring-2 ring-red-600 ring-offset-1',
    idle: 'bg-white text-red-700 border border-red-200 hover:bg-red-50',
  },
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const toInputDate = (dateString) => {
  const d = new Date(dateString);
  return d.toISOString().split('T')[0];
};

export const companyInitial = (name) => (name?.trim()?.[0] || '?').toUpperCase();
