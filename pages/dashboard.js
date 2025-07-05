import Dashboard from '../src/components/Dashboard';
import Navbar from '../src/components/Navbar';
import PrivateRoute from '../src/components/PrivateRoute';

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <Navbar />
      <Dashboard />
    </PrivateRoute>
  );
}
