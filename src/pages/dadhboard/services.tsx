import { useServices } from '../../hooks/useServices';
import ServiceCard from '../../components/Service/ServiceCard';
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardServices() {
  const { services } = useServices();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Your Services</h1>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}