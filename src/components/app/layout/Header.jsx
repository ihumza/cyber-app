import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "@/redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      <SidebarTrigger className="bg-white" />
      <LogOutIcon onClick={handleLogout} size="20" />
    </div>
  );
};

export default Header;
