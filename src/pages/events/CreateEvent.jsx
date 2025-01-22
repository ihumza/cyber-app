import CreateEventForm from '@/components/app/events/CreateEventForm';
import Titlebar from '@/components/app/Titlebar';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const CreateEvent = () => {
  return (
    <div>
      <Titlebar
        backButton
        title="Create a New Event"
        description="Fill out the form below to create a new event."
      />
      <Card>
        <CardContent>
          <CreateEventForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateEvent;
