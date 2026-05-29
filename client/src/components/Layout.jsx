import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BriefcaseIcon, DashboardIcon, ListIcon, PlusIcon, LogoutIcon } from './icons';
import SidebarStatusNav from './SidebarStatusNav';

const navItems = [
  { to: '/app', label: 'Dashboard', icon: DashboardIcon, end: true },
  { to: '/app/applications', label: 'Applications', icon: ListIcon },
  { to: '/app/add', label: 'Add Job', icon: PlusIcon },
];

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? 'bg-white/15 text-white shadow-sm'
        : 'text-indigo-100 hover:bg-white/10 hover:text-white'
    }`;

  const sidebar = (
    <aside className="flex h-full w-64 flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-brand-900 p-5 text-white">
      <div className="mb-10 flex items-center gap-3 px-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
          <BriefcaseIcon className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight">Job Tracker</h1>
          <p className="text-xs text-indigo-200">Application hub</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Icon className="h-5 w-5 shrink-0 opacity-90" />
            {label}
          </NavLink>
        ))}
        <SidebarStatusNav onNavigate={() => setSidebarOpen(false)} />
      </nav>

      <div className="mt-auto border-t border-white/10 pt-5">
        <p className="truncate px-3 text-xs text-indigo-200">{user?.email}</p>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-indigo-100 transition hover:bg-white/10 hover:text-white"
        >
          <LogoutIcon className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen lg:flex">
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebar}
      </div>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-semibold text-slate-900">Job Tracker</span>
          <div className="w-10" />
        </header>

        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <div className="page-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
