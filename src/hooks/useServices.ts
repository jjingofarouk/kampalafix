import { useState, useEffect } from 'react';
import { getDocuments } from '../firebase/db';
import { Service } from '../types/service';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getDocuments('services');
      setServices(data);
    };
    fetchServices();
  }, []);

  return { services };
}