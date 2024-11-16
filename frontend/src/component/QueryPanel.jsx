const QueryPanel = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md flex-1">
      <h2 className="text-lg font-semibold mb-4">SQL Query</h2>
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        defaultValue={`SELECT c.Name, c.ContactPref, c.City\nFROM Customers AS c;`}
      />
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Run
      </button>
    </div>
  );
};

export default QueryPanel;
