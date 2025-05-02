export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}