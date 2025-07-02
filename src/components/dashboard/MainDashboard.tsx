import React, { useState } from 'react';
import StockOverview from './StockOverview';
import NewsCard from './NewsCard';
import PredictiveChart from './PredictiveChart';
import RiskFeed from './RiskFeed';
import DailyDigest from './DailyDigest';
import AllocationChart from './AllocationChart';

const MainDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const tabs = [
    { id: 'insights', label: 'Insights' },
    { id: 'portfolio', label: 'Portfolio Planner' },
    { id: 'market', label: 'Market Summary' },
    { id: 'risks', label: 'Risk Feed' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">AI Investment Dashboard</h1>
          <p className="mt-1 text-gray-600">Real-time insights powered by GPT intelligence</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-green-800">Market Open</span>
            <span className="ml-2 text-xs text-green-600">+0.85% S&P 500</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'insights' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <StockOverview />
            <PredictiveChart />
            <DailyDigest />
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            <NewsCard />
            <RiskFeed />
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AllocationChart />
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Optimization</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">Recommendation</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">AI Generated</span>
                </div>
                <p className="text-sm text-blue-700">
                  Consider reducing overexposure to tech-heavy assets. Diversify into defensive sectors.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Risk Score</span>
                  <span className="text-sm font-bold text-orange-600">Medium (6/10)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Expected Return</span>
                  <span className="text-sm font-bold text-green-600">8.4% annually</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Sharpe Ratio</span>
                  <span className="text-sm font-bold text-blue-600">1.42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'market' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Movers</h3>
            <div className="space-y-3">
              {[
                { symbol: 'NVDA', change: '+4.5%', color: 'green' },
                { symbol: 'TSLA', change: '+2.8%', color: 'green' },
                { symbol: 'JPM', change: '-2.1%', color: 'red' },
                { symbol: 'META', change: '+1.9%', color: 'green' },
              ].map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{stock.symbol}</span>
                  <span className={`font-bold ${stock.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector Performance</h3>
            <div className="space-y-3">
              {[
                { sector: 'Technology', change: '+2.1%', color: 'green' },
                { sector: 'Healthcare', change: '+0.8%', color: 'green' },
                { sector: 'Financials', change: '-1.2%', color: 'red' },
                { sector: 'Energy', change: '+1.5%', color: 'green' },
              ].map((sector) => (
                <div key={sector.sector} className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{sector.sector}</span>
                  <span className={`font-bold ${sector.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    {sector.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Sentiment</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Bullish</div>
              <div className="text-sm text-gray-600 mb-4">Confidence: 73%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'risks' && (
        <div className="space-y-6">
          <RiskFeed expanded />
        </div>
      )}
    </div>
  );
};

export default MainDashboard;