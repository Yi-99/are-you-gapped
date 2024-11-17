const DescriptionPanel = ({ currentQuestion }) => {
    return (
      <div className="bg-white rounded flex-1">
        {/* Header */}
          <h2 className="text-lg font-semibold my-4 ml-4">Description</h2>
        {/* Question Content */}
        <div className="p-4">
          <p className="text-base text-gray-700 mb-4">{currentQuestion.question}</p>
          {currentQuestion.options && (
            <ul className="list-disc pl-6 text-base text-gray-700">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default DescriptionPanel;
  