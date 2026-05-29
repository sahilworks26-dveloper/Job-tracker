import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BrandLogo from '../components/BrandLogo';
import LoginIllustration from '../components/LoginIllustration';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      navigate('/app');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex w-full flex-col px-6 py-8 sm:px-10 lg:w-[44%] lg:max-w-xl lg:px-14 xl:px-20">
        <Link to="/" className="mb-auto">
          <BrandLogo variant="orange" />
        </Link>

        <div className="my-auto w-full max-w-md py-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Start tracking your job applications today
          </p>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              id="email"
              type="email"
              required
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              id="password"
              type="password"
              required
              minLength={6}
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              id="confirmPassword"
              type="password"
              required
              minLength={6}
              aria-label="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600 disabled:opacity-60"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-orange-600 hover:text-orange-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center bg-white p-6 lg:flex lg:p-10">
        <div className="h-full w-full max-w-2xl">
          <LoginIllustration />
        </div>
      </div>
    </div>
  );
};

export default Register;
