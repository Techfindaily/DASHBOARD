import React from 'react';
import { Sparkles } from 'lucide-react';
import ApexChart from '../charts/ApexChart';

const PredictiveChart: React.FC = () => {
  const chartData = {
    series: [{
      name: 'Historical',
      data: [15420, 15380, 15445, 15520, 15480, 15610, 15645],
      color: '#6366f1'
    }, {
      name: 'Predicted',
      data: [null, null, null, null, null, 15645, 15680, 15720, 15785, 15750, 15820],
      color: '#10b981'
    }],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu']
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">NASDAQ Prediction</h2>
          <p className="text-sm text-gray-600">Next 5-Day Forecast</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">GPT Market Model</span>
          </div>
          <div className="text-sm text-gray-600">
            AI Confidence: <span className="font-semibold text-green-600">87%</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ApexChart 
          series={chartData.series}
          categories={chartData.categories}
          height="100%"
        />
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-900">Prediction Summary</p>
            <p className="text-xs text-indigo-700">Expected upward trend with +2.3% growth potential</p>
          </div>
          <div className="text-right">
            <div className="w-16 h-2 bg-green-200 rounded-full">
              <div className="w-14 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600 mt-1 block">High Confidence</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveChart;