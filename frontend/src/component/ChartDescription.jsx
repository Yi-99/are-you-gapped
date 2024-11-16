import React from 'react';
import { useState } from 'react';

const skills = [
    { subject: 'React', description: 'React is a JavaScript library for building user interfaces.' },
    { subject: 'Nodejs', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
    { subject: 'Communication', description: 'Effective communication is key for teamwork and project success.' },
    { subject: 'Problem-solving', description: 'Problem-solving skills are critical for overcoming challenges and achieving goals.' },
    { subject: 'Creativity', description: 'Creativity fosters innovation and helps develop unique solutions.' }
];

export const ChartDescription = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="max-w-lg mx-auto mt-8 p-4 bg-gray shadow-lg rounded-lg border border-gray-300">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-4">
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