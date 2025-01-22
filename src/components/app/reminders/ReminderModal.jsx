import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DataService from '@/utils/axios';
import { toast } from 'sonner';

const ReminderModal = ({ id }) => {
  const [data, setData] = useState();
  const [event, setEvent] = useState();
  const fetchEvent = async () => {
    try {
      const response = await DataService.get(`events/${id}`);
      if (response?.data?.status) {
        setEvent(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvent();
  }, [id]);

  const createReminder = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post('reminders/add', data);
      if (response?.data?.status) {
        toast(response?.data?.message);
      } else {
        toast('Something went wrong!');
      }
    } catch (error) {
      toast(error?.response?.data?.message ?? error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-white">Create Reminder</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Reminder</DialogTitle>
        </DialogHeader>
        <DialogDescription className="py-6">
          <form
            onSubmit={createReminder}
            className="flex flex-col gap-5"
          >
            <p>Title: {event?.title}</p>
            <Input
              name="instructions"
              placeholder="Intructions (optional)"
            />
            <Button type="submit">Submit</Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ReminderModal;
