import ReminderModal from '@/components/app/reminders/ReminderModal';
import Titlebar from '@/components/app/Titlebar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RemindersTableColumns } from '@/data/reminders/RemindersTableColumns';
import DataService from '@/utils/axios';
import { getCountryName } from '@/utils/functions';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useParams } from 'react-router-dom';

const EventView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [reminders, setReminders] = useState([]);

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
  const fetchReminders = async () => {
    try {
      const response = await DataService.get(`reminders/${id}`);
      if (response?.data?.status) {
        setReminders(response?.data?.data ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
    fetchReminders();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const remindersDataSource =
    reminders?.length > 0
      ? reminders?.map((reminder) => ({
          ...reminder,
        }))
      : [];

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <Titlebar
        backButton
        title="Event Details"
        actions={<ReminderModal id={event?.eventId} />}
      />
      <Card>
        <CardHeader>
          <CardTitle className="!text-xl">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-sm mb-2">
            Date: <span className="font-medium">{event.date}</span>
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Location:{' '}
            <span className="font-medium">
              {getCountryName(event.location)}
            </span>
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Created At: <span className="font-medium">{event.createdAt}</span>
          </p>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardHeader>
          <CardTitle>Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={RemindersTableColumns}
            data={remindersDataSource}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EventView;
