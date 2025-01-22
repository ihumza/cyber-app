import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router';

const Titlebar = ({ title, description, backButton, actions }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mb-6">
      {backButton && (
        <Button
          onClick={() => navigate(-1)}
          className="aspect-square size-8"
        >
          <ArrowLeft
            className="cursor-pointer"
            size={20}
          />
        </Button>
      )}
      <div className="text-center grow">
        <h2 className="text-3xl font-semibold  text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 text-center mb-6">{description}</p>
      </div>
      {actions}
    </div>
  );
};

export default Titlebar;
