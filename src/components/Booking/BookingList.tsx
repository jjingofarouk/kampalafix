import React from 'react';
import { Booking } from '../../types/booking'; // Adjust path as needed

interface BookingListProps {
  bookings: Booking[];
  className?: string;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, className }) => {
  return (
    <div className={className}>
      {bookings.length === 0 ? (
        <p className="p-4 text-gray-500">No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} className="p-4 border-b border-gray-200">
            <p className="text-lg font-semibold">{booking.serviceName}</p>
            <p className="text-sm text-gray-500">{booking.date}</p>
            <p className="text-sm italic">{booking.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;