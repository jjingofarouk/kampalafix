import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';

export default function EditProfile() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
        <Input type="text" defaultValue={user?.email} placeholder="Email" />
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
}