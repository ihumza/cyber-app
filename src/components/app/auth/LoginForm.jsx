import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { loginHandler } from '@/api/auth.handler';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    console.log('response');
    e.preventDefault();
    try {
      const response = await loginHandler(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg">
      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-3">
          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
