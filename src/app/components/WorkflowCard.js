import React from "react";

const WorkflowCard = ({ workflow }) => {
  return (
    <div className="p-4 transition-transform transform bg-white shadow-lg rounded-xl dark:bg-gray-800 hover:scale-105">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{workflow.name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{workflow.description}</p>
      <span className={`text-sm font-semibold ${workflow.status === "Active" ? "text-green-500" : "text-red-500"}`}>
        {workflow.status}
      </span>
      <button
        className="px-4 py-2 mt-3 font-medium text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
        onClick={() => alert(`Managing ${workflow.name}`)}
      >
        Manage Workflow
      </button>
    </div>
  );
};

export default WorkflowCard;
