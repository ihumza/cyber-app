import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { logout } from '@/redux/slices/authSlice';
import { Calendar, Home, LogOutIcon, Users } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Users',
    url: '/users',
    icon: Users,
  },
  {
    title: 'Events',
    url: '/events',
    icon: Calendar,
  },
];

export function AppSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-center items-center gap-2">
        <img
          className="h-10"
          src="vite.svg"
          alt=""
        />
        <p className=" text-xl italic font-bold">Cyber App</p>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <br />
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter
        className="flex flex-row items-center justify-between text-destructive cursor-pointer"
        onClick={handleLogout}
      >
        Logout <LogOutIcon size={15} />
      </SidebarFooter>
    </Sidebar>
  );
}
