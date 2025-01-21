import CreateEventForm from '@/components/app/events/CreateEventForm';
import React from 'react';

const CreateEvent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create a New Event
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Fill out the form below to create a new event.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <CreateEventForm />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
