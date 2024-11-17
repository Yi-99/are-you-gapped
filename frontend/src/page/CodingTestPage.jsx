import { useState } from "react";
import Header from "../component/Header";
import QuestionPanel from "../component/QuestionPanel";
import DescriptionPanel from "../component/DescriptionPanel";
import QueryPanel from "../component/QueryPanel";
import questions from "../data/questions.json"; // Import JSON data

const CodingTestPage = () => {
  const questionsArray = Object.values(questions.questions); // Convert questions object to an array
  const [currentIndex, setCurrentIndex] = useState(0); // Current question index
  const [queryInput, setQueryInput] = useState(""); // Tracks user input for coding questions
  const [error, setError] = useState(""); // Error message state
  const [selectedOption, setSelectedOption] = useState(null); // Tracks selected option for multiple-choice questions

  const totalQuestions = questionsArray.length;
  const currentQuestion = questionsArray[currentIndex];

  const handleNext = () => {
    // Reset states on next button click
    setSelectedOption(null); // Clear selected option
    setQueryInput(""); // Clear query input (if needed for coding questions)
    setError(""); // Clear error message
    setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1));
  };

  const handleBack = () => {
    setSelectedOption(null); // Clear selected option
    setQueryInput(""); // Clear query input (if needed)
    setError(""); // Clear error message
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-white py-3 px-6 shadow-md">
        <button
          className="text-gray-800 px-4 py-2 rounded hover:bg-gray-100 border border-black"
          onClick={handleBack}
          disabled={currentIndex === 0}
        >
          &lt; Back
        </button>
        <button
          className="bg-[#9BD8BB] text-white px-4 py-2 rounded hover:bg-[#185440]"
          onClick={handleNext}
          disabled={currentIndex === totalQuestions - 1}
        >
          Next &gt;
        </button>
      </div>
      {/* Dynamic Content */}
      <div className="p-6">
        {currentQuestion.type === "multiple-choice" && (
          <QuestionPanel
            questionData={currentQuestion}
            questionIndex={currentIndex + 1}
            totalQuestions={totalQuestions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
        {currentQuestion.type === "short-essay" && (
          <div className="bg-white rounded shadow-md p-6">
            <DescriptionPanel currentQuestion={currentQuestion} />
            <textarea
              className="w-full mt-4 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your answer here..."
            ></textarea>
          </div>
        )}
        {currentQuestion.type === "coding" && (
          <div className="flex flex-col gap-4">
            <DescriptionPanel currentQuestion={currentQuestion} />
            <QueryPanel
              currentQuestion={currentQuestion}
              queryInput={queryInput}
              setQueryInput={setQueryInput}
            />
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded shadow">
                {error}
              </div>
            )}
            <div className="flex justify-center items-center">
  <button
    onClick={() => {
      if (!queryInput.trim()) {
        setError("Error: Query cannot be empty.");
      } else {
        setError(""); // Clear error if valid
      }
    }}
    className="bg-[#185440] text-white px-4 py-2 rounded-md w-[96px] text-center"
  >
    Finish
  </button>
</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodingTestPage;
