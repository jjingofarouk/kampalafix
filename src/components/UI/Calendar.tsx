import { useState } from 'react';

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <p>Calendar Placeholder</p>
      <p>Selected: {date.toDateString()}</p>
    </div>
  );
}