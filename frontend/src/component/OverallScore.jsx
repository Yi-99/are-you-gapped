import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className= " italic flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-3xl mb-4">Overall Score : {averageScore}</h2>
            
        </div>
    );
}

export default OverallScore;