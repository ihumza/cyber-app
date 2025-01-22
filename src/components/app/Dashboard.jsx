import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { Card } from "../ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's an overview of the system.
        </p>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">-</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Events</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">-</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Pending Reminders
          </h2>
          <p className="text-3xl font-bold text-yellow-600 mt-2">-</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">System Logs</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">- </p>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/users">
            <Button>Manage Users</Button>
          </Link>
          <Link to="/events/add">
            <Button>Create Event</Button>
          </Link>
          <Link to="/reminders">
            <Button>View Reminders</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
