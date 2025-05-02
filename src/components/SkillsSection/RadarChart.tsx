
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface SkillLevel {
  skill: string;
  level: number;
}

interface RadarSkillChartProps {
  data: SkillLevel[];
  isDarkMode: boolean;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow text-xs border border-gray-200 dark:border-gray-700">
        <p className="font-semibold">{payload[0].payload.skill}</p>
        <p className="text-resume-primary dark:text-resume-muted">
          Level: {payload[0].value}/5
        </p>
      </div>
    );
  }
  return null;
};

const RadarSkillChart: React.FC<RadarSkillChartProps> = ({ data, isDarkMode }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid 
          stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} 
          strokeDasharray="3 3"
        />
        <PolarAngleAxis 
          dataKey="skill" 
          tick={{ 
            fontSize: 10, 
            fill: isDarkMode ? '#d1d5db' : '#4b5563',
            dy: 3
          }}
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 5]} 
          tick={false} 
          axisLine={false}
          stroke={isDarkMode ? '#6b7280' : '#9ca3af'}
        />
        <Tooltip content={<CustomTooltip />} />
        <Radar 
          name="Skills" 
          dataKey="level" 
          stroke="#0891b2" 
          fill="#06b6d4" 
          fillOpacity={0.6} 
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarSkillChart;
