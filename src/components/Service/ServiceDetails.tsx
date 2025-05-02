import { Service } from '../../types/service';
import RatingStars from '../UI/RatingStars';
import Button from '../UI/Button';

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <img src={service.image} alt={service.name} className="w-full h-60 object-cover rounded" />
      <h2 className="text-2xl font-bold">{service.name}</h2>
      <p>{service.description}</p>
      <RatingStars rating={service.rating} />
      <p className="text-lg font-semibold">UGX {service.price}</p>
      <Button>Book Service</Button>
    </div>
  );
}