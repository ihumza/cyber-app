import Titlebar from '@/components/app/Titlebar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DataService from '@/utils/axios';
import { getCountryName } from '@/utils/functions';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await DataService.get(`users/${username}`);
        if (response.data.status) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <Titlebar
        backButton
        title="User Details"
      />
      <Card>
        <CardHeader>
          <CardTitle className="!text-xl">{data.name}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-sm mb-2">
            Email: <span className="font-medium">{data.email}</span>
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Joined At: <span className="font-medium">{data.createdAt}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewUser;
