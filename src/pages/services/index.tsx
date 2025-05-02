import { useServices } from '../../hooks/useServices';
import ServiceCard from '../../components/Service/ServiceCard';

export default function Services() {
  const { services } = useServices();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}