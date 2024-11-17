const QueryPanel = ({ currentQuestion }) => {
    return (
      <div className="bg-white rounded shadow-md flex-1">
        <div className="flex items-center bg-gray-200 rounded-t px-4">
          <h2 className="text-lg font-semibold my-4">Code</h2>
        </div>
        <textarea
          className="w-full h-full p-3 bg-[#011627] rounded focus:outline-none text-white"
          placeholder={`Write a query or answer here for:\n${currentQuestion.question}`}
        />
      </div>
    );
  };
  
  export default QueryPanel;
  