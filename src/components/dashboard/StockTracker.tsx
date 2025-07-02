import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import MiniChart from '../charts/MiniChart';

const StockTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const stocks = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 195.43,
      change: 2.85,
      changePercent: 1.48,
      volume: '45.2M',
      marketCap: '$3.02T',
      pe: 28.4,
      insight: 'Strong earnings momentum, resistance at $195',
      risk: 'Medium',
      data: [190, 192, 189, 193, 195, 198, 195, 193, 195],
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.92,
      change: -8.17,
      changePercent: -3.18,
      volume: '89.7M',
      marketCap: '$791B',
      pe: 64.2,
      insight: 'Delivery concerns, support at $240',
      risk: 'High',
      data: [260, 255, 252, 258, 253, 249, 248, 246, 249],
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 442.78,
      change: 18.92,
      changePercent: 4.47,
      volume: '52.1M',
      marketCap: '$1.09T',
      pe: 71.8,
      insight: 'AI boom catalyst, breaking resistance',
      risk: 'Medium',
      data: [420, 425, 430, 438, 445, 440, 443, 448, 443],
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.15,
      change: 4.22,
      changePercent: 1.13,
      volume: '28.9M',
      marketCap: '$2.81T',
      pe: 34.1,
      insight: 'Cloud growth accelerating, stable outlook',
      risk: 'Low',
      data: [370, 372, 375, 376, 374, 377, 380, 379, 378],
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.87,
      change: -1.23,
      changePercent: -0.85,
      volume: '31.4M',
      marketCap: '$1.81T',
      pe: 26.7,
      insight: 'Ad revenue pressures, AI investments paying off',
      risk: 'Medium',
      data: [145, 144, 143, 144, 142, 141, 143, 144, 143],
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 156.34,
      change: 2.67,
      changePercent: 1.74,
      volume: '41.8M',
      marketCap: '$1.63T',
      pe: 54.3,
      insight: 'AWS growth strong, retail margins improving',
      risk: 'Medium',
      data: [152, 153, 154, 155, 154, 156, 157, 156, 156],
    },
  ];

  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    if (filterBy === 'gainers') return matchesSearch && stock.change > 0;
    if (filterBy === 'losers') return matchesSearch && stock.change < 0;
    if (filterBy === 'high-risk') return matchesSearch && stock.risk === 'High';
    
    return matchesSearch;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-orange-600 bg-orange-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Stock Tracker</h1>
          <p className="mt-1 text-gray-600">AI-powered stock analysis and insights</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Last updated:</span>
          <span className="text-sm font-medium text-indigo-600">Live</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Stocks</option>
              <option value="gainers">Gainers</option>
              <option value="losers">Losers</option>
              <option value="high-risk">High Risk</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stock Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStocks.map((stock) => (
          <div key={stock.symbol} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{stock.symbol}</h3>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">${stock.price}</div>
                <div className={`flex items-center space-x-1 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-medium">
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-20 mb-4">
              <MiniChart data={stock.data} color={stock.change >= 0 ? '#10B981' : '#EF4444'} />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Volume</p>
                <p className="font-semibold text-gray-900">{stock.volume}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Market Cap</p>
                <p className="font-semibold text-gray-900">{stock.marketCap}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">P/E Ratio</p>
                <p className="font-semibold text-gray-900">{stock.pe}</p>
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-blue-900">AI Analysis</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskColor(stock.risk)}`}>
                  {stock.risk} Risk
                </span>
              </div>
              <p className="text-sm text-blue-700">{stock.insight}</p>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 text-sm font-medium">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                Add Alert
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredStocks.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No stocks found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default StockTracker;