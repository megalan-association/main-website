import React from "react";

const Header: React.FC = () => {
  return (
    
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Your Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        </nav>
      </div>
    
  );
};

export default Header;
