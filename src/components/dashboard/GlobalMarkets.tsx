import React, { useState } from 'react';
import { Globe, TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';

const GlobalMarkets: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', label: 'All Markets' },
    { id: 'americas', label: 'Americas' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia-Pacific' },
    { id: 'emerging', label: 'Emerging Markets' },
  ];

  const globalIndices = [
    {
      name: 'S&P 500',
      symbol: 'SPX',
      value: 4567.89,
      change: 23.45,
      changePercent: 0.52,
      region: 'americas',
      country: 'United States',
      currency: 'USD',
      marketStatus: 'Open',
      timeZone: 'EST',
    },
    {
      name: 'NASDAQ',
      symbol: 'IXIC',
      value: 15234.67,
      change: 89.12,
      changePercent: 0.59,
      region: 'americas',
      country: 'United States',
      currency: 'USD',
      marketStatus: 'Open',
      timeZone: 'EST',
    },
    {
      name: 'FTSE 100',
      symbol: 'UKX',
      value: 7456.23,
      change: -12.34,
      changePercent: -0.17,
      region: 'europe',
      country: 'United Kingdom',
      currency: 'GBP',
      marketStatus: 'Closed',
      timeZone: 'GMT',
    },
    {
      name: 'DAX',
      symbol: 'DAX',
      value: 16789.45,
      change: 45.67,
      changePercent: 0.27,
      region: 'europe',
      country: 'Germany',
      currency: 'EUR',
      marketStatus: 'Closed',
      timeZone: 'CET',
    },
    {
      name: 'Nikkei 225',
      symbol: 'NKY',
      value: 33456.78,
      change: -123.45,
      changePercent: -0.37,
      region: 'asia',
      country: 'Japan',
      currency: 'JPY',
      marketStatus: 'Closed',
      timeZone: 'JST',
    },
    {
      name: 'Hang Seng',
      symbol: 'HSI',
      value: 17234.56,
      change: 234.56,
      changePercent: 1.38,
      region: 'asia',
      country: 'Hong Kong',
      currency: 'HKD',
      marketStatus: 'Closed',
      timeZone: 'HKT',
    },
    {
      name: 'Shanghai Composite',
      symbol: 'SHCOMP',
      value: 3123.45,
      change: 12.34,
      changePercent: 0.40,
      region: 'asia',
      country: 'China',
      currency: 'CNY',
      marketStatus: 'Closed',
      timeZone: 'CST',
    },
    {
      name: 'BSE Sensex',
      symbol: 'SENSEX',
      value: 67890.12,
      change: 456.78,
      changePercent: 0.68,
      region: 'emerging',
      country: 'India',
      currency: 'INR',
      marketStatus: 'Closed',
      timeZone: 'IST',
    },
  ];

  const currencies = [
    { pair: 'EUR/USD', rate: 1.0845, change: 0.0023, changePercent: 0.21 },
    { pair: 'GBP/USD', rate: 1.2634, change: -0.0045, changePercent: -0.35 },
    { pair: 'USD/JPY', rate: 149.67, change: 0.89, changePercent: 0.60 },
    { pair: 'USD/CNY', rate: 7.2345, change: 0.0123, changePercent: 0.17 },
    { pair: 'AUD/USD', rate: 0.6789, change: 0.0034, changePercent: 0.50 },
    { pair: 'USD/CAD', rate: 1.3456, change: -0.0067, changePercent: -0.49 },
  ];

  const commodities = [
    { name: 'Gold', symbol: 'XAUUSD', price: 2034.56, change: 12.34, changePercent: 0.61, unit: '/oz' },
    { name: 'Silver', symbol: 'XAGUSD', price: 24.67, change: -0.23, changePercent: -0.92, unit: '/oz' },
    { name: 'Crude Oil (WTI)', symbol: 'CL', price: 72.45, change: 1.23, changePercent: 1.73, unit: '/bbl' },
    { name: 'Natural Gas', symbol: 'NG', price: 2.89, change: -0.12, changePercent: -3.99, unit: '/MMBtu' },
    { name: 'Copper', symbol: 'HG', price: 3.78, change: 0.05, changePercent: 1.34, unit: '/lb' },
    { name: 'Bitcoin', symbol: 'BTCUSD', price: 43567.89, change: 1234.56, changePercent: 2.92, unit: '' },
  ];

  const marketNews = [
    {
      title: 'Asian Markets Rally on China Stimulus Hopes',
      summary: 'Major Asian indices gained as investors anticipate additional economic support measures from Beijing.',
      time: '2 hours ago',
      region: 'Asia-Pacific',
      impact: 'Positive',
    },
    {
      title: 'European Central Bank Holds Rates Steady',
      summary: 'ECB maintains current interest rate policy while signaling potential changes in Q2 2025.',
      time: '4 hours ago',
      region: 'Europe',
      impact: 'Neutral',
    },
    {
      title: 'Emerging Markets See Capital Inflows',
      summary: 'Developing market funds attract $2.3B in weekly inflows as risk appetite improves.',
      time: '6 hours ago',
      region: 'Emerging Markets',
      impact: 'Positive',
    },
  ];

  const filteredIndices = selectedRegion === 'all' 
    ? globalIndices 
    : globalIndices.filter(index => index.region === selectedRegion);

  const getMarketStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-green-600 bg-green-100';
      case 'Closed': return 'text-gray-600 bg-gray-100';
      case 'Pre-Market': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positive': return 'text-green-600 bg-green-100';
      case 'Negative': return 'text-red-600 bg-red-100';
      case 'Neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Global Markets</h1>
          <p className="mt-1 text-gray-600">Real-time global market data and analysis</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Globe className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">Live Market Data</span>
        </div>
      </div>

      {/* Region Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedRegion === region.id
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Global Indices */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Major Indices</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIndices.map((index) => (
            <div key={index.symbol} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{index.name}</h4>
                  <p className="text-sm text-gray-600">{index.country}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getMarketStatusColor(index.marketStatus)}`}>
                  {index.marketStatus}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="text-xl font-bold text-gray-900">
                  {index.value.toLocaleString()} {index.currency}
                </div>
                <div className={`flex items-center space-x-1 ${
                  index.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {index.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-medium">
                    {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {index.timeZone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currencies and Commodities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Currencies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Currency Exchange</h3>
          
          <div className="space-y-3">
            {currencies.map((currency) => (
              <div key={currency.pair} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{currency.pair}</div>
                  <div className="text-lg font-bold text-gray-900">{currency.rate.toFixed(4)}</div>
                </div>
                <div className={`text-right ${currency.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="font-medium">
                    {currency.change >= 0 ? '+' : ''}{currency.change.toFixed(4)}
                  </div>
                  <div className="text-sm">
                    ({currency.changePercent >= 0 ? '+' : ''}{currency.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commodities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Commodities</h3>
          
          <div className="space-y-3">
            {commodities.map((commodity) => (
              <div key={commodity.symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{commodity.name}</div>
                  <div className="text-lg font-bold text-gray-900">
                    ${commodity.price.toLocaleString()}{commodity.unit}
                  </div>
                </div>
                <div className={`text-right ${commodity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="font-medium">
                    {commodity.change >= 0 ? '+' : ''}${commodity.change.toFixed(2)}
                  </div>
                  <div className="text-sm">
                    ({commodity.changePercent >= 0 ? '+' : ''}{commodity.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market News */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Global Market News</h3>
        
        <div className="space-y-4">
          {marketNews.map((news, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900 leading-tight">{news.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(news.impact)}`}>
                    {news.impact}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{news.summary}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{news.region}</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Hours</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-900">New York</h4>
            <p className="text-sm text-green-700">9:30 AM - 4:00 PM EST</p>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Open</span>
          </div>
          <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900">London</h4>
            <p className="text-sm text-gray-700">8:00 AM - 4:30 PM GMT</p>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Closed</span>
          </div>
          <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900">Tokyo</h4>
            <p className="text-sm text-gray-700">9:00 AM - 3:00 PM JST</p>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Closed</span>
          </div>
          <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900">Hong Kong</h4>
            <p className="text-sm text-gray-700">9:30 AM - 4:00 PM HKT</p>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMarkets;