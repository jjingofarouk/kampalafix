// DashboardEarnings.jsx
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardEarnings() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-8">Earnings</h1>
        <p className="text-xl text-gray-700 font-medium">Your earnings overview awaits.</p>
      </main>
    </div>
  );
}