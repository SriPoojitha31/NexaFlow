"use client";

import WorkflowCard from "./WorkflowCard";

const WorkflowModule = () => {
  const workflows = [
    {
      id: "1",
      name: "Automated Document Processing",
      description: "Automatically scans, extracts, and organizes documents.",
      status: "Active",
    },
    {
      id: "2",
      name: "AI-Powered Task Assignment",
      description: "Assigns tasks to employees based on workload and skills.",
      status: "Active",
    },
    {
      id: "3",
      name: "Workflow Optimization",
      description: "Analyzes processes and suggests efficiency improvements.",
      status: "Inactive",
    },
    {
      id: "4",
      name: "Real-time Data Sync",
      description: "Ensures all systems have the latest data updates.",
      status: "Active",
    },
    {
      id: "5",
      name: "Smart Alerts & Notifications",
      description: "Sends proactive alerts to prevent workflow delays.",
      status: "Active",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
};

export default WorkflowModule;
