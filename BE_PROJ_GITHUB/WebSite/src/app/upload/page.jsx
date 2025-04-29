"use client"; // Mark this as a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for client-side routing

const Page = () => {
  const router = useRouter(); // Initialize router for navigation
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Redirect function for Methane
  const handleMethaneSelect = () => {
    window.location.href = 'http://127.0.0.1:8080/'; // Redirect to Methane URL
  };

  // Handle select for Greenland (you can modify this to your desired URL or action)
  const handleGreenlandSelect = () => {
    window.location.href = 'http://127.0.0.1:5000/'; // Example action for Greenland
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white pt-20">
      <div className="text-center w-[600px]"> {/* Increased container width */}
        <h1 className="text-2xl font-bold mb-6">Select an Option</h1>

        {/* Dropdown Menu */}
        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)} 
            className="w-full px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200" // White bg and larger size
          >
            Select Option
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white text-black shadow-lg rounded-md">
              {/* Check for Methane */}
              <div className="flex justify-between items-center p-4 border-b border-gray-300 w-full">
                <div className="text-lg w-[100%]">Check for Methane</div>
                <button
                  onClick={handleMethaneSelect}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Select
                </button>
              </div>

              {/* Check for Greenland */}
              <div className="flex justify-between items-center p-4 w-full">
                <div className="text-lg w-[100%]">Check for Greenland</div>
                <button
                  onClick={handleGreenlandSelect}
                  className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Select
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
