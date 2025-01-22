import { getFormattedDateTime } from '@/utils/functions';
import { Edit, Eye, Trash } from 'lucide-react';
import { Link } from 'react-router';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';

export const EventsTableColumns = [
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
  // {
  //   name: 'Date',
  //   selector: (row) => row.date,
  //   sortable: true,
  //   cell: (row) => (
  //     <Dialog>
  //       <DialogTrigger className="bg-white">Create Reminder</DialogTrigger>
  //       <DialogContent>
  //         <DialogHeader>
  //           <DialogTitle>Create Reminder</DialogTitle>
  //         </DialogHeader>
  //         <DialogDescription className="p-6">
  //           <form
  //             onSubmit={row.createReminder}
  //             className="flex flex-col gap-2"
  //           >
  //             <p>Title: {row.title}</p>
  //             <Input
  //               name="instructions"
  //               placeholder="Intructions (optional)"
  //             />
  //             <Button>Submit</Button>
  //           </form>
  //         </DialogDescription>
  //       </DialogContent>
  //     </Dialog>
  //   ),
  // },
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
