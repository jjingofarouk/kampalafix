export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
className?: string;
  date: string; // or Date, depending on your Firestore data
  status: 'pending' | 'confirmed' | 'cancelled';
}