import Sidebar from '../../components/Layout/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </div>
    </div>
  );
}
