import { useRouter } from 'next/router';
import { useServices } from '../../hooks/useServices';
import ServiceDetails from '../../components/Service/ServiceDetails';
import BookService from '../../components/Service/BookService';
import RatingStars from '../../components/UI/RatingStars';
import { useState } from 'react';
import Button from '../../components/UI/Button';

export default function ServicePage() {
  const router = useRouter();
  const { id } = router.query;
  const { services } = useServices();
  const service = services.find((s) => s.id === id);
  const [showBooking, setShowBooking] = useState(false);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
        <p className="mt-2">The service you are looking for does not exist.</p>
        <Button variant="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ServiceDetails service={service} />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Customer Reviews</h3>
            <div className="mt-2">
              <RatingStars rating={service.rating} />
              <p className="text-sm text-gray-600">
                {service.rating} out of 5 based on {Math.floor(service.rating * 20)} reviews
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="sticky top-4 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Book This Service</h3>
            <p className="text-lg font-semibold mb-4">UGX {service.price}</p>
            <Button
              variant="primary"
              onClick={() => setShowBooking(!showBooking)}
              className="w-full"
            >
              {showBooking ? 'Hide Booking' : 'Book Now'}
            </Button>
            {showBooking && <BookService />}
          </div>
        </div>
      </div>
    </div>
  );
}