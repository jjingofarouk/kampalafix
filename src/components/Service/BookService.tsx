import { useState } from 'react';
import Calendar from '../UI/Calendar';
import Button from '../UI/Button';

export default function BookService() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Book a Service</h2>
      <Calendar />
      <Button disabled={!selectedDate}>Confirm Booking</Button>
    </div>
  );
}