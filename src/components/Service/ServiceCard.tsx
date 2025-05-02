import { Service } from '../../types/service';
import RatingStars from '../UI/RatingStars';
import Button from '../UI/Button';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold">{service.name}</h3>
      <p>{service.description}</p>
      <RatingStars rating={service.rating} />
      <Button>Book Now</Button>
    </div>
  );
}