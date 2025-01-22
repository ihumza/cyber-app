import UpdateEventForm from '@/components/app/events/UpdateEventForm';
import Titlebar from '@/components/app/Titlebar';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const UpdateEvent = () => {
  return (
    <div>
      <Titlebar
        backButton
        title="Update Event"
        description="Modify the details of your event below."
      />
      <Card>
        <CardContent>
          <UpdateEventForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateEvent;
