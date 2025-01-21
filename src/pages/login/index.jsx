import React from 'react';
import LoginForm from '@/components/app/auth/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline transition duration-200"
          >
            Register
          </a>
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
