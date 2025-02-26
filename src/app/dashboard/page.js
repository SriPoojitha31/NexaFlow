"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [workflows, setWorkflows] = useState([
    { id: 1, name: "AI Data Processing", status: "Active" },
    { id: 2, name: "Automated Report Generation", status: "Inactive" },
  ]);

  return (
    <div className={`p-6 min-h-screen transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">NexaFlow Dashboard</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Workflow List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 shadow-lg bg-white/10 backdrop-blur-lg rounded-2xl flex justify-between items-center"
          >
            <span className="text-lg font-semibold">{workflow.name}</span>
            <span
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                workflow.status === "Active" ? "bg-green-500" : "bg-gray-500"
              } text-white`}
            >
              {workflow.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
