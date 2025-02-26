"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [profileType, setProfileType] = useState("Personal");

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-4">
          <span>Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
              darkMode ? "bg-blue-600" : ""
            }`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex justify-between items-center mb-4">
          <span>Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
              notifications ? "bg-green-500" : ""
            }`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                notifications ? "translate-x-5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Profile Type */}
        <div className="mb-4">
          <label className="block font-semibold">Profile Type</label>
          <select
            value={profileType}
            onChange={(e) => setProfileType(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1"
          >
            <option>Personal</option>
            <option>Enterprise</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
          Save Settings
        </button>
      </div>
    </div>
  );
}
