import { BriefcaseIcon } from './icons';

const AuthLayout = ({ title, subtitle, children, footer }) => (
  <div className="flex min-h-screen">
    <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-800 p-12 text-white lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
          <BriefcaseIcon className="h-6 w-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">Job Tracker</span>
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-tight">Your job search, organized.</h2>
        <p className="mt-4 max-w-md text-lg text-indigo-100">
          Track every application, interview, and offer in one clean dashboard.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-indigo-100">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Status overview at a glance
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Filter and sort applications
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Notes and job links in one place
          </li>
        </ul>
      </div>
      <p className="text-sm text-indigo-200">Built with React & MongoDB Atlas</p>
    </div>

    <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
      <div className="mb-8 flex items-center gap-3 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
          <BriefcaseIcon className="h-5 w-5" />
        </div>
        <span className="text-lg font-bold text-slate-900">Job Tracker</span>
      </div>

      <div className="mx-auto w-full max-w-md">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        <div className="mt-8">{children}</div>
        {footer && <div className="mt-6 text-center text-sm text-slate-600">{footer}</div>}
      </div>
    </div>
  </div>
);

export default AuthLayout;
