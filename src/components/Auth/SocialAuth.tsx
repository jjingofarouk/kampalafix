import Button from '../UI/Button';

export default function SocialAuth() {
  return (
    <div className="space-y-4">
      <Button variant="outline">Sign in with Google</Button>
      <Button variant="outline">Sign in with Facebook</Button>
    </div>
  );
}