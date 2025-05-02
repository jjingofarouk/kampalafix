import { useStripe } from '../../hooks/useStripe';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function CheckoutForm() {
  const { handlePayment } = useStripe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handlePayment();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Card Number" />
      <div className="flex space-x-4">
        <Input type="text" placeholder="MM/YY" />
        <Input type="text" placeholder="CVC" />
      </div>
      <Button type="submit">Pay Now</Button>
    </form>
  );
}