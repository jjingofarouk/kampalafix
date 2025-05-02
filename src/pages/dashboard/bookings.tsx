// DashboardBookings.jsx
import BookingList from '../../components/Booking/BookingList';
import { useBookings } from '../../hooks/useBookings';
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardBookings() {
  const { bookings } = useBookings();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-8">Your Bookings</h1>
        <BookingList bookings={bookings} className="rounded-xl shadow-lg bg-white" />
      </main>
    </div>
  );
}