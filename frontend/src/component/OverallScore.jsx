import React from 'react';

const skills = [
    { name: 'React', score: 80 },
    { name: 'Nodejs', score: 70 },
    { name: 'Communication', score: 90 },
    { name: 'Problem-solving', score: 100 },
    { name: 'Creativity', score: 77 }
];

const averageScore = (skills.reduce((sum, skill) => sum + skill.score, 0) / skills.length).toFixed(2);

const OverallScore = () => {
    return(
        <div className = "italic">
            <h2 className="text-5xl">Overall Score</h2>
            <div className="text-5xl">{averageScore}</div>
            <div className="text-2xl ">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <span>{skill.name}: </span>
                        <span>{skill.score} </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OverallScore;