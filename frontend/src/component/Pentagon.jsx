import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
    { subject: 'React', A: 120, fullMark: 150 },
    { subject: 'Nodejs', A: 98, fullMark: 150 },
    { subject: 'Communication', A: 89, fullMark: 150 },
    { subject: 'slsls', A: 86, fullMark: 150 },
    { subject: 'sss', A: 99, fullMark: 150 },
];

const Pentagon = () => {
    return (
        <RadarChart cx = {300} cy={250} outerRadius={150} width={600} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Skill Graph" dataKey="A" stroke='#000' fill='#2c6353' fillOpacity={0.6} />
        </RadarChart>
    );
};

export default Pentagon;  