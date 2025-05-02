import Button from '../UI/Button';
import Link from 'next/link'; // Correct import

export default function PaymentError() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
      <p>Please try again or contact support.</p>
      <Link href="/dashboard">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
}