import React from 'react';

interface StatisticCardProps {
  value: string;
  label: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6 bg-blue-800 rounded-lg shadow-md">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-blue-100">{label}</div>
    </div>
  );
};

export default StatisticCard;