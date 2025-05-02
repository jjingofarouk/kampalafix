import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function RegisterForm() {
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="Password" required />
      <Button type="submit">Register</Button>
    </form>
  );
}