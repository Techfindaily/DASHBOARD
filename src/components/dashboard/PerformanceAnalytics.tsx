import React, { useState } from 'react';
import { Award, TrendingUp, BarChart3, Target, Calendar, DollarSign } from 'lucide-react';
import ApexChart from '../charts/ApexChart';

const PerformanceAnalytics: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1y');

  const timeframes = [
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
    { value: '6m', label: '6 Months' },
    { value: '1y', label: '1 Year' },
    { value: 'all', label: 'All Time' },
  ];

  const portfolioMetrics = {
    totalReturn: 24.7,
    annualizedReturn: 18.3,
    volatility: 16.2,
    sharpeRatio: 1.42,
    maxDrawdown: -8.5,
    winRate: 67.3,
    totalTrades: 156,
    avgHoldingPeriod: 23,
  };

  const performanceData = {
    series: [{
      name: 'Portfolio',
      data: [100, 102, 98, 105, 108, 112, 109, 115, 118, 122, 125, 124.7],
      color: '#6366f1'
    }, {
      name: 'S&P 500',
      data: [100, 101, 99, 103, 105, 107, 106, 109, 111, 114, 116, 115.2],
      color: '#10b981'
    }],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  const sectorPerformance = [
    { sector: 'Technology', allocation: 35, return: 28.4, benchmark: 22.1 },
    { sector: 'Healthcare', allocation: 20, return: 15.7, benchmark: 12.3 },
    { sector: 'Financial Services', allocation: 15, return: 18.9, benchmark: 16.4 },
    { sector: 'Consumer Discretionary', allocation: 12, return: 22.1, benchmark: 19.8 },
    { sector: 'Energy', allocation: 10, return: 31.2, benchmark: 28.7 },
    { sector: 'Industrials', allocation: 8, return: 14.6, benchmark: 13.2 },
  ];

  const topPerformers = [
    { symbol: 'NVDA', return: 45.8, contribution: 4.2, weight: 8.5 },
    { symbol: 'AAPL', return: 28.3, contribution: 3.1, weight: 12.0 },
    { symbol: 'MSFT', return: 22.7, contribution: 2.8, weight: 10.5 },
    { symbol: 'GOOGL', return: 19.4, contribution: 1.9, weight: 7.8 },
    { symbol: 'TSLA', return: 35.2, contribution: 1.7, weight: 5.2 },
  ];

  const bottomPerformers = [
    { symbol: 'META', return: -8.2, contribution: -0.8, weight: 6.1 },
    { symbol: 'NFLX', return: -12.4, contribution: -0.6, weight: 3.8 },
    { symbol: 'PYPL', return: -15.7, contribution: -0.5, weight: 2.9 },
  ];

  const riskMetrics = [
    { metric: 'Beta', value: 1.15, benchmark: 1.00, status: 'Higher Risk' },
    { metric: 'Alpha', value: 6.4, benchmark: 0.0, status: 'Outperforming' },
    { metric: 'Information Ratio', value: 0.89, benchmark: 0.0, status: 'Good' },
    { metric: 'Tracking Error', value: 4.2, benchmark: 0.0, status: 'Moderate' },
  ];

  const monthlyReturns = [
    { month: 'Jan 2024', return: 2.1 },
    { month: 'Feb 2024', return: -1.8 },
    { month: 'Mar 2024', return: 3.4 },
    { month: 'Apr 2024', return: 2.7 },
    { month: 'May 2024', return: 3.1 },
    { month: 'Jun 2024', return: -0.8 },
    { month: 'Jul 2024', return: 2.9 },
    { month: 'Aug 2024', return: 2.4 },
    { month: 'Sep 2024', return: 3.2 },
    { month: 'Oct 2024', return: 2.8 },
    { month: 'Nov 2024', return: 1.9 },
    { month: 'Dec 2024', return: -0.3 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="mt-1 text-gray-600">Comprehensive portfolio performance analysis</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Award className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">AI-Powered Analysis</span>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setTimeframe(tf.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeframe === tf.value
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Return</p>
              <p className="text-2xl font-bold text-green-600">+{portfolioMetrics.totalReturn}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Annualized Return</p>
              <p className="text-2xl font-bold text-blue-600">{portfolioMetrics.annualizedReturn}%</p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Sharpe Ratio</p>
              <p className="text-2xl font-bold text-purple-600">{portfolioMetrics.sharpeRatio}</p>
            </div>
            <Target className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Max Drawdown</p>
              <p className="text-2xl font-bold text-red-600">{portfolioMetrics.maxDrawdown}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-red-400 transform rotate-180" />
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Portfolio vs Benchmark</h3>
          <div className="text-sm text-gray-600">
            Outperforming S&P 500 by <span className="font-bold text-green-600">+9.5%</span>
          </div>
        </div>
        
        <div className="h-80">
          <ApexChart 
            series={performanceData.series}
            categories={performanceData.categories}
            height="100%"
          />
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Statistics</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{portfolioMetrics.volatility}%</div>
              <div className="text-sm text-gray-600">Volatility</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{portfolioMetrics.winRate}%</div>
              <div className="text-sm text-gray-600">Win Rate</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{portfolioMetrics.totalTrades}</div>
              <div className="text-sm text-gray-600">Total Trades</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{portfolioMetrics.avgHoldingPeriod}</div>
              <div className="text-sm text-gray-600">Avg Hold (days)</div>
            </div>
          </div>
        </div>

        {/* Risk Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk Analysis</h3>
          
          <div className="space-y-4">
            {riskMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{metric.metric}</div>
                  <div className="text-sm text-gray-600">{metric.status}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">vs {metric.benchmark}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sector Performance</h3>
        
        <div className="space-y-4">
          {sectorPerformance.map((sector, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{sector.sector}</h4>
                <span className="text-sm text-gray-600">{sector.allocation}% allocation</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Portfolio Return</div>
                  <div className="text-lg font-bold text-green-600">+{sector.return}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Benchmark Return</div>
                  <div className="text-lg font-bold text-gray-900">+{sector.benchmark}%</div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Outperformance</span>
                  <span>+{(sector.return - sector.benchmark).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                    style={{ width: `${Math.min(((sector.return - sector.benchmark) / 10) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top and Bottom Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performers</h3>
          
          <div className="space-y-3">
            {topPerformers.map((stock, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{stock.symbol}</div>
                  <div className="text-sm text-gray-600">{stock.weight}% weight</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">+{stock.return}%</div>
                  <div className="text-sm text-gray-600">+{stock.contribution}% contrib</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Performers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Bottom Performers</h3>
          
          <div className="space-y-3">
            {bottomPerformers.map((stock, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{stock.symbol}</div>
                  <div className="text-sm text-gray-600">{stock.weight}% weight</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-600">{stock.return}%</div>
                  <div className="text-sm text-gray-600">{stock.contribution}% contrib</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Returns */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Returns</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {monthlyReturns.map((month, index) => (
            <div key={index} className={`text-center p-3 rounded-lg ${
              month.return >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="text-sm text-gray-600">{month.month}</div>
              <div className={`font-bold ${month.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {month.return >= 0 ? '+' : ''}{month.return}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-3 rounded-full">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">AI Performance Insights</h3>
            <div className="space-y-2 text-indigo-700">
              <p>• Your portfolio is outperforming the S&P 500 by 9.5% with a Sharpe ratio of 1.42, indicating excellent risk-adjusted returns.</p>
              <p>• Technology sector allocation (35%) is driving strong performance with 28.4% returns vs 22.1% benchmark.</p>
              <p>• Consider reducing concentration risk in top 3 holdings (31% of portfolio) to improve diversification.</p>
              <p>• Current volatility (16.2%) is within acceptable range for your risk profile and return objectives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;