const QuestionPanel = ({ questionData, questionIndex, totalQuestions, selectedOption, setSelectedOption }) => {
    return (
      <div className="bg-white rounded shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Multiple Choice Question</h2>
        <p className="text-gray-700 text-base mb-6">{`Question ${questionIndex} of ${totalQuestions}`}</p>
        <p className="text-lg text-gray-800 mb-4">{questionData.question}</p>
        <div className="space-y-2">
          {questionData.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-3 text-gray-700">
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={option}
                checked={selectedOption === option} // Controlled input
                onChange={() => setSelectedOption(option)} // Update selected option
                className="form-radio h-4 w-4 text-green-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionPanel;
  