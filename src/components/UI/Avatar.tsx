import { getInitials } from '../../utils/getInitials';

interface AvatarProps {
  name: string;
  image?: string;
}

export default function Avatar({ name, image }: AvatarProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
      {image ? (
        <img src={image} alt={name} className="w-full h-full rounded-full" />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}