import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { JobsProvider } from './context/JobsContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';

const AuthLoading = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#FAFAF8]">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
  </div>
);

/** Logged-in users skip auth & landing → app */
const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <AuthLoading />;
  if (user) return <Navigate to="/app" replace />;
  return children;
};

/** Login / register only when logged out */
const AuthRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <AuthLoading />;
  if (user) return <Navigate to="/app" replace />;
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuestRoute>
            <Landing />
          </GuestRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthRoute>
            <Register />
          </AuthRoute>
        }
      />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <JobsProvider>
              <Layout />
            </JobsProvider>
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="applications" element={<Applications />} />
        <Route path="add" element={<AddJob />} />
        <Route path="edit/:id" element={<EditJob />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
