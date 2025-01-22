import { getFormattedDateTime } from '@/utils/functions';
import { Edit, Eye, Trash } from 'lucide-react';
import { Link } from 'react-router';

export const RemindersTableColumns = [
  {
    name: 'Name',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
    sortable: true,
    cell: (row) => getFormattedDateTime(row.date),
  },
  {
    name: 'Action',
    selector: (row) => row.email,
    sortable: true,
    cell: (row) => (
      <div className="flex space-x-3">
        <Link to={`/events/${row.eventId}`}>
          <Eye size={15} />
        </Link>
        <Link to={`/events/${row.eventId}/edit`}>
          <Edit size={15} />
        </Link>

        <Trash
          className="text-destructive"
          onClick={row.deleteEvent}
          size={15}
        />
      </div>
    ),
  },
];
