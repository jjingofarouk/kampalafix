import { createSlice } from '@reduxjs/toolkit';
import { Booking } from '../types/booking';

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload);
    },
    cancelBooking(state, action) {
      state.bookings = state.bookings.filter((b) => b.id !== action.payload);
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;