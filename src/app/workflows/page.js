"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkflowPage() {
  const [workflows, setWorkflows] = useState([
    { id: 1, name: "Data Processing Workflow", status: "Active" },
    { id: 2, name: "Automated Email Campaign", status: "Inactive" },
  ]);

  const addWorkflow = () => {
    const newWorkflow = { id: workflows.length + 1, name: "New Workflow", status: "Active" };
    setWorkflows([...workflows, newWorkflow]);
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold">Workflow Management</h1>

      {/* Add Workflow Button */}
      <button 
        onClick={addWorkflow} 
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg shadow-md"
      >
        + Create Workflow
      </button>

      {/* Workflow List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 shadow-lg bg-red rounded-2xl flex justify-between items-center border border-black-500"
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
