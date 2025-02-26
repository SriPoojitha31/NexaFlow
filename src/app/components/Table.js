const Table = () => {
    return (
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Workflow Name</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">AI Analysis</td>
            <td className="px-4 py-2 border">Active</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Table;
  