import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BrandLogo from '../components/BrandLogo';
import LoginIllustration from '../components/LoginIllustration';

const REMEMBER_KEY = 'rememberedEmail';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(REMEMBER_KEY);
    if (saved) {
      setEmail(saved);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      if (rememberMe) {
        localStorage.setItem(REMEMBER_KEY, email);
      } else {
        localStorage.removeItem(REMEMBER_KEY);
      }
      navigate('/app');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left — form */}
      <div className="flex w-full flex-col px-6 py-8 sm:px-10 lg:w-[44%] lg:max-w-xl lg:px-14 xl:px-20">
        <Link to="/" className="mb-auto">
          <BrandLogo variant="orange" />
        </Link>

        <div className="my-auto w-full max-w-md py-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Holla, Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Hey, welcome back to your special place
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
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />

            <input
              id="password"
              type="password"
              required
              minLength={6}
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />

            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => alert('Password reset is not available in this app.')}
                className="text-sm text-slate-500 transition hover:text-orange-600"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-semibold text-orange-600 hover:text-orange-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right — illustration */}
      <div className="hidden flex-1 items-center justify-center bg-white p-6 lg:flex lg:p-10">
        <div className="h-full w-full max-w-2xl">
          <LoginIllustration />
        </div>
      </div>
    </div>
  );
};

export default Login;
