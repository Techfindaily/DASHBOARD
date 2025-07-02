import React from 'react';
import { Download, Calendar, Sparkles } from 'lucide-react';

const DailyDigest: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Daily Digest</h2>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>Generated 9:00 AM</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Today's Movers */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Today's Top Movers</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-green-700 mb-2">Gainers</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">NVDA</span>
                  <span className="text-green-600 font-medium">+4.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">AAPL</span>
                  <span className="text-green-600 font-medium">+1.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">MSFT</span>
                  <span className="text-green-600 font-medium">+1.2%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-red-700 mb-2">Losers</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">JPM</span>
                  <span className="text-red-600 font-medium">-2.1%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">BA</span>
                  <span className="text-red-600 font-medium">-1.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">GE</span>
                  <span className="text-red-600 font-medium">-0.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Sentiment */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Market Sentiment</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">Cautiously Bullish</div>
              <div className="text-sm text-gray-600">Overall market direction trending positive with selective opportunities</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-600">74</div>
              <div className="text-sm text-gray-600">Sentiment Score</div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key AI Insights</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">
                Technology sector showing strong momentum driven by AI infrastructure investments
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">
                Federal Reserve policy stance supporting growth equity valuations
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">
                Energy sector transition creating new investment opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Powered by <span className="font-medium text-indigo-600">FinGPT Engine</span>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyDigest;