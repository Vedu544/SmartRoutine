import './App.css'
import React from 'react';
export default function App() {
  return (
    <div className="h-screen bg-gray-50 font-inter">

      {/* NAVBAR */}
      <div className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">SmartRoutine</div>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-600 transition">Community</li>
          <li className="cursor-pointer hover:text-blue-600 transition">AI Maker</li>
          <li className="cursor-pointer hover:text-blue-600 transition">Login</li>
        </ul>
      </div>

      {/* MAIN SECTION */}
      <div className="p-6 h-full">
        <div className="bg-white shadow-lg rounded-xl p-6 h-full">

          {/* HEADER */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">SmartRoutine Dashboard</h2>
              <p className="text-sm text-gray-500">
                Explore & create routines with AI assistance
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              Create Routine
            </button>
          </div>

          {/* DIVIDER */}
          <div className="border-t my-6"></div>

          {/* ROUTINE CARDS */}
          <div className="flex flex-col gap-5">

            {/* CARD 1 */}
            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">Skincare Routine</h3>
              <p className="text-gray-600 mt-1">
                Discover morning & night skincare plans.
              </p>
              <div className="flex justify-end mt-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  View
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">Diet Routine</h3>
              <p className="text-gray-600 mt-1">
                Healthy meal patterns designed for your body.
              </p>
              <div className="flex justify-end mt-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  View
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">Workout & Fitness</h3>
              <p className="text-gray-600 mt-1">
                Personalized fitness routines for all levels.
              </p>
              <div className="flex justify-end mt-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Explore
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
