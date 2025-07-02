import React, { useState } from 'react';
import { Bell, Zap, Plus, Settings, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

const AlertsAutomation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  const tabs = [
    { id: 'alerts', label: 'Price Alerts' },
    { id: 'automation', label: 'Trading Automation' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'history', label: 'Alert History' },
  ];

  const priceAlerts = [
    {
      id: 1,
      symbol: 'AAPL',
      type: 'Price Above',
      target: 200,
      current: 195.43,
      status: 'Active',
      created: '2024-12-10',
      triggered: false,
    },
    {
      id: 2,
      symbol: 'TSLA',
      type: 'Price Below',
      target: 240,
      current: 248.92,
      status: 'Active',
      created: '2024-12-08',
      triggered: false,
    },
    {
      id: 3,
      symbol: 'NVDA',
      type: 'Volume Spike',
      target: '50M+',
      current: '52.1M',
      status: 'Triggered',
      created: '2024-12-12',
      triggered: true,
    },
    {
      id: 4,
      symbol: 'MSFT',
      type: 'RSI Oversold',
      target: '<30',
      current: '34.2',
      status: 'Active',
      created: '2024-12-11',
      triggered: false,
    },
  ];

  const automationRules = [
    {
      id: 1,
      name: 'Tech Dip Buyer',
      description: 'Buy tech stocks when they drop 5% in a day',
      trigger: 'Price drops 5% in 1 day',
      action: 'Buy $500 worth',
      symbols: ['AAPL', 'MSFT', 'GOOGL'],
      status: 'Active',
      executions: 3,
      lastTriggered: '2024-12-10',
    },
    {
      id: 2,
      name: 'Profit Taker',
      description: 'Sell positions when they reach 20% profit',
      trigger: 'Position gains 20%',
      action: 'Sell 50% of position',
      symbols: ['All Holdings'],
      status: 'Active',
      executions: 7,
      lastTriggered: '2024-12-09',
    },
    {
      id: 3,
      name: 'Stop Loss Protection',
      description: 'Automatic stop loss at 10% down',
      trigger: 'Position loses 10%',
      action: 'Sell entire position',
      symbols: ['All Holdings'],
      status: 'Active',
      executions: 1,
      lastTriggered: '2024-12-05',
    },
    {
      id: 4,
      name: 'Dividend Reinvestment',
      description: 'Automatically reinvest dividend payments',
      trigger: 'Dividend received',
      action: 'Buy more shares',
      symbols: ['JNJ', 'PG', 'KO'],
      status: 'Paused',
      executions: 12,
      lastTriggered: '2024-11-28',
    },
  ];

  const notificationSettings = [
    {
      category: 'Price Alerts',
      email: true,
      push: true,
      sms: false,
      description: 'Get notified when price targets are hit',
    },
    {
      category: 'Trade Executions',
      email: true,
      push: true,
      sms: true,
      description: 'Notifications for automated trade executions',
    },
    {
      category: 'Market News',
      email: false,
      push: true,
      sms: false,
      description: 'Breaking news affecting your holdings',
    },
    {
      category: 'Portfolio Updates',
      email: true,
      push: false,
      sms: false,
      description: 'Daily portfolio performance summaries',
    },
    {
      category: 'Risk Alerts',
      email: true,
      push: true,
      sms: true,
      description: 'High-priority risk warnings',
    },
  ];

  const alertHistory = [
    {
      id: 1,
      symbol: 'NVDA',
      type: 'Price Alert',
      message: 'NVDA reached target price of $440',
      timestamp: '2024-12-12 10:30 AM',
      status: 'Triggered',
      action: 'Email sent, Push notification sent',
    },
    {
      id: 2,
      symbol: 'AAPL',
      type: 'Volume Alert',
      message: 'AAPL volume exceeded 50M shares',
      timestamp: '2024-12-11 2:15 PM',
      status: 'Triggered',
      action: 'Push notification sent',
    },
    {
      id: 3,
      symbol: 'TSLA',
      type: 'Automation',
      message: 'Stop loss triggered for TSLA position',
      timestamp: '2024-12-10 11:45 AM',
      status: 'Executed',
      action: 'Sold 50 shares at $245.20',
    },
    {
      id: 4,
      symbol: 'MSFT',
      type: 'Price Alert',
      message: 'MSFT RSI dropped below 30',
      timestamp: '2024-12-09 9:20 AM',
      status: 'Triggered',
      action: 'Email sent, SMS sent',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Triggered': return 'text-blue-600 bg-blue-100';
      case 'Paused': return 'text-orange-600 bg-orange-100';
      case 'Executed': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Alerts & Automation</h1>
          <p className="mt-1 text-gray-600">Smart alerts and automated trading strategies</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Zap className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">AI-Powered Automation</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{priceAlerts.filter(a => a.status === 'Active').length}</p>
            </div>
            <Bell className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Automation Rules</p>
              <p className="text-2xl font-bold text-gray-900">{automationRules.filter(r => r.status === 'Active').length}</p>
            </div>
            <Zap className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Triggered Today</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-400" />
          </div>
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
      {activeTab === 'alerts' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Price Alerts</h3>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105">
              <Plus className="h-4 w-4" />
              <span>Create Alert</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {priceAlerts.map((alert) => (
              <div key={alert.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{alert.symbol}</h4>
                    <p className="text-sm text-gray-600">{alert.type}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Target</span>
                    <span className="font-medium text-gray-900">{alert.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current</span>
                    <span className="font-medium text-gray-900">{alert.current}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Created</span>
                    <span className="text-sm text-gray-600">{alert.created}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 text-sm border border-red-300 text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'automation' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Trading Automation Rules</h3>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105">
              <Plus className="h-4 w-4" />
              <span>Create Rule</span>
            </button>
          </div>

          <div className="space-y-4">
            {automationRules.map((rule) => (
              <div key={rule.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{rule.name}</h4>
                    <p className="text-gray-600 mb-3">{rule.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-1">Trigger</h5>
                        <p className="text-sm text-gray-700">{rule.trigger}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-1">Action</h5>
                        <p className="text-sm text-gray-700">{rule.action}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {rule.symbols.map((symbol) => (
                        <span key={symbol} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                          {symbol}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Executions: {rule.executions}</span>
                      <span>•</span>
                      <span>Last: {rule.lastTriggered}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(rule.status)}`}>
                      {rule.status}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Settings className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Edit Rule
                  </button>
                  <button className={`text-sm px-3 py-2 rounded-lg transition-colors ${
                    rule.status === 'Active' 
                      ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}>
                    {rule.status === 'Active' ? 'Pause' : 'Activate'}
                  </button>
                  <button className="text-sm border border-red-300 text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
          
          <div className="space-y-4">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{setting.category}</h4>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Email</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.email}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Push</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.push}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">SMS</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.sms}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Alert History</h3>
          
          <div className="space-y-4">
            {alertHistory.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{item.symbol}</h4>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item.type}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{item.message}</p>
                    <p className="text-sm text-gray-600">{item.action}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{item.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsAutomation;