// DashboardServices.jsx
import { useServices } from '../../hooks/useServices';
import ServiceCard from '../../components/Service/ServiceCard';
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardServices() {
  const { services } = useServices();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-8">Your Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} className="hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
      </main>
    </div>
  );
}