interface BookingStatusProps {
  status: 'pending' | 'confirmed' | 'cancelled';
}

export default function BookingStatus({ status }: BookingStatusProps) {
  const statusStyles: Record<BookingStatusProps['status'], string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded ${statusStyles[status] || 'bg-gray-100'}`}>
      {status}
    </span>
  );
}