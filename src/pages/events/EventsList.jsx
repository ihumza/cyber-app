import { Button } from '@/components/ui/button';
import DataService from '@/utils/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventListing = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const response = await DataService.get('events');
      if (response.data.status) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8 relative">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Event Listings
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6">
        Browse through the list of events and manage them.
      </p>

      {/* Create Event Link */}
      <Link
        to="/events/add"
        className="absolute top-6 right-6  px-4 py-2 rounded-md "
      >
        <Button>Create Event</Button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {data.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-gray-500 text-sm mb-2">
                Date: <span className="font-medium">{event.date}</span>
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/update-event/${event.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Update Event
                </Link>
                <button
                  onClick={() => console.log('Delete event', event.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
