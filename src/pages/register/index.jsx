import RegisterForm from '@/components/app/auth/RegisterForm';
import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Join us today! Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 hover:underline transition duration-200"
          >
            Sign in
          </a>
        </p>
        <div className="mt-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
