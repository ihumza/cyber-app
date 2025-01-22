import Titlebar from '@/components/app/Titlebar';
import { Button } from '@/components/ui/button';
import { UsersTableColumns } from '@/data/users/UsersTableColumns';
import DataService from '@/utils/axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const UserListing = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const callApi = async () => {
    try {
      const response = await DataService.get(
        `users?offset=${offset}&limit=${limit}`
      );
      if (response.data.status) {
        setData(response.data.data);
        setCount(response.data.count);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = (page) => {
    setOffset(page);
  };
  const handleRowCountChange = (page) => {
    setLimit(page);
  };

  useEffect(() => {
    callApi();
  }, [offset, limit]);

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

  const dataSource = data?.map((user) => ({
    ...user,
    deleteUser: () => deleteUser(user.username),
  }));

  return (
    <div>
      <Titlebar
        title="User Listings"
        description="Manage users from this page."
      />
      <div className="flex justify-end">
        <Link
          to="/users/add"
          className="px-4 py-2 rounded-md mb-6 inline-block"
        >
          <Button>Create User</Button>
        </Link>
      </div>
      <DataTable
        columns={UsersTableColumns}
        data={dataSource}
        pagination
        paginationServer
        paginationTotalRows={count}
        onChangeRowsPerPage={handleRowCountChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
};

export default UserListing;
