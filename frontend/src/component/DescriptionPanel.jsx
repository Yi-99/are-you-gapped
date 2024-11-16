const DescriptionPanel = () => {
  return (
    <div className="bg-white rounded shadow-md flex-1">
        <div className="flex items-center bg-gray-200 rounded-t px-4">
            <h2 className="text-lg font-semibold mb-4 pt-4">Description | Feedback</h2>
        </div>
      <p className="text-base text-gray-700 p-2">
        Write a query that shows each customer ID labeled <strong>“CustomerID”</strong>, name, and total ordered amount labeled <strong>“TotalRevenue”</strong>.
      </p>
      <p className="mt-4 text-base text-gray-700 p-2">
        NOTE: For exams, we will grade the output and expect the field names to look exactly like specified...
      </p>
    </div>
  );
};

export default DescriptionPanel;
