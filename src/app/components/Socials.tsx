// SocialMediaIcon.tsx
import React from 'react';
import { IconType } from 'react-icons/lib';


interface SocialMediaIconProps {
  icon: IconType;
  name: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center space-x-2 mt-1 mb-1">
      <div className="text-4xl text-blue-500">
        <Icon />
      </div>
      <span className="text-md text-white font-semibold">{name}</span>
    </div>
  );
};

export default SocialMediaIcon;
