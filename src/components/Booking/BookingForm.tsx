"use client";

import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

export default function BookingForm() {
  const [formData, setFormData] = useState({ location: '', time: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <Input
        type="datetime-local"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />
      <Button type="submit">Book Now</Button>
    </form>
  );
}