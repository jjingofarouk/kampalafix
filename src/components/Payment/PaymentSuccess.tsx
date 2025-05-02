import Button from '../UI/Button';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
      <p>Your booking has been confirmed.</p>
      <Link to="/dashboard/bookings">
        <Button>View Bookings</Button>
      </Link>
    </div>
  );
}