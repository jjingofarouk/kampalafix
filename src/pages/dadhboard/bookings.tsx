import BookingList from '../../components/Booking/BookingList';
import { useBookings } from '../../hooks/useBookings';

export default function DashboardBookings() {
  const { bookings } = useBookings();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
        <BookingList bookings={bookings} />
      </div>
    </div>
  );
}