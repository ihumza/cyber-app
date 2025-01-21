import UpdateEventForm from '@/components/app/events/UpdateEventForm';
import React from 'react';

const UpdateEvent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Update Event
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Modify the details of your event below.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <UpdateEventForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
