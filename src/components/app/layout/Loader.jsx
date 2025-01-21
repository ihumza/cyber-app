import React from 'react';
import { useSelector } from 'react-redux';
import loader from '../../../assets/loader.svg';

const Loader = () => {
  const loading = useSelector((state) => state?.layout?.data?.loading ?? false);
  if (!loading) return null; // Changed to directly check if loading is falsey
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <img
        src={loader}
        alt="loader"
        className="loader"
      />
    </div>
  );
};

export default Loader;
