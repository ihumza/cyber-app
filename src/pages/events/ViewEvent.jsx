import DataService from '@/utils/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await DataService.get(`events/${id}`);
        if (response.data.status) {
          setEvent(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Event Details
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">{event.name}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <p className="text-gray-500 text-sm mb-2">
          Date: <span className="font-medium">{event.date}</span>
        </p>
        <p className="text-gray-500 text-sm mb-2">
          Location: <span className="font-medium">{event.location}</span>
        </p>
        <p className="text-gray-500 text-sm mb-2">
          Created At: <span className="font-medium">{event.createdAt}</span>
        </p>
      </div>
    </div>
  );
};

export default EventView;
