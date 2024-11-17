import React from 'react';
import { useState } from 'react';

const skills = [
	{
		subject:"Technical Proficiency",
		description: "You have demonstrated exceptional mastery of technical skills essential for software development. Your deep understanding of programming languages, coupled with your ability to solve complex problems using data structures and algorithms, is outstanding. You excel in system design and have a robust knowledge of architectural principles, frameworks, libraries, and tools like React, TensorFlow, and Docker. Your debugging and troubleshooting capabilities are highly reliable, allowing you to handle challenges effectively and with confidence. This level of technical proficiency sets you apart as a highly skilled and dependable developer."
	},
	{

		subject:"Learning & Growth Mindset",
		description: "You show a strong commitment to continuous improvement and adaptability, but there is room for growth. You actively seek out opportunities to learn and apply new concepts, demonstrating an openness to change and self-development. However, there is potential to enhance your proactive engagement with the latest industry trends and technologies. Taking a more active role in seeking feedback and implementing it into your practice will further accelerate your growth trajectory. By maintaining a consistent focus on expanding your skill set, you can build on this solid foundation to achieve even greater heights."
	},
	{
		subject:"Collaboration & Communication",
		description: "Your collaboration and communication skills are effective but could be strengthened to improve your impact in team settings. You actively participate in discussions, code reviews, and stand-ups, contributing valuable insights. However, there may be occasions where clarity or engagement could be improved, particularly when articulating complex technical concepts or navigating constructive feedback. By refining your communication style and increasing your involvement in team workflows, you can become a more influential and cohesive collaborator within your teams."
	},
	{
		subject:"Problem-Solving & Critical Thinking",
		description: "Your approach to problem-solving and critical thinking is solid, but there is significant opportunity to enhance this area. While you are capable of breaking down problems and reasoning logically, there is a tendency to overlook certain optimizations or edge cases. Strengthening your algorithmic thinking and creativity in implementing solutions will elevate your ability to handle complex challenges. By practicing systematic problem analysis and exploring diverse solutions, you can sharpen this skill and boost your overall performance."
	},
	{
		subject:"Code Quality & Best Practices",
		description: "You consistently deliver code of the highest quality, adhering to industry standards and best practices. Your ability to write clean, efficient, and maintainable code is exemplary, and you demonstrate a strong grasp of design patterns and reusable components. Your testing practices, including unit testing and integration testing, are thorough and reliable. Furthermore, you excel in documentation, providing clear and comprehensive comments and READMEs, and you show proficiency in version control workflows such as Git. Your dedication to these best practices ensures that your work is both robust and highly maintainable."
	}
];

export const ChartDescription = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="max-w-lg min-w-min ml-auto m-4 p-4 bg-gray shadow-md rounded-lg">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-4 gap-8 w-100 overflow-auto">
                {skills.map((skill, index) => (
                    <button
                        key={index}
                        className={`flex-1 py-2 text-center cursor-pointer transition-colors duration-300 ${activeTab === index
                                ? 'border-b-4 border-[#006366] text-[#006366]'
                                : 'text-gray-500 hover:text-[#006366]'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {skill.subject}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-[#006366]">{skills[activeTab].subject}</h3>
                <p className="mt-2 text-gray-700">{skills[activeTab].description}</p>
            </div>
        </div>
    );

    
}

export default ChartDescription;