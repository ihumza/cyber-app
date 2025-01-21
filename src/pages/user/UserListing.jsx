import { Button } from '@/components/ui/button';
import DataService from '@/utils/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserListing = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersPerPage] = useState(10); // Set users per page

  const callApi = async () => {
    try {
      const response = await DataService.get(
        `users?offset=${currentPage}&limit=${usersPerPage}`
      );
      if (response.data.status) {
        setData(response.data.data);
        setTotalUsers(response.data.count); // Assuming 'total' is the total number of users
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, [currentPage]);

  const deleteUser = async (id) => {
    try {
      const response = await DataService.delete(`users/${id}`);
      if (response.data.status) {
        // Re-fetch data after deletion
        callApi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        User Listings
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6">
        Manage users from this page.
      </p>

      <Link
        to="/users/add"
        className="px-4 py-2 rounded-md mb-6 inline-block"
      >
        <Button>Create User</Button>
      </Link>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr
                key={user.id}
                className="border-b"
              >
                <td className="px-4 py-2 text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-gray-600">{user.email}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/users/${user.username}/edit`}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    <Button> Update User</Button>
                  </Link>
                  <Button onClick={() => deleteUser(user.id)}>
                    Delete User
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600">
          Showing {currentPage * usersPerPage - usersPerPage + 1} to{' '}
          {Math.min(currentPage * usersPerPage, totalUsers)} of {totalUsers}{' '}
          users
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
