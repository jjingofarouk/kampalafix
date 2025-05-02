import { Booking } from '../../types/booking';
import BookingStatus from './BookingStatus';

interface BookingListProps {
  bookings: Booking[];
}

export default function BookingList({ bookings }: BookingListProps) {
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="bg-white p-4 rounded-lg shadow">
          <h3>{booking.serviceName}</h3>
          <p>{booking.date}</p>
          <BookingStatus status={booking.status} />
        </div>
      ))}
    </div>
  );
}