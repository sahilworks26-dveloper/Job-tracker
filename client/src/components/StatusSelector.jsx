import { STATUS_OPTIONS, STATUS_BUTTON } from '../utils/status';

const StatusSelector = ({ value, onChange, size = 'md', disabled = false }) => {
  const sizeClass =
    size === 'sm'
      ? 'px-2.5 py-1 text-xs'
      : 'px-3 py-2 text-sm';

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Application status">
      {STATUS_OPTIONS.map((status) => {
        const isActive = value === status;
        const styles = STATUS_BUTTON[status];
        return (
          <button
            key={status}
            type="button"
            disabled={disabled}
            onClick={() => onChange(status)}
            className={`rounded-lg font-semibold transition ${sizeClass} ${
              isActive ? styles.active : styles.idle
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {status}
          </button>
        );
      })}
    </div>
  );
};

export default StatusSelector;
