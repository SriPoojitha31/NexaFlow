"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProcessAutomation() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Data Preprocessing", status: "Pending" },
    { id: 2, name: "AI Model Training", status: "In Progress" },
    { id: 3, name: "Workflow Optimization", status: "Completed" },
  ]);

  // Simulate task updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.status === "Pending"
            ? { ...task, status: "In Progress" }
            : task.status === "In Progress"
            ? { ...task, status: "Completed" }
            : task
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-6 min-h-screen transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Process Automation</h1>
        <div className="flex items-center gap-2">
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            
          </button>
        </div>
      </div>

      {/* Automation Task List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 shadow-lg bg-white/10 backdrop-blur-lg rounded-2xl flex justify-between items-center"
          >
            <span className="text-lg font-semibold">{task.name}</span>
            <span
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                task.status === "Completed" ? "bg-green-500" :
                task.status === "In Progress" ? "bg-yellow-500" :
                "bg-gray-500"
              } text-white`}
            >
              {task.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
