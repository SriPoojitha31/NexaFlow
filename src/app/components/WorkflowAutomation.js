const WorkflowAutomation = () => {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-3xl font-bold">Workflow Automation</h1>
        <p className="mb-6 text-gray-600">Manage and automate your workflows efficiently.</p>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-lg font-semibold">Task Automation</h2>
            <p className="text-sm text-gray-500">Automate repetitive tasks with AI.</p>
          </div>
  
          <div className="p-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-lg font-semibold">Process Tracking</h2>
            <p className="text-sm text-gray-500">Track your workflows in real-time.</p>
          </div>
  
          <div className="p-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-lg font-semibold">AI-Driven Decisions</h2>
            <p className="text-sm text-gray-500">Let AI optimize your workflows.</p>
          </div>
        </div>
  
        <button className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg">Create Workflow</button>
      </div>
    );
  };
  
  export default WorkflowAutomation;
  