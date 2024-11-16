import { useState } from "react"

const CareerProgress = () => {
    const [mileStones,setMileStones] = useState([])
    const [progress, setProgress] = useState(0);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  // const milestones = [
  //   { id: 1, label: "Junior in College" },
  //   { id: 2, label: "JavaScript\nOOP, Functional" },
  //   { id: 3, label: "React" },
  //   { id: 4, label: "Design Pattern" },
  //   { id: 5, label: "System Design" },
  //   { id: 6, label: "Cloud" },
  //   { id: 7, label: "Senior Software Dev." },
  // ];

  // const [currentStep, setCurrentStep] = useState(0);
  const milestones = [
    "Junior in College",
    "JavaScript",
    "React",
    "Design Pattern",
    "System Design",
  ];
  
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계
  
    const handleNext = () => {
      if (currentStep < milestones.length) setCurrentStep(currentStep + 1);
    };
  
    const handlePrevious = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };
  
    const progressPercentage = ((currentStep - 1) / (milestones.length - 1)) * 100;
  
    return (
      <div className="flex flex-col items-center w-full mt-8">
        {/* Progress bar */}
        <div className="relative w-full max-w-4xl">
          <div className="w-full h-2 bg-gray-300 rounded-full"></div>
          <div
            className="absolute top-0 h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>  
          {/* Milestones */}
          <div className="flex justify-between mt-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center m-2">
                {/* Label */}
                <span
                  className={`mt-2 text-sm ${
                    index + 1 <= currentStep ? "text-blue-600 font-semibold" : "text-gray-600"
                  }`}
                >
                  {milestone}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 bg-gray-200 rounded ${
              currentStep === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentStep === milestones.length ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600"
            }`}
            disabled={currentStep === milestones.length}
          >
            Next
          </button>
        </div>
      </div>
    );

}
export default CareerProgress