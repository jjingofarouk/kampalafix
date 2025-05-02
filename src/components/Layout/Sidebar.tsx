import { Link } from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav className="space-y-2">
        <Link to="/dashboard" className="block p-2 hover:bg-orange-100">Dashboard</Link>
        <Link to="/dashboard/bookings" className="block p-2 hover:bg-orange-100">Bookings</Link>
        <Link to="/dashboard/services" className="block p-2 hover:bg-orange-100">Services</Link>
        <Link to="/dashboard/chat" className="block p-2 hover:bg-orange-100">Chat</Link>
      </nav>
    </aside>
  );
}