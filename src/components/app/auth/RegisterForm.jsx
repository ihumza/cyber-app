import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import DataService from '@/utils/axios';

const RegisterForm = () => {
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Register clicked');
    const response = await DataService.post('auth/register', data);
    return response.data;
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg">
      <form
        onSubmit={handleRegister}
        className="space-y-4"
      >
        <div>
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </Label>
          <Input
            type="password"
            onChange={handleChange}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
