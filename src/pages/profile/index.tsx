import { useAuth } from '../../hooks/useAuth';
import Avatar from '../../components/UI/Avatar';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      {user && (
        <div className="bg-white p-6 rounded-lg shadow">
          <Avatar name={user.email} />
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}