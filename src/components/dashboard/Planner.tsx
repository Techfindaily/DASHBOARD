import React, { useState } from 'react';
import { PieChart, Target, Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';
import AllocationChart from './AllocationChart';

const Planner: React.FC = () => {
  const [portfolioValue, setPortfolioValue] = useState(150000);
  const [riskTolerance, setRiskTolerance] = useState('moderate');
  const [timeHorizon, setTimeHorizon] = useState('5-10');
  const [allocations, setAllocations] = useState([
    { symbol: 'AAPL', percentage: 30, amount: 45000 },
    { symbol: 'TSLA', percentage: 25, amount: 37500 },
    { symbol: 'NVDA', percentage: 20, amount: 30000 },
    { symbol: 'MSFT', percentage: 15, amount: 22500 },
    { symbol: 'GOOGL', percentage: 10, amount: 15000 },
  ]);

  const updateAllocation = (index: number, newPercentage: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].percentage = newPercentage;
    newAllocations[index].amount = (portfolioValue * newPercentage) / 100;
    setAllocations(newAllocations);
  };

  const totalPercentage = allocations.reduce((sum, allocation) => sum + allocation.percentage, 0);

  const aiRecommendations = [
    {
      type: 'Rebalancing',
      message: 'Consider reducing tech exposure from 90% to 70% for better diversification',
      impact: 'Risk Reduction',
      confidence: 85,
    },
    {
      type: 'Sector Allocation',
      message: 'Add healthcare and financial sectors to improve portfolio stability',
      impact: 'Diversification',
      confidence: 78,
    },
    {
      type: 'Risk Management',
      message: 'Current portfolio volatility is 18% - consider defensive positions',
      impact: 'Volatility Control',
      confidence: 92,
    },
  ];

  const portfolioMetrics = {
    expectedReturn: 8.4,
    volatility: 18.2,
    sharpeRatio: 1.42,
    maxDrawdown: -12.5,
    beta: 1.15,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Smart Investment Planner</h1>
          <p className="mt-1 text-gray-600">AI-powered portfolio optimization and planning</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Target className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">AI Optimization Active</span>
        </div>
      </div>

      {/* Portfolio Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Configuration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Value</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={portfolioValue}
                onChange={(e) => setPortfolioValue(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
            <select
              value={riskTolerance}
              onChange={(e) => setRiskTolerance(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Horizon</label>
            <select
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Current Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AllocationChart />
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Allocation Editor</h3>
          
          <div className="space-y-4">
            {allocations.map((allocation, index) => (
              <div key={allocation.symbol} className="flex items-center space-x-4">
                <div className="w-16">
                  <span className="font-medium text-gray-900">{allocation.symbol}</span>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={allocation.percentage}
                      onChange={(e) => updateAllocation(index, Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-20 text-right">
                  <div className="flex items-center space-x-1">
                    <input
                      type="number"
                      value={allocation.percentage}
                      onChange={(e) => updateAllocation(index, Number(e.target.value))}
                      className="w-12 text-sm border border-gray-300 rounded px-1 py-1"
                      min="0"
                      max="100"
                    />
                    <Percent className="h-3 w-3 text-gray-400" />
                  </div>
                </div>
                <div className="w-24 text-right">
                  <span className="text-sm font-medium text-gray-900">
                    ${allocation.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total Allocation:</span>
              <span className={`font-bold ${totalPercentage === 100 ? 'text-green-600' : 'text-red-600'}`}>
                {totalPercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{portfolioMetrics.expectedReturn}%</div>
            <div className="text-sm text-gray-600">Expected Return</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{portfolioMetrics.volatility}%</div>
            <div className="text-sm text-gray-600">Volatility</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{portfolioMetrics.sharpeRatio}</div>
            <div className="text-sm text-gray-600">Sharpe Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{portfolioMetrics.maxDrawdown}%</div>
            <div className="text-sm text-gray-600">Max Drawdown</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{portfolioMetrics.beta}</div>
            <div className="text-sm text-gray-600">Beta</div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calculator className="h-6 w-6 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
        </div>
        
        <div className="space-y-4">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{rec.type}</h4>
                  <p className="text-sm text-gray-700 mt-1">{rec.message}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-indigo-600">{rec.impact}</div>
                  <div className="text-xs text-gray-500">Confidence: {rec.confidence}%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-indigo-600 rounded-full"
                    style={{ width: `${rec.confidence}%` }}
                  ></div>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                  Apply Suggestion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
          Optimize Portfolio
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Save Configuration
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Export Report
        </button>
      </div>
    </div>
  );
};

export default Planner;