import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '@/utils/axios';

const EditEventForm = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await DataService.get(`/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await DataService.put(`/events/${id}`, event);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold">Edit Event</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Event Title</label>
          <input
            type="text"
            value={event.title || ''}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={event.description || ''}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={event.date || ''}
            onChange={(e) => setEvent({ ...event, date: e.target.value })}
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={event.location || ''}
            onChange={(e) => setEvent({ ...event, location: e.target.value })}
            className="input"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEventForm;
