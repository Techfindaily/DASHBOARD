import React from 'react';
import { PieChart } from 'lucide-react';

const AllocationChart: React.FC = () => {
  const allocations = [
    { symbol: 'AAPL', percentage: 30, color: '#6366f1', amount: '$45,000' },
    { symbol: 'TSLA', percentage: 25, color: '#10b981', amount: '$37,500' },
    { symbol: 'NVDA', percentage: 20, color: '#f59e0b', amount: '$30,000' },
    { symbol: 'MSFT', percentage: 15, color: '#ef4444', amount: '$22,500' },
    { symbol: 'GOOGL', percentage: 10, color: '#8b5cf6', amount: '$15,000' },
  ];

  const totalValue = '$150,000';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <PieChart className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Smart Allocation</h2>
        </div>
        <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">
          AI Suggested
        </span>
      </div>

      {/* Donut Chart Visualization */}
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {allocations.map((allocation, index) => {
              const circumference = 2 * Math.PI * 40;
              const offset = allocations.slice(0, index).reduce((sum, item) => sum + item.percentage, 0);
              const strokeDasharray = `${(allocation.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -(offset / 100) * circumference;
              
              return (
                <circle
                  key={allocation.symbol}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={allocation.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 hover:opacity-80"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-900">{totalValue}</div>
            <div className="text-sm text-gray-600">Portfolio Value</div>
          </div>
        </div>
      </div>

      {/* Allocation Details */}
      <div className="space-y-3">
        {allocations.map((allocation) => (
          <div key={allocation.symbol} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: allocation.color }}
              ></div>
              <span className="font-medium text-gray-900">{allocation.symbol}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{allocation.percentage}%</div>
              <div className="text-sm text-gray-600">{allocation.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllocationChart;