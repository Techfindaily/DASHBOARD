import React, { useState } from 'react';
import { Users, TrendingUp, TrendingDown, Star, Copy, MessageCircle, ThumbsUp, Eye } from 'lucide-react';

const SocialTrading: React.FC = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');

  const tabs = [
    { id: 'leaderboard', label: 'Top Traders' },
    { id: 'following', label: 'Following' },
    { id: 'community', label: 'Community' },
    { id: 'insights', label: 'Social Insights' },
  ];

  const topTraders = [
    {
      id: 1,
      name: 'Alex Chen',
      username: '@alextrader',
      avatar: '👨‍💼',
      rank: 1,
      return: '+47.8%',
      followers: 12450,
      winRate: 73,
      trades: 156,
      riskScore: 'Medium',
      strategy: 'Growth Tech Focus',
      recentTrades: ['NVDA +12%', 'AAPL +5%', 'MSFT +8%'],
      bio: 'AI-focused investor with 8 years experience. Specializing in tech growth stocks and emerging markets.',
      verified: true,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      username: '@sarahj_trades',
      avatar: '👩‍💼',
      rank: 2,
      return: '+42.3%',
      followers: 9870,
      winRate: 68,
      trades: 203,
      riskScore: 'Low',
      strategy: 'Dividend Value',
      recentTrades: ['JNJ +3%', 'PG +4%', 'KO +2%'],
      bio: 'Conservative value investor focused on dividend aristocrats and stable returns.',
      verified: true,
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      username: '@mikeR_crypto',
      avatar: '👨‍💻',
      rank: 3,
      return: '+38.9%',
      followers: 8320,
      winRate: 65,
      trades: 89,
      riskScore: 'High',
      strategy: 'Crypto & DeFi',
      recentTrades: ['BTC +15%', 'ETH +18%', 'SOL +22%'],
      bio: 'Cryptocurrency specialist with focus on DeFi protocols and emerging blockchain technologies.',
      verified: false,
    },
    {
      id: 4,
      name: 'Emma Thompson',
      username: '@emma_esg',
      avatar: '👩‍🔬',
      rank: 4,
      return: '+35.7%',
      followers: 6540,
      winRate: 71,
      trades: 124,
      riskScore: 'Medium',
      strategy: 'ESG Investing',
      recentTrades: ['TSLA +9%', 'NEE +6%', 'ICLN +11%'],
      bio: 'Sustainable investing advocate focusing on ESG-compliant companies and clean energy.',
      verified: true,
    },
  ];

  const followingTraders = [
    {
      name: 'Alex Chen',
      username: '@alextrader',
      avatar: '👨‍💼',
      return: '+47.8%',
      status: 'Just bought NVDA',
      time: '2 hours ago',
      copying: true,
    },
    {
      name: 'Sarah Johnson',
      username: '@sarahj_trades',
      avatar: '👩‍💼',
      return: '+42.3%',
      status: 'Added to JNJ position',
      time: '4 hours ago',
      copying: false,
    },
  ];

  const communityPosts = [
    {
      author: 'Alex Chen',
      username: '@alextrader',
      avatar: '👨‍💼',
      time: '3 hours ago',
      content: 'AI infrastructure spending is accelerating faster than expected. NVDA and AMD are my top picks for Q1 2025. The data center buildout is just getting started. 🚀',
      likes: 234,
      comments: 45,
      shares: 12,
      tags: ['AI', 'Semiconductors', 'Growth'],
    },
    {
      author: 'Emma Thompson',
      username: '@emma_esg',
      avatar: '👩‍🔬',
      time: '5 hours ago',
      content: 'ESG funds are outperforming traditional benchmarks by 3.2% this quarter. Sustainable investing is not just about values anymore - it\'s about returns. Check out my latest analysis on clean energy ETFs.',
      likes: 189,
      comments: 32,
      shares: 28,
      tags: ['ESG', 'Sustainable', 'ETFs'],
    },
    {
      author: 'Mike Rodriguez',
      username: '@mikeR_crypto',
      avatar: '👨‍💻',
      time: '8 hours ago',
      content: 'Bitcoin breaking through resistance at $45K. Next target is $50K. DeFi protocols are showing strong fundamentals. This could be the start of the next bull run. 📈',
      likes: 156,
      comments: 67,
      shares: 19,
      tags: ['Bitcoin', 'DeFi', 'Crypto'],
    },
  ];

  const socialInsights = [
    {
      title: 'Most Discussed Stocks',
      data: [
        { symbol: 'NVDA', mentions: 1247, sentiment: 'Bullish' },
        { symbol: 'TSLA', mentions: 892, sentiment: 'Mixed' },
        { symbol: 'AAPL', mentions: 756, sentiment: 'Bullish' },
        { symbol: 'MSFT', mentions: 634, sentiment: 'Bullish' },
      ],
    },
    {
      title: 'Trending Strategies',
      data: [
        { strategy: 'AI Infrastructure', popularity: 85, growth: '+23%' },
        { strategy: 'ESG Investing', popularity: 72, growth: '+18%' },
        { strategy: 'Dividend Growth', popularity: 68, growth: '+12%' },
        { strategy: 'Crypto DeFi', popularity: 54, growth: '+31%' },
      ],
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-orange-600 bg-orange-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Bullish': return 'text-green-600 bg-green-100';
      case 'Bearish': return 'text-red-600 bg-red-100';
      case 'Mixed': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Social Trading</h1>
          <p className="mt-1 text-gray-600">Follow top traders and learn from the community</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Users className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">Community Active</span>
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
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          {topTraders.map((trader) => (
            <div key={trader.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                      {trader.avatar}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      #{trader.rank}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{trader.name}</h3>
                      {trader.verified && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{trader.username}</p>
                    <p className="text-sm text-gray-700">{trader.bio}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 mb-1">{trader.return}</div>
                  <div className="text-sm text-gray-600">Annual Return</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{trader.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{trader.winRate}%</div>
                  <div className="text-sm text-gray-600">Win Rate</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{trader.trades}</div>
                  <div className="text-sm text-gray-600">Trades</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className={`text-sm px-2 py-1 rounded-full font-medium ${getRiskColor(trader.riskScore)}`}>
                    {trader.riskScore} Risk
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Strategy: {trader.strategy}</h4>
                <div className="flex flex-wrap gap-2">
                  {trader.recentTrades.map((trade, index) => (
                    <span key={index} className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      {trade}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium flex items-center justify-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Follow</span>
                </button>
                <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors font-medium flex items-center justify-center space-x-2">
                  <Copy className="h-4 w-4" />
                  <span>Copy Trades</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'following' && (
        <div className="space-y-4">
          {followingTraders.map((trader, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-lg">
                    {trader.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{trader.name}</h3>
                    <p className="text-sm text-gray-600">{trader.username}</p>
                    <p className="text-sm text-gray-700 mt-1">{trader.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{trader.return}</div>
                  <div className="text-sm text-gray-600">{trader.time}</div>
                  <div className="mt-2">
                    {trader.copying ? (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Auto-Copying
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        Following
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'community' && (
        <div className="space-y-6">
          {communityPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-lg">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <span className="text-sm text-gray-600">{post.username}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                      <Copy className="h-4 w-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'insights' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {socialInsights.map((insight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{insight.title}</h3>
              
              <div className="space-y-4">
                {insight.data.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">
                          {item.symbol || item.strategy}
                        </span>
                        {item.sentiment && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSentimentColor(item.sentiment)}`}>
                            {item.sentiment}
                          </span>
                        )}
                      </div>
                      {item.mentions && (
                        <div className="text-sm text-gray-600">{item.mentions} mentions</div>
                      )}
                      {item.popularity && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2 rounded-full"
                            style={{ width: `${item.popularity}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      {item.growth && (
                        <span className="text-sm font-medium text-green-600">{item.growth}</span>
                      )}
                      {item.popularity && (
                        <div className="text-sm text-gray-600">{item.popularity}%</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialTrading;