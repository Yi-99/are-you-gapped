import { useState } from "react"

const CareerProgress = () => {
    const [mileStones,setMileStones] = useState([])
    const [progress, setProgress] = useState(0);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  const milestones = [
    { id: 1, name: "진단 시험", completed: false },
    { id: 2, name: "기초 다지기", completed: false },
    { id: 3, name: "문제 풀이", completed: false },
    { id: 4, name: "모의고사 준비", completed: false },
    { id: 5, name: "최종 점검", completed: false },
  ];

  const handleNextMilestone = () => {
    if (milestoneIndex < milestones.length) {
      setMilestoneIndex((prev) => prev + 1);
      setProgress(((milestoneIndex + 1) / milestones.length) * 100);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="relative h-8 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-center mt-2 text-lg font-medium">{`${Math.round(
        progress
      )}% 완료`}</div>

      <ul className="mt-4">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.id}
            className={`flex items-center gap-2 mb-2 ${
              index < milestoneIndex ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                index < milestoneIndex ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {index + 1}
            </span>
            {milestone.name}
          </li>
        ))}
      </ul>

      {/* 다음 단계 버튼 */}
      <button
        onClick={handleNextMilestone}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={milestoneIndex >= milestones.length}
      >
        다음 단계로 이동
      </button>
    </div>
  );
}
export default CareerProgress