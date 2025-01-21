import React, { useEffect, useState } from 'react';
import DataService from '@/utils/axios';

const EventListing = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await DataService.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await DataService.delete(`/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold">Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event._id}
            className="bg-white p-4 rounded shadow-md"
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <button
              onClick={() => handleDelete(event._id)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListing;
