import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, Target, FileText, BarChart3, Users } from 'lucide-react';

const MarketResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sectors');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'sectors', label: 'Sector Analysis' },
    { id: 'companies', label: 'Company Research' },
    { id: 'trends', label: 'Market Trends' },
    { id: 'reports', label: 'AI Reports' },
  ];

  const sectorData = [
    {
      name: 'Technology',
      performance: '+12.4%',
      trend: 'bullish',
      marketCap: '$14.2T',
      aiScore: 92,
      topStocks: ['AAPL', 'MSFT', 'GOOGL', 'NVDA'],
      insights: 'AI infrastructure investments driving unprecedented growth. Cloud adoption accelerating across enterprise segments.',
      riskFactors: ['Regulatory scrutiny', 'Valuation concerns', 'Competition'],
    },
    {
      name: 'Healthcare',
      performance: '+8.7%',
      trend: 'bullish',
      marketCap: '$6.8T',
      aiScore: 78,
      topStocks: ['JNJ', 'PFE', 'UNH', 'ABBV'],
      insights: 'Biotech innovations and aging demographics creating long-term tailwinds. AI drug discovery accelerating.',
      riskFactors: ['Drug pricing pressure', 'Regulatory delays', 'Patent cliffs'],
    },
    {
      name: 'Financial Services',
      performance: '+5.2%',
      trend: 'neutral',
      marketCap: '$8.9T',
      aiScore: 65,
      topStocks: ['JPM', 'BAC', 'WFC', 'GS'],
      insights: 'Interest rate environment favorable for traditional banking. Fintech disruption creating opportunities.',
      riskFactors: ['Credit losses', 'Regulatory changes', 'Economic slowdown'],
    },
    {
      name: 'Energy',
      performance: '+15.8%',
      trend: 'bullish',
      marketCap: '$4.1T',
      aiScore: 71,
      topStocks: ['XOM', 'CVX', 'COP', 'EOG'],
      insights: 'Energy transition creating new investment opportunities. Traditional players adapting strategies.',
      riskFactors: ['Commodity volatility', 'ESG concerns', 'Policy changes'],
    },
    {
      name: 'Consumer Discretionary',
      performance: '-2.3%',
      trend: 'bearish',
      marketCap: '$5.7T',
      aiScore: 54,
      topStocks: ['AMZN', 'TSLA', 'HD', 'MCD'],
      insights: 'Consumer spending patterns shifting post-pandemic. E-commerce growth moderating.',
      riskFactors: ['Inflation impact', 'Supply chain issues', 'Consumer confidence'],
    },
    {
      name: 'Industrial',
      performance: '+6.9%',
      trend: 'bullish',
      marketCap: '$3.2T',
      aiScore: 69,
      topStocks: ['BA', 'CAT', 'GE', 'MMM'],
      insights: 'Infrastructure spending and automation driving growth. Supply chain normalization helping margins.',
      riskFactors: ['Labor costs', 'Material inflation', 'Global trade'],
    },
  ];

  const companyReports = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      rating: 'Strong Buy',
      targetPrice: '$210',
      currentPrice: '$195.43',
      upside: '+7.5%',
      analyst: 'AI Research Bot',
      summary: 'Services revenue growth and AI integration driving long-term value creation.',
      keyMetrics: {
        pe: 28.4,
        revenue: '$394.3B',
        growth: '+2.8%',
        margin: '25.3%',
      },
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      rating: 'Buy',
      targetPrice: '$500',
      currentPrice: '$442.78',
      upside: '+12.9%',
      analyst: 'AI Research Bot',
      summary: 'AI chip demand exceeding expectations. Data center growth accelerating globally.',
      keyMetrics: {
        pe: 71.8,
        revenue: '$60.9B',
        growth: '+126%',
        margin: '73.0%',
      },
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      rating: 'Hold',
      targetPrice: '$260',
      currentPrice: '$248.92',
      upside: '+4.5%',
      analyst: 'AI Research Bot',
      summary: 'EV market leadership solid but competition intensifying. Autonomous driving progress key.',
      keyMetrics: {
        pe: 64.2,
        revenue: '$96.8B',
        growth: '+19%',
        margin: '8.4%',
      },
    },
  ];

  const marketTrends = [
    {
      title: 'AI Infrastructure Boom',
      impact: 'High',
      timeframe: 'Long-term',
      confidence: 94,
      description: 'Massive investments in AI computing infrastructure creating new market opportunities across semiconductors, cloud services, and data centers.',
      affectedSectors: ['Technology', 'Semiconductors', 'Real Estate'],
      investmentTheme: 'AI Revolution',
    },
    {
      title: 'Energy Transition Acceleration',
      impact: 'High',
      timeframe: 'Medium-term',
      confidence: 87,
      description: 'Renewable energy adoption accelerating globally, creating opportunities in clean tech while disrupting traditional energy.',
      affectedSectors: ['Energy', 'Utilities', 'Materials'],
      investmentTheme: 'Clean Energy',
    },
    {
      title: 'Demographic Shift Impact',
      impact: 'Medium',
      timeframe: 'Long-term',
      confidence: 82,
      description: 'Aging population in developed markets driving healthcare demand while creating labor market challenges.',
      affectedSectors: ['Healthcare', 'Consumer', 'Real Estate'],
      investmentTheme: 'Demographics',
    },
    {
      title: 'Supply Chain Reshoring',
      impact: 'Medium',
      timeframe: 'Medium-term',
      confidence: 76,
      description: 'Companies bringing manufacturing closer to home markets, benefiting domestic industrial and logistics sectors.',
      affectedSectors: ['Industrial', 'Transportation', 'Real Estate'],
      investmentTheme: 'Reshoring',
    },
  ];

  const aiReports = [
    {
      title: 'Q4 2024 AI Market Outlook',
      type: 'Market Analysis',
      date: 'Dec 15, 2024',
      confidence: 91,
      summary: 'Comprehensive analysis of AI market trends, investment opportunities, and risk factors for the upcoming quarter.',
      keyFindings: [
        'AI infrastructure spending to increase 45% YoY',
        'Semiconductor demand exceeding supply through 2025',
        'Enterprise AI adoption accelerating across all sectors',
      ],
    },
    {
      title: 'Federal Reserve Policy Impact Analysis',
      type: 'Economic Research',
      date: 'Dec 12, 2024',
      confidence: 88,
      summary: 'AI-powered analysis of Fed policy implications on different market sectors and investment strategies.',
      keyFindings: [
        'Rate cuts likely to benefit growth stocks',
        'Financial sector margins under pressure',
        'Real estate recovery expected in H1 2025',
      ],
    },
    {
      title: 'ESG Investment Trends Report',
      type: 'Thematic Research',
      date: 'Dec 10, 2024',
      confidence: 85,
      summary: 'Analysis of ESG investment flows and their impact on sector valuations and corporate strategies.',
      keyFindings: [
        'ESG funds outperforming traditional benchmarks',
        'Carbon pricing creating new investment opportunities',
        'Social impact metrics gaining investor attention',
      ],
    },
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'bullish': return 'text-green-600 bg-green-100';
      case 'bearish': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
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
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Market Research Hub</h1>
          <p className="mt-1 text-gray-600">AI-powered market analysis and investment research</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Target className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">AI Research Active</span>
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

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search research topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white">
              <option>All Categories</option>
              <option>High Confidence</option>
              <option>Recent Updates</option>
              <option>Trending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'sectors' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sectorData.map((sector) => (
            <div key={sector.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{sector.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-lg font-bold ${sector.trend === 'bullish' ? 'text-green-600' : sector.trend === 'bearish' ? 'text-red-600' : 'text-gray-600'}`}>
                      {sector.performance}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTrendColor(sector.trend)}`}>
                      {sector.trend}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">AI Score</div>
                  <div className="text-2xl font-bold text-indigo-600">{sector.aiScore}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Market Cap</p>
                  <p className="font-semibold text-gray-900">{sector.marketCap}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Top Holdings</p>
                  <div className="flex flex-wrap gap-1">
                    {sector.topStocks.slice(0, 3).map((stock) => (
                      <span key={stock} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        {stock}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">AI Insights</h4>
                <p className="text-sm text-gray-700">{sector.insights}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Risk Factors</h4>
                <div className="flex flex-wrap gap-1">
                  {sector.riskFactors.map((risk) => (
                    <span key={risk} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {risk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'companies' && (
        <div className="space-y-6">
          {companyReports.map((company) => (
            <div key={company.symbol} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{company.name} ({company.symbol})</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-lg font-bold text-gray-900">${company.currentPrice}</span>
                    <span className="text-sm text-gray-600">Target: {company.targetPrice}</span>
                    <span className="text-sm font-medium text-green-600">{company.upside}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {company.rating}
                  </span>
                  <p className="text-xs text-gray-600 mt-1">by {company.analyst}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{company.summary}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">P/E Ratio</p>
                  <p className="font-semibold text-gray-900">{company.keyMetrics.pe}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="font-semibold text-gray-900">{company.keyMetrics.revenue}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Growth</p>
                  <p className="font-semibold text-green-600">{company.keyMetrics.growth}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Margin</p>
                  <p className="font-semibold text-gray-900">{company.keyMetrics.margin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'trends' && (
        <div className="space-y-6">
          {marketTrends.map((trend, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{trend.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(trend.impact)}`}>
                      {trend.impact} Impact
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {trend.timeframe}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {trend.investmentTheme}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Confidence</div>
                  <div className="text-2xl font-bold text-indigo-600">{trend.confidence}%</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{trend.description}</p>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Affected Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  {trend.affectedSectors.map((sector) => (
                    <span key={sector} className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          {aiReports.map((report, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{report.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>Confidence: {report.confidence}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    Download PDF
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{report.summary}</p>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Findings</h4>
                <ul className="space-y-1">
                  {report.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketResearch;