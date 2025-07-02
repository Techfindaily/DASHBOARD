import React, { useState } from 'react';
import { AlertTriangle, Shield, Filter, Search, Clock, Eye } from 'lucide-react';

const AIRiskFeed: React.FC = () => {
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const risks = [
    {
      id: 1,
      title: 'TSLA showing irregular momentum patterns',
      description: 'Unusual trading volume detected with 40% above normal levels. Pattern deviation from historical norms suggests potential institutional repositioning. Technical indicators showing conflicting signals.',
      severity: 'Medium',
      time: '15 min ago',
      confidence: 'High',
      category: 'Technical',
      affectedAssets: ['TSLA', 'EV ETFs'],
      riskScore: 65,
      action: 'Monitor closely for next 2 trading sessions',
    },
    {
      id: 2,
      title: 'AI flags risk cluster in biotech ETFs',
      description: 'Multiple biotech holdings showing correlated negative signals across portfolio risk models. Sector rotation patterns indicating potential weakness in growth-oriented biotech companies. FDA approval calendar presents additional volatility risk.',
      severity: 'High',
      time: '32 min ago',
      confidence: 'Medium',
      category: 'Sector',
      affectedAssets: ['IBB', 'XBI', 'ARKG'],
      riskScore: 78,
      action: 'Consider defensive positioning',
    },
    {
      id: 3,
      title: 'Currency volatility affecting tech imports',
      description: 'USD fluctuations against Asian currencies may impact hardware manufacturing costs for major tech companies. Supply chain cost pressures building as currency hedging positions expire.',
      severity: 'Low',
      time: '1 hour ago',
      confidence: 'High',
      category: 'Currency',
      affectedAssets: ['AAPL', 'MSFT', 'GOOGL'],
      riskScore: 42,
      action: 'Long-term monitoring recommended',
    },
    {
      id: 4,
      title: 'Energy sector correlation warnings',
      description: 'Increased correlation between renewable and traditional energy stocks suggesting sector-wide systematic risk. Climate policy uncertainty creating volatility across all energy subsectors.',
      severity: 'Medium',
      time: '2 hours ago',
      confidence: 'Medium',
      category: 'Correlation',
      affectedAssets: ['XLE', 'ICLN', 'USO'],
      riskScore: 58,
      action: 'Diversification review suggested',
    },
    {
      id: 5,
      title: 'Credit spread widening in high-yield bonds',
      description: 'Corporate bond spreads showing expansion pattern typically associated with market stress. High-yield bond ETFs experiencing outflows as investors seek quality assets.',
      severity: 'High',
      time: '3 hours ago',
      confidence: 'High',
      category: 'Credit',
      affectedAssets: ['HYG', 'JNK', 'EMB'],
      riskScore: 72,
      action: 'Reduce credit exposure',
    },
    {
      id: 6,
      title: 'Options flow indicating large institutional hedging',
      description: 'Unusual options activity detected in SPY and QQQ with significant put volume. Smart money appears to be establishing downside protection ahead of key economic events.',
      severity: 'Medium',
      time: '4 hours ago',
      confidence: 'High',
      category: 'Options',
      affectedAssets: ['SPY', 'QQQ', 'IWM'],
      riskScore: 61,
      action: 'Monitor for market direction signals',
    },
  ];

  const filteredRisks = risks.filter(risk => {
    const matchesSearch = risk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         risk.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         risk.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    if (filterBy === 'high') return matchesSearch && risk.severity === 'High';
    if (filterBy === 'medium') return matchesSearch && risk.severity === 'Medium';
    if (filterBy === 'low') return matchesSearch && risk.severity === 'Low';
    
    return matchesSearch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100 border-red-200';
      case 'Medium': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Low': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score >= 70) return 'text-red-600 bg-red-100';
    if (score >= 50) return 'text-orange-600 bg-orange-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">AI Risk Alert Feed</h1>
          <p className="mt-1 text-gray-600">Real-time risk detection and analysis</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">LLM Detection Active</span>
        </div>
      </div>

      {/* Risk Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{risks.length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Risk</p>
              <p className="text-2xl font-bold text-red-600">{risks.filter(r => r.severity === 'High').length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Risk Score</p>
              <p className="text-2xl font-bold text-orange-600">
                {Math.round(risks.reduce((sum, r) => sum + r.riskScore, 0) / risks.length)}
              </p>
            </div>
            <Shield className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Last Update</p>
              <p className="text-lg font-bold text-green-600">Live</p>
            </div>
            <Clock className="h-8 w-8 text-green-400" />
          </div>
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
              placeholder="Search risk alerts..."
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
              <option value="all">All Risks</option>
              <option value="high">High Severity</option>
              <option value="medium">Medium Severity</option>
              <option value="low">Low Severity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Risk Alerts */}
      <div className="space-y-4">
        {filteredRisks.map((risk) => (
          <div key={risk.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3 flex-1">
                <AlertTriangle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                  risk.severity === 'High' ? 'text-red-600' : 
                  risk.severity === 'Medium' ? 'text-orange-600' : 'text-yellow-600'
                }`} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{risk.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getSeverityColor(risk.severity)}`}>
                      {risk.severity} Risk
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {risk.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getRiskScoreColor(risk.riskScore)}`}>
                      Risk Score: {risk.riskScore}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                  <Clock className="h-3 w-3" />
                  <span>{risk.time}</span>
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Auto-Flagged
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">{risk.description}</p>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Affected Assets</h4>
                <div className="flex flex-wrap gap-1">
                  {risk.affectedAssets.map((asset) => (
                    <span key={asset} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Action</h4>
                <p className="text-sm text-gray-700">{risk.action}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div>
                  <span>Confidence: </span>
                  <span className="font-medium text-gray-900">{risk.confidence}</span>
                </div>
                <div>
                  <span>Category: </span>
                  <span className="font-medium text-gray-900">{risk.category}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <button className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRisks.length === 0 && (
        <div className="text-center py-12">
          <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No risk alerts found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AIRiskFeed;