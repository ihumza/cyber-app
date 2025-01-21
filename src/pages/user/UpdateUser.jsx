import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DataService from '@/utils/axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { slug } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await DataService.get(`users/${slug}`);
        if (response.data.status) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.put(`users/${slug}`, userData);
      if (response.data.status) {
        navigate('/users'); // Redirect to user list after successful update
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Update User
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <Button
          type="submit"
          className="w-full "
        >
          Update User
        </Button>
      </form>
    </div>
  );
};

export default UpdateUser;
