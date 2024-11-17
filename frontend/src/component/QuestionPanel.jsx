const QuestionPanel = ({ questionData, questionIndex, totalQuestions }) => {
    return (
      <div className="bg-white rounded shadow-md p-6">
        {/* Question Description */}
        <p className="text-gray-700 text-base">
          {questionData.description}
        </p>
        {/* Question Title */}
        <p className="text-gray-700 text-base mb-4">{questionData.question}</p>
        {/* Options */}
        {questionData.options && (
          <div className="space-y-2">
            {questionData.options.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={option}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default QuestionPanel;
  