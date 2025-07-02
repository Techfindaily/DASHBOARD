import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import ApexChart from '../charts/ApexChart';

const PredictiveCharts: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('5d');
  const [selectedMarket, setSelectedMarket] = useState('NASDAQ');

  const timeframes = [
    { value: '1d', label: '1 Day' },
    { value: '5d', label: '5 Days' },
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
  ];

  const markets = [
    { value: 'NASDAQ', label: 'NASDAQ' },
    { value: 'S&P500', label: 'S&P 500' },
    { value: 'DOW', label: 'Dow Jones' },
    { value: 'RUSSELL', label: 'Russell 2000' },
  ];

  const getChartData = () => {
    const baseData = {
      'NASDAQ': {
        historical: [15420, 15380, 15445, 15520, 15480, 15610, 15645],
        predicted: [null, null, null, null, null, 15645, 15680, 15720, 15785, 15750, 15820],
        confidence: 87,
        trend: 'Bullish',
        change: '+2.3%'
      },
      'S&P500': {
        historical: [4520, 4510, 4535, 4545, 4530, 4560, 4575],
        predicted: [null, null, null, null, null, 4575, 4590, 4605, 4620, 4610, 4635],
        confidence: 82,
        trend: 'Bullish',
        change: '+1.8%'
      },
      'DOW': {
        historical: [34200, 34150, 34180, 34220, 34190, 34250, 34280],
        predicted: [null, null, null, null, null, 34280, 34310, 34340, 34360, 34345, 34380],
        confidence: 79,
        trend: 'Neutral',
        change: '+0.9%'
      },
      'RUSSELL': {
        historical: [1950, 1940, 1955, 1960, 1945, 1970, 1975],
        predicted: [null, null, null, null, null, 1975, 1985, 1995, 2005, 1990, 2010],
        confidence: 75,
        trend: 'Bullish',
        change: '+2.8%'
      }
    };

    return baseData[selectedMarket as keyof typeof baseData];
  };

  const chartData = getChartData();
  const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];

  const series = [
    {
      name: 'Historical',
      data: chartData.historical,
      color: '#6366f1'
    },
    {
      name: 'AI Prediction',
      data: chartData.predicted,
      color: '#10b981'
    }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'Bullish': return 'text-green-600 bg-green-100';
      case 'Bearish': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Predictive Charts</h1>
          <p className="mt-1 text-gray-600">AI-powered market forecasting and analysis</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">GPT Market Model</span>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Market Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Market Index</label>
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {markets.map((market) => (
                <option key={market.value} value={market.value}>
                  {market.label}
                </option>
              ))}
            </select>
          </div>

          {/* Timeframe Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Prediction Period</label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{selectedMarket} Prediction</h2>
            <p className="text-sm text-gray-600">Next {selectedTimeframe} forecast with confidence intervals</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${getTrendColor(chartData.trend)}`}>
                {chartData.trend}
              </span>
            </div>
            <div className="text-lg font-bold text-green-600">{chartData.change}</div>
          </div>
        </div>

        <div className="h-80">
          <ApexChart 
            series={series}
            categories={categories}
            height="100%"
          />
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-indigo-900">AI Prediction Summary</p>
              <p className="text-xs text-indigo-700">
                Expected {chartData.trend.toLowerCase()} trend with {chartData.change} potential movement
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-indigo-700">Confidence:</span>
                <span className="font-bold text-indigo-900">{chartData.confidence}%</span>
              </div>
              <div className="w-16 h-2 bg-indigo-200 rounded-full">
                <div 
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${chartData.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Technical Analysis</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">RSI (14)</span>
              <span className="font-medium text-gray-900">67.4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">MACD</span>
              <span className="font-medium text-green-600">Bullish</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Volume</span>
              <span className="font-medium text-orange-600">Above Avg</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Key Events</h3>
          </div>
          <div className="space-y-3">
            <div className="text-sm">
              <div className="font-medium text-gray-900">Fed Meeting</div>
              <div className="text-gray-600">Tomorrow 2:00 PM</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">Earnings Season</div>
              <div className="text-gray-600">Next Week</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">Options Expiry</div>
              <div className="text-gray-600">Friday</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                Strong momentum detected in technology sector
              </p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                Institutional buying pressure increasing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveCharts;