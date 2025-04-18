import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/select-car" className="text-lg font-semibold hover:text-yellow-400">
              Select Your Car
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-semibold hover:text-yellow-400">
              About Us & Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
