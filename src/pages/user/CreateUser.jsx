import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DataService from '@/utils/axios';
import { useNavigate } from 'react-router-dom';
import Titlebar from '@/components/app/Titlebar';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post('users', userData);
      if (response.data.status) {
        navigate('/users'); // Redirect to user list after successful creation
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Titlebar
        title="Create User"
        description=""
        backButton
      />
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
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          Create User
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
