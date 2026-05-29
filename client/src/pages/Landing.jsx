import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import AppPreview from '../components/AppPreview';

const Landing = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#FAFAF8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/">
            <BrandLogo variant="orange" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <button type="button" onClick={() => scrollTo('home')} className="text-sm font-medium text-slate-600 hover:text-orange-600">
              Home
            </button>
            <button type="button" onClick={() => scrollTo('features')} className="text-sm font-medium text-slate-600 hover:text-orange-600">
              Features
            </button>
            <button type="button" onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-orange-600">
              How It Works
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="text-sm font-medium text-slate-600 hover:text-orange-600">
              Contact
            </button>
          </nav>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Your Personal
              <br />
              <span className="text-orange-500">Job Search</span> Buddy
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-500">
              Track applications, interviews, and offers effortlessly. Stay calm and organized on your career journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Get Started Free
              </Link>
              <button
                type="button"
                onClick={() => scrollTo('features')}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50"
              >
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-4 top-8 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-amber-200/40 blur-2xl" />
            <div className="relative z-10 overflow-hidden rounded-3xl border border-orange-100/80 bg-white shadow-xl shadow-orange-500/10">
              <img
                src="/images/landing-hero.png"
                alt="Peaceful panda — stay calm while tracking your job applications"
                className="h-auto w-full max-w-md object-cover sm:max-w-lg lg:max-w-xl"
              />
            </div>
          </div>
        </div>

        {/* Features — app preview */}
        <div id="features" className="mt-20 lg:mt-28">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Everything in one place</h2>
            <p className="mx-auto mt-2 max-w-xl text-slate-500">
              Applied, Interview, Offer, or Rejected — sort and track every application from your dashboard.
            </p>
          </div>
          <div className="flex justify-center">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-orange-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-500">
            Three simple steps to take control of your job search
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Create account', text: 'Sign up in seconds with your email.' },
              { step: '2', title: 'Add applications', text: 'Log companies, roles, dates, and status.' },
              { step: '3', title: 'Track progress', text: 'Use your dashboard to stay organized.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-xl font-bold text-white shadow-lg shadow-orange-500/30">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/register"
              className="inline-flex rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600"
            >
              Start tracking today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-gradient-to-br from-orange-500 to-amber-500 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Ready to land your next role?</h2>
          <p className="mt-3 text-orange-100">
            Join Job Tracker and never lose track of an application again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-orange-600 shadow-lg hover:bg-orange-50"
            >
              Sign Up Free
            </Link>
            <Link
              to="/login"
              className="rounded-full border-2 border-white/80 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#FAFAF8] py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Job Tracker. Built with React & MongoDB Atlas.
      </footer>
    </div>
  );
};

export default Landing;
