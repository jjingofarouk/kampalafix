import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardEarnings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Earnings</h1>
        <p>Your earnings overview.</p>
      </div>
    </div>
  );
}