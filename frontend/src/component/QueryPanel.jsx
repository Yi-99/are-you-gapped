const QueryPanel = ({ currentQuestion, queryInput, setQueryInput }) => {
    return (
      <div className="bg-white rounded shadow-md flex-1">
        <div className="flex items-center bg-gray-200 rounded-t px-4">
          <h2 className="text-lg font-semibold my-4">Code</h2>
        </div>
        <textarea
          className="w-full h-40 max-h-40 p-3 bg-[#011627] text-white rounded resize-none overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your code here..."
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
        />
      </div>
    );
  };
  
  export default QueryPanel;
  