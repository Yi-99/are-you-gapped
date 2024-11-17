import { useState } from "react";
import Header from "../component/Header";
import QuestionPanel from "../component/QuestionPanel";
import DescriptionPanel from "../component/DescriptionPanel";
import QueryPanel from "../component/QueryPanel";
import questions from "../data/questions.json"; // Import the JSON file

const CodingTestPage = () => {
  const questionsArray = Object.values(questions.questions); // Convert the "questions" object into an array
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current question index
  const [queryInput, setQueryInput] = useState(""); // Tracks user input for coding questions
  const [error, setError] = useState(""); // Error message state
  const totalQuestions = questionsArray.length;
  const currentQuestion = questionsArray[currentIndex]; // Get the current question based on the index

  // Validate user input and set error message dynamically
  const handleQuerySubmit = () => {
    if (!queryInput.trim()) {
      setError("Error: code cannot be empty.");
    } else {
      setError(`error: use of undeclared identifier '${queryInput}' 1 error generated.`)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-white py-3 px-6 shadow-md">
        <button
          className="text-gray-800 px-4 py-2 rounded hover:bg-gray-100 border border-black"
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
        >
          &lt; Back
        </button>
        <button
          className="bg-[#9BD8BB] text-white px-4 py-2 rounded hover:bg-[#185440]"
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1))
          }
          disabled={currentIndex === totalQuestions - 1}
        >
          Next &gt;
        </button>
      </div>
      {/* Dynamic Content */}
      <div className="p-6">
        {/* Render component based on question type */}
        {currentQuestion.type === "multiple-choice" && (
          <QuestionPanel
            questionData={currentQuestion}
            questionIndex={currentIndex + 1}
            totalQuestions={totalQuestions}
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
    {/* Top Section: Description and QueryPanel Side by Side */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Description Section */}
      <div className="bg-white rounded shadow-md flex-1">
        <div className="flex items-center bg-gray-200 rounded-t px-4">
          <h2 className="text-lg font-semibold my-4">Description</h2>
        </div>
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
      {/* Query Panel */}
      <QueryPanel
        currentQuestion={currentQuestion}
        queryInput={queryInput}
        setQueryInput={setQueryInput}
      />
    </div>

    {/* Bottom Section: Error Message and Submit Button */}
    <div className="flex flex-col gap-2">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded shadow">
          {error}
        </div>
      )}
      <button
        onClick={handleQuerySubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
