import React from 'react';
import { AlertTriangle, Shield, Clock } from 'lucide-react';

interface RiskFeedProps {
  expanded?: boolean;
}

const RiskFeed: React.FC<RiskFeedProps> = ({ expanded = false }) => {
  const risks = [
    {
      title: 'TSLA showing irregular momentum patterns',
      severity: 'Medium',
      time: '15 min ago',
      description: 'Unusual trading volume detected. Pattern deviation from historical norms.',
      confidence: 'High',
    },
    {
      title: 'AI flags risk cluster in biotech ETFs',
      severity: 'High',
      time: '32 min ago',
      description: 'Multiple biotech holdings showing correlated negative signals.',
      confidence: 'Medium',
    },
    {
      title: 'Currency volatility affecting tech imports',
      severity: 'Low',
      time: '1 hour ago',
      description: 'USD fluctuations may impact hardware manufacturing costs.',
      confidence: 'High',
    },
    {
      title: 'Energy sector correlation warnings',
      severity: 'Medium',
      time: '2 hours ago',
      description: 'Increased correlation between renewable and traditional energy stocks.',
      confidence: 'Medium',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100 border-red-200';
      case 'Medium': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Low': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const displayRisks = expanded ? risks : risks.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">AI Risk Alert Feed</h2>
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
            LLM Detection
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {displayRisks.map((risk, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getSeverityColor(risk.severity)} hover:shadow-md transition-shadow`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <h3 className="text-sm font-semibold leading-tight">{risk.title}</h3>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-white bg-opacity-50">
                {risk.severity}
              </span>
            </div>
            
            {expanded && (
              <p className="text-sm mb-3 opacity-90">{risk.description}</p>
            )}
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1 opacity-75">
                <Clock className="h-3 w-3" />
                <span>{risk.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="opacity-75">Confidence:</span>
                <span className="font-medium">{risk.confidence}</span>
                <span className="px-2 py-1 bg-white bg-opacity-50 rounded-full">Auto-Flagged</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!expanded && (
        <div className="mt-4 text-center">
          <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            View All Risks →
          </button>
        </div>
      )}
    </div>
  );
};

export default RiskFeed;