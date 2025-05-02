import Button from '../UI/Button';
import Input from '../UI/Input';

export default function ResetPassword() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="email" placeholder="Email" required />
      <Button type="submit">Reset Password</Button>
    </form>
  );
}