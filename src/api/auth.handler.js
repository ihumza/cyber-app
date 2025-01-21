import DataService from '@/utils/axios';
import { toast } from 'sonner';

export const loginHandler = async (data) => {
  try {
    const response = await DataService.post('auth/login', data);
    if (response.data.status) {
      localStorage.setItem('authToken', response?.data?.token);
    }
    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message ?? error.message);
    return { status: false, message: error?.response?.data?.message };
  }
};

export const registerHandler = (data) => {
  try {
  } catch (error) {
    toast(error?.response?.data?.message ?? error.message);
    return { status: false, message: error?.response?.data?.message };
  }
};
