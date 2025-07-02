import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

const NewsCard: React.FC = () => {
  const news = [
    {
      headline: 'Federal Reserve maintains interest rates amid economic uncertainty',
      summary: 'Market-neutral tone detected. Limited immediate impact expected on tech sector. Continued monetary stability favors growth stocks.',
      time: '2 hours ago',
      sentiment: 'Neutral',
    },
    {
      headline: 'AI chip demand surges as tech giants expand infrastructure',
      summary: 'Bullish signals for semiconductor sector. NVDA, AMD positioned for continued growth. Supply chain optimizations improving margins.',
      time: '4 hours ago',
      sentiment: 'Bullish',
    },
    {
      headline: 'Energy sector shows resilience despite oil price volatility',
      summary: 'Mixed signals across energy markets. Renewable transition creating new opportunities. Traditional oil companies adapting strategies.',
      time: '6 hours ago',
      sentiment: 'Mixed',
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Bullish': return 'text-green-600 bg-green-100';
      case 'Bearish': return 'text-red-600 bg-red-100';
      case 'Mixed': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">News Summarizer</h2>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
          GPT-NewsBot
        </span>
      </div>

      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-900 leading-tight">{item.headline}</h3>
              <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSentimentColor(item.sentiment)}`}>
                {item.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;