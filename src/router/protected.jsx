import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '@/components/app/layout/Header';

const Protected = () => {
  // const token = useSelector((state) => state.token.data);
  const token = true;

  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Protected;
