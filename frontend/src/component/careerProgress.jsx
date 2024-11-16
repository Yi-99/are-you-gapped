import { useState } from "react"

const CareerProgress = () => {
    const [mileStones,setMileStones] = useState([])
    const [progress, setProgress] = useState(0);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  const milestones = [
    { id: 1, label: "Junior in College" },
    { id: 2, label: "JavaScript\nOOP, Functional" },
    { id: 3, label: "React" },
    { id: 4, label: "Design Pattern" },
    { id: 5, label: "System Design" },
    { id: 6, label: "Cloud" },
    { id: 7, label: "Senior Software Dev." },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < milestones.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="relative flex items-center justify-between w-full h-4 bg-gray-300 rounded-full">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`absolute top-0 h-4 rounded-full transition-all ${
              index <= currentStep ? "bg-blue-500" : "bg-gray-300"
            }`}
            style={{
              left: `${(index / (milestones.length - 1)) * 100}%`,
              width: index < currentStep ? `${100 / (milestones.length - 1)}%` : "4px",
              height: index === currentStep ? "10px" : "4px",
            }}
          />
        ))}
      </div>

      {/* Milestone Labels */}
      <div className="relative flex justify-between mt-4">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`text-center ${
              index <= currentStep ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <span className="block text-xs font-medium">
              {milestone.label}
            </span>
            <div
              className={`w-6 h-6 mt-1 mx-auto rounded-full border-2 ${
                index <= currentStep ? "bg-blue-500 border-blue-600 text-white" : "bg-white border-gray-300"
              } flex items-center justify-center`}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Next Step Button */}
      <button
        className="px-4 py-2 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentStep === milestones.length - 1}
      >
        다음 단계로 이동
      </button>
    </div>
  );
}
export default CareerProgress