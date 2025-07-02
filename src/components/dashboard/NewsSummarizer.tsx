import React, { useState } from 'react';
import { Search, Filter, Clock, ExternalLink, TrendingUp, Globe } from 'lucide-react';

const NewsSummarizer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const news = [
    {
      id: 1,
      headline: 'Federal Reserve maintains interest rates amid economic uncertainty',
      summary: 'The Federal Reserve decided to hold interest rates steady at 5.25%-5.5% range, citing mixed economic signals and ongoing inflation concerns. Market-neutral tone detected in the announcement with limited immediate impact expected on tech sector. Continued monetary stability favors growth stocks with strong fundamentals.',
      fullText: 'In a closely watched decision, the Federal Reserve opted to maintain current interest rates, signaling a cautious approach to monetary policy. The decision comes as economic data shows mixed signals...',
      sentiment: 'Neutral',
      confidence: 87,
      source: 'Financial Times',
      time: '2 hours ago',
      category: 'Monetary Policy',
      impact: 'Medium',
      relatedStocks: ['SPY', 'QQQ', 'IWM'],
    },
    {
      id: 2,
      headline: 'AI chip demand surges as tech giants expand infrastructure',
      summary: 'Major technology companies are significantly increasing their AI infrastructure investments, driving unprecedented demand for specialized semiconductors. Bullish signals detected for the semiconductor sector with NVIDIA, AMD, and Intel positioned for continued growth. Supply chain optimizations are improving profit margins across the industry.',
      fullText: 'The artificial intelligence boom continues to reshape the semiconductor landscape as major tech giants announce massive infrastructure expansions...',
      sentiment: 'Bullish',
      confidence: 92,
      source: 'Reuters',
      time: '4 hours ago',
      category: 'Technology',
      impact: 'High',
      relatedStocks: ['NVDA', 'AMD', 'INTC'],
    },
    {
      id: 3,
      headline: 'Energy sector shows resilience despite oil price volatility',
      summary: 'Energy companies are demonstrating strong operational resilience amid fluctuating oil prices, with many pivoting towards renewable energy investments. Mixed signals across energy markets as traditional oil companies adapt their strategies for the energy transition. Renewable energy subsector showing particular strength.',
      fullText: 'The energy sector continues to navigate a complex landscape of traditional fossil fuel operations and renewable energy transitions...',
      sentiment: 'Mixed',
      confidence: 78,
      source: 'Bloomberg',
      time: '6 hours ago',
      category: 'Energy',
      impact: 'Medium',
      relatedStocks: ['XOM', 'CVX', 'NEE'],
    },
    {
      id: 4,
      headline: 'Healthcare innovation drives pharmaceutical sector optimism',
      summary: 'Breakthrough developments in gene therapy and personalized medicine are creating new growth opportunities in the pharmaceutical sector. Several major drug approvals expected in Q4, with biotech companies leading innovation. AI-driven drug discovery is accelerating development timelines significantly.',
      fullText: 'The pharmaceutical industry is experiencing a renaissance driven by cutting-edge scientific breakthroughs and technological innovations...',
      sentiment: 'Bullish',
      confidence: 85,
      source: 'Wall Street Journal',
      time: '8 hours ago',
      category: 'Healthcare',
      impact: 'High',
      relatedStocks: ['JNJ', 'PFE', 'MRNA'],
    },
    {
      id: 5,
      headline: 'Consumer spending patterns shift as inflation pressures ease',
      summary: 'Recent economic data shows changing consumer behavior as inflationary pressures begin to moderate. Discretionary spending is recovering in key categories while essential goods maintain stable demand. Retail sector showing signs of normalization after years of pandemic-driven volatility.',
      fullText: 'Consumer spending patterns are evolving as the economic landscape continues to stabilize following years of uncertainty...',
      sentiment: 'Cautiously Bullish',
      confidence: 81,
      source: 'CNBC',
      time: '10 hours ago',
      category: 'Consumer',
      impact: 'Medium',
      relatedStocks: ['AMZN', 'WMT', 'TGT'],
    },
    {
      id: 6,
      headline: 'Financial services adapt to digital transformation trends',
      summary: 'Traditional financial institutions are accelerating their digital transformation initiatives to compete with fintech disruptors. Mobile banking adoption continues to grow while branch networks undergo strategic consolidation. Cybersecurity investments becoming critical competitive differentiator.',
      fullText: 'The financial services industry is undergoing rapid transformation as traditional institutions embrace digital-first strategies...',
      sentiment: 'Neutral',
      confidence: 79,
      source: 'MarketWatch',
      time: '12 hours ago',
      category: 'Finance',
      impact: 'Medium',
      relatedStocks: ['JPM', 'BAC', 'WFC'],
    },
  ];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    if (filterBy === 'bullish') return matchesSearch && (article.sentiment === 'Bullish' || article.sentiment === 'Cautiously Bullish');
    if (filterBy === 'bearish') return matchesSearch && article.sentiment === 'Bearish';
    if (filterBy === 'high-impact') return matchesSearch && article.impact === 'High';
    
    return matchesSearch;
  });

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Bullish': return 'text-green-600 bg-green-100 border-green-200';
      case 'Cautiously Bullish': return 'text-green-600 bg-green-50 border-green-200';
      case 'Bearish': return 'text-red-600 bg-red-100 border-red-200';
      case 'Mixed': return 'text-orange-600 bg-orange-100 border-orange-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
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
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">News Summarizer</h1>
          <p className="mt-1 text-gray-600">AI-powered financial news analysis and insights</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Globe className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">GPT-NewsBot Active</span>
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
              placeholder="Search news and insights..."
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
              <option value="all">All News</option>
              <option value="bullish">Bullish Sentiment</option>
              <option value="bearish">Bearish Sentiment</option>
              <option value="high-impact">High Impact</option>
            </select>
          </div>
        </div>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {filteredNews.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {article.headline}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm text-gray-600">{article.source}</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="h-3 w-3" />
                    <span>{article.time}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm font-medium text-indigo-600">{article.category}</span>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
            </div>

            {/* AI Analysis */}
            <div className={`border rounded-lg p-4 mb-4 ${getSentimentColor(article.sentiment)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">AI Analysis Summary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium">Confidence: {article.confidence}%</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(article.impact)}`}>
                    {article.impact} Impact
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{article.summary}</p>
            </div>

            {/* Related Stocks & Sentiment */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                <div>
                  <span className="text-xs text-gray-500">Related Stocks:</span>
                  <div className="flex items-center space-x-2 mt-1">
                    {article.relatedStocks.map((stock) => (
                      <span key={stock} className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {stock}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSentimentColor(article.sentiment)}`}>
                  {article.sentiment}
                </span>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                  Read Full Analysis →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default NewsSummarizer;