import Titlebar from '@/components/app/Titlebar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { EventsTableColumns } from '@/data/events/EventsTableColumns';
import DataService from '@/utils/axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import countries from '@/utils/countries.json';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EventListing = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [location, setLocation] = useState(null);

  const callApi = async () => {
    try {
      const response = await DataService.get(
        `events?offset=${offset}&limit=${limit}&location=${location}`
      );
      if (response.data.status) {
        setData(response.data.data);
        setCount(response.data.count);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = (page) => {
    setOffset(page - 1);
  };
  const handleRowCountChange = (page) => {
    setLimit(page);
  };

  useEffect(() => {
    callApi();
  }, [offset, limit, location]);

  const handleDelete = async (eventId) => {
    try {
      const response = await DataService.delete(`/events/${eventId}`);
      if (response.data.status) {
        toast(response.data.message ?? 'Event Deleted!');
        callApi();
      } else {
        toast(response.data.message ?? 'Something went wrong!');
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  const createReminder = async (eventId) => {
    try {
      const response = await DataService.post('/reminders/add');
    } catch (error) {
      toast(error?.response?.data?.message ?? error.message);
    }
  };

  const dataSource = data?.map((event) => ({
    ...event,
    deleteEvent: () => handleDelete(event?.eventId),
  }));

  return (
    <div>
      <Titlebar
        title=" Event Listings"
        description="Browse through the list of events and manage them."
      />
      <div className="w-min ml-auto flex gap-4 items-center mb-3">
        <Label>Start Period</Label>
        <Input  type="date" />
        <Label>End Period</Label>
        <Input type="date" />
        <Label>Location</Label>
        <Select
          onValueChange={(value) => {
            setOffset(0);
            setLocation(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All</SelectItem>
            {countries.map((country) => (
              <SelectItem value={country?.value}>{country.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link
          to="/events/add"
          className=" rounded-md "
        >
          <Button>Create Event</Button>
        </Link>
      </div>
      <DataTable
        columns={EventsTableColumns}
        data={dataSource}
        pagination
        paginationServer
        paginationTotalRows={count}
        onChangeRowsPerPage={handleRowCountChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
};

export default EventListing;
