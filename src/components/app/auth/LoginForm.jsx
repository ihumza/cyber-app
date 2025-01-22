import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import DataService from "@/utils/axios";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post("auth/login", data);
      if (response.data.status) {
        localStorage.setItem("authToken", response?.data?.token);
        toast("Welcome Back!");
        dispatch(login(response.data));
        navigate("/users");
      } else {
        toast(response?.data?.message ?? "Something Went Wrong!");
      }
    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message ?? error?.message);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-3">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
