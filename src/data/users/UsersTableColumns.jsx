import { Edit, Eye, Trash, View } from "lucide-react";
import { Link } from "react-router";

export const UsersTableColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.email,
    sortable: true,
    cell: (row) => (
      <div className="flex space-x-3">
        <Link to={`/users/${row.username}`}>
          <Eye size={15} />
        </Link>
        <Link to={`/users/${row.username}/edit`}>
          <Edit size={15} />
        </Link>

        <Trash
          className="text-destructive"
          onClick={row.deleteUser}
          size={15}
        />
      </div>
    ),
  },
];
