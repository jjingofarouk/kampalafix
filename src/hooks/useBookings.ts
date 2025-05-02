"use client";

import { useState, useEffect } from 'react';
import { getDocuments } from '../firebase/db';
import { Booking } from '../types/booking';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getDocuments<Booking>('bookings');
      setBookings(data);
    };
    fetchBookings();
  }, []);

  return { bookings };
}