import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 h-full w-64 flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-white text-xl font-bold mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* footer here */}
    </div>
  );
};

export default Sidebar;
