import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '../charts/MiniChart';

const StockOverview: React.FC = () => {
  const stocks = [
    {
      symbol: 'AAPL',
      price: 195.43,
      change: 2.85,
      changePercent: 1.48,
      insight: 'High volatility detected; resistance at $195',
      data: [190, 192, 189, 193, 195, 198, 195],
    },
    {
      symbol: 'TSLA',
      price: 248.92,
      change: -8.17,
      changePercent: -3.18,
      insight: 'Downward pressure; support level at $240',
      data: [260, 255, 252, 258, 253, 249, 248],
    },
    {
      symbol: 'NVDA',
      price: 442.78,
      change: 18.92,
      changePercent: 4.47,
      insight: 'Strong momentum; breaking resistance levels',
      data: [420, 425, 430, 438, 445, 440, 443],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Stock Tracker Overview</h2>
        <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">
          AI Insights
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">{stock.symbol}</h3>
              <div className="h-12 w-16">
                <MiniChart data={stock.data} color={stock.change >= 0 ? '#10B981' : '#EF4444'} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${stock.price}</span>
                <div className={`flex items-center space-x-1 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-medium">
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-900">GPT Analysis</span>
                  <span className="text-xs text-blue-600">Live</span>
                </div>
                <p className="text-sm text-blue-700">{stock.insight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockOverview;