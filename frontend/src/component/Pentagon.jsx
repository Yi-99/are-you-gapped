import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';



const data = [
    { subject: 'React', A: 100, fullMark: 150 },
    { subject: 'Nodejs', A: 78, fullMark: 150 },
    { subject: 'Communication', A: 69, fullMark: 150 },
    { subject: 'slsls', A: 66, fullMark: 150 },
    { subject: 'sss', A: 99, fullMark: 150 },
];

const Pentagon = () => {
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Skill Graph" dataKey="A" stroke='#000' fill='#2c6353' fillOpacity={0.6} />

            <Tooltip
                contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
                itemStyle={{ color: '#2c6353' }}
                formatter={(value) => [`Score: ${value}`, '']}
            />
        </RadarChart>
    );
};

export default Pentagon;