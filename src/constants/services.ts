import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: '1',
    name: 'Plumbing',
    description: 'Fix leaks, install pipes, and more.',
    image: '/assets/images/service-icons/plumber.svg',
    rating: 4.5,
    price: 50000,
  },
  {
    id: '2',
    name: 'Electrical',
    description: 'Wiring, repairs, and installations.',
    image: '/assets/images/service-icons/electrician.svg',
    rating: 4.7,
    price: 60000,
  },
  {
    id: '3',
    name: 'Cleaning',
    description: 'Deep cleaning for homes and offices.',
    image: '/assets/images/service-icons/cleaner.svg',
    rating: 4.8,
    price: 40000,
  },
  {
    id: '4',
    name: 'Carpentry',
    description: 'Furniture repair and custom builds.',
    image: '/assets/images/service-icons/carpenter.svg',
    rating: 4.6,
    price: 55000,
  },
];