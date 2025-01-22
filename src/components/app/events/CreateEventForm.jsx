import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import DataService from '@/utils/axios';
import React, { useState } from 'react';
import { toast } from 'sonner';
import countries from '@/utils/countries.json';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router';

const CreateEventForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    description: '',
    type: 'public',
    date: new Date().toISOString(),
  });

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleDateChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    // Update only the respective field
    if (name === 'date') {
      setData((prev) => {
        const [prevDate, prevTime] = prev?.date?.split('T');
        return { ...data, date: `${value}T${prevTime || '00:00'}` };
      });
    } else if (name === 'time') {
      setData((prev) => {
        const [prevDate, prevTime] = prev?.date?.split('T');
        return {
          ...data,
          date: `${
            prevDate || new Date().toISOString().split('T')[0]
          }T${value}`,
        };
      });
    }
  };

  const handleSelectChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post('/events/add', data);
      if (response.data.status) {
        toast(response?.data?.message ?? 'Event Created');
        navigate('/events');
      } else {
        toast(response?.data?.message ?? 'Something went wrong!');
      }
    } catch (error) {
      toast(error?.response?.data?.message ?? error.message);
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
            name="title"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Description</Label>
          <Textarea
            name="description"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Date</Label>
          <div className="flex gap-2">
            <Input
              type="date"
              name="date"
              onChange={handleDateChange}
              required
            />
            <Input
              type="time"
              name="time"
              onChange={handleDateChange}
              required
            />
          </div>
        </div>
        <div>
          <Label className="block text-sm font-medium">Type</Label>
          <Select onValueChange={(e) => handleSelectChange('type', e)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={'public'}>Public</SelectItem>
              <SelectItem value={'private'}>Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-sm font-medium">Location</Label>
          <Select onValueChange={(e) => handleSelectChange('location', e)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem value={country.value}>{country.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
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
