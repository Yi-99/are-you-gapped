import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
    { subject: 'React', A: 100, fullMark: 150 },
    { subject: 'Nodejs', A: 78, fullMark: 150 },
    { subject: 'Communication', A: 69, fullMark: 150 },
    { subject: 'slsls', A: 66, fullMark: 150 },
    { subject: 'sss', A: 99, fullMark: 150 },
];

const Pentagon = ({ cx, cy, outerRadius, width, height }) => {
    return (
        <RadarChart cx={cx ?? 150} cy={cy ?? 150} outerRadius={outerRadius} width={width} height={height} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={false} />
            
            <Radar name="Skill Graph" dataKey="A" stroke='#000' fill='#9BD8BB' fillOpacity={0.6} />

            <Tooltip
                contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
                itemStyle={{ color: '#2c6353' }}
                formatter={(value) => [`Score: ${value}`, '']}
                coordinate={{ x: 100, y: 100 }}
            />
        </RadarChart>
    );
};

export default Pentagon;