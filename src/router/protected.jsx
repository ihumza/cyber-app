import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '@/components/app/layout/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app/layout/AppSidebar';

const Protected = () => {
  const token = useSelector((state) => state.auth.token);

  return token ? (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header>
            <SidebarTrigger />
          </Header>
          <div className="p-6 bg-gray-100 h-full">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Protected;
