import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Protected from './protected';
import CreateEvent from '@/pages/events/CreateEvent';
import UpdateEvent from '@/pages/events/UpdateEvent';
import EventListing from '@/pages/events/EventsList';
import UserListing from '@/pages/user/UserListing';
import CreateUser from '@/pages/user/CreateUser';
import UpdateUser from '@/pages/user/UpdateUser';
import EventView from '@/pages/events/ViewEvent';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route element={<Protected />}>
          <Route path="users">
            <Route
              index
              element={<UserListing />}
            ></Route>
            <Route
              path="add"
              element={<CreateUser />}
            />
            <Route
              path=":slug"
              element={<CreateEvent />}
            />
            <Route
              path=":slug/edit"
              element={<UpdateUser />}
            />
          </Route>
          <Route path="events">
            <Route
              index
              element={<EventListing />}
            ></Route>
            <Route
              path="add"
              element={<CreateEvent />}
            />
            <Route
              path=":id"
              element={<EventView />}
            />
            <Route
              path=":slug/edit"
              element={<UpdateEvent />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
