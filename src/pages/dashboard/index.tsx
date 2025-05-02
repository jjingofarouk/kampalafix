// Dashboard.jsx
import Sidebar from '../../components/Layout/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Dashboard</h1>
        <p className="text-xl text-gray-700 font-medium">Explore your personalized dashboard.</p>
      </main>
    </div>
  );
}