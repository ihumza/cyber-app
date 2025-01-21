import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import DataService from '@/utils/axios';
import React, { useState } from 'react';

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = { title, description, date, location };
      await DataService.post('/events', newEvent);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold">Create Event</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <Label className="block text-sm font-medium">Event Title</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Date</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Location</Label>
          <Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
            required
          />
        </div>
        <Button
          type="submit"
          className=" py-2 px-4 rounded"
        >
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
