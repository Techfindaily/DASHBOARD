import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const FinancialTools: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState('compound');
  
  // Compound Interest Calculator State
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(10);
  const [compound, setCompound] = useState(12);

  // Retirement Calculator State
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [currentSavings, setCurrentSavings] = useState(25000);

  // Portfolio Rebalancing State
  const [portfolioValue, setPortfolioValue] = useState(100000);
  const [targetAllocations, setTargetAllocations] = useState({
    stocks: 70,
    bonds: 20,
    cash: 10,
  });
  const [currentAllocations, setCurrentAllocations] = useState({
    stocks: 75,
    bonds: 15,
    cash: 10,
  });

  const calculators = [
    { id: 'compound', label: 'Compound Interest', icon: TrendingUp },
    { id: 'retirement', label: 'Retirement Planning', icon: PieChart },
    { id: 'portfolio', label: 'Portfolio Rebalancing', icon: BarChart3 },
    { id: 'loan', label: 'Loan Calculator', icon: DollarSign },
    { id: 'tax', label: 'Tax Optimizer', icon: Percent },
    { id: 'risk', label: 'Risk Assessment', icon: Calculator },
  ];

  // Compound Interest Calculation
  const calculateCompoundInterest = () => {
    const amount = principal * Math.pow((1 + rate / 100 / compound), compound * time);
    const interest = amount - principal;
    return { amount, interest };
  };

  // Retirement Calculation
  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyRate = rate / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    
    // Future value of current savings
    const futureCurrentSavings = currentSavings * Math.pow(1 + rate / 100, yearsToRetirement);
    
    // Future value of monthly contributions
    const futureContributions = monthlyContribution * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
    
    const totalRetirementSavings = futureCurrentSavings + futureContributions;
    
    return {
      totalSavings: totalRetirementSavings,
      fromCurrentSavings: futureCurrentSavings,
      fromContributions: futureContributions,
    };
  };

  // Portfolio Rebalancing Calculation
  const calculateRebalancing = () => {
    const rebalanceNeeds = {
      stocks: (targetAllocations.stocks - currentAllocations.stocks) * portfolioValue / 100,
      bonds: (targetAllocations.bonds - currentAllocations.bonds) * portfolioValue / 100,
      cash: (targetAllocations.cash - currentAllocations.cash) * portfolioValue / 100,
    };
    
    return rebalanceNeeds;
  };

  const compoundResult = calculateCompoundInterest();
  const retirementResult = calculateRetirement();
  const rebalanceResult = calculateRebalancing();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Financial Tools</h1>
          <p className="mt-1 text-gray-600">AI-powered calculators and planning tools</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">Smart Calculations</span>
        </div>
      </div>

      {/* Calculator Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`flex flex-col items-center space-y-2 p-4 rounded-lg transition-all ${
                  activeCalculator === calc.id
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium text-center">{calc.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Content */}
      {activeCalculator === 'compound' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Compound Interest Calculator</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Initial Investment</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Interest Rate (%)</label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Compound Frequency</label>
                <select
                  value={compound}
                  onChange={(e) => setCompound(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value={1}>Annually</option>
                  <option value={4}>Quarterly</option>
                  <option value={12}>Monthly</option>
                  <option value={365}>Daily</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Results</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${compoundResult.amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-gray-600">Final Amount</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-xl font-bold text-blue-600">
                    ${principal.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Principal</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-xl font-bold text-green-600">
                    ${compoundResult.interest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-gray-600">Interest Earned</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-indigo-900 mb-2">AI Insight</h4>
                <p className="text-sm text-indigo-700">
                  Your investment will grow by {((compoundResult.amount / principal - 1) * 100).toFixed(1)}% over {time} years. 
                  Consider increasing your contribution frequency for better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCalculator === 'retirement' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Retirement Planning Calculator</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Contribution</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Annual Return (%)</label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Retirement Projection</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${retirementResult.totalSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-gray-600">Total at Retirement</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">From Current Savings</span>
                  <span className="font-bold text-blue-600">
                    ${retirementResult.fromCurrentSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">From Contributions</span>
                  <span className="font-bold text-green-600">
                    ${retirementResult.fromContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Years to Retirement</span>
                  <span className="font-bold text-gray-900">{retirementAge - currentAge}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-indigo-900 mb-2">AI Recommendation</h4>
                <p className="text-sm text-indigo-700">
                  Based on your current plan, you're on track for retirement. Consider increasing contributions by 10% 
                  to build additional cushion for unexpected expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCalculator === 'portfolio' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Rebalancing Tool</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Portfolio Value</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={portfolioValue}
                    onChange={(e) => setPortfolioValue(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Target Allocation (%)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Stocks</span>
                    <input
                      type="number"
                      value={targetAllocations.stocks}
                      onChange={(e) => setTargetAllocations({...targetAllocations, stocks: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Bonds</span>
                    <input
                      type="number"
                      value={targetAllocations.bonds}
                      onChange={(e) => setTargetAllocations({...targetAllocations, bonds: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Cash</span>
                    <input
                      type="number"
                      value={targetAllocations.cash}
                      onChange={(e) => setTargetAllocations({...targetAllocations, cash: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Current Allocation (%)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Stocks</span>
                    <input
                      type="number"
                      value={currentAllocations.stocks}
                      onChange={(e) => setCurrentAllocations({...currentAllocations, stocks: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Bonds</span>
                    <input
                      type="number"
                      value={currentAllocations.bonds}
                      onChange={(e) => setCurrentAllocations({...currentAllocations, bonds: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-16 text-sm text-gray-600">Cash</span>
                    <input
                      type="number"
                      value={currentAllocations.cash}
                      onChange={(e) => setCurrentAllocations({...currentAllocations, cash: Number(e.target.value)})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Rebalancing Actions</h3>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className={`flex justify-between items-center p-3 rounded-lg ${
                  rebalanceResult.stocks > 0 ? 'bg-green-50' : rebalanceResult.stocks < 0 ? 'bg-red-50' : 'bg-gray-50'
                }`}>
                  <span className="text-sm font-medium text-gray-700">Stocks</span>
                  <span className={`font-bold ${
                    rebalanceResult.stocks > 0 ? 'text-green-600' : rebalanceResult.stocks < 0 ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {rebalanceResult.stocks > 0 ? '+' : ''}${rebalanceResult.stocks.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded-lg ${
                  rebalanceResult.bonds > 0 ? 'bg-green-50' : rebalanceResult.bonds < 0 ? 'bg-red-50' : 'bg-gray-50'
                }`}>
                  <span className="text-sm font-medium text-gray-700">Bonds</span>
                  <span className={`font-bold ${
                    rebalanceResult.bonds > 0 ? 'text-green-600' : rebalanceResult.bonds < 0 ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {rebalanceResult.bonds > 0 ? '+' : ''}${rebalanceResult.bonds.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded-lg ${
                  rebalanceResult.cash > 0 ? 'bg-green-50' : rebalanceResult.cash < 0 ? 'bg-red-50' : 'bg-gray-50'
                }`}>
                  <span className="text-sm font-medium text-gray-700">Cash</span>
                  <span className={`font-bold ${
                    rebalanceResult.cash > 0 ? 'text-green-600' : rebalanceResult.cash < 0 ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {rebalanceResult.cash > 0 ? '+' : ''}${rebalanceResult.cash.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-indigo-900 mb-2">Rebalancing Strategy</h4>
                <p className="text-sm text-indigo-700">
                  {Math.abs(rebalanceResult.stocks) > 1000 || Math.abs(rebalanceResult.bonds) > 1000 || Math.abs(rebalanceResult.cash) > 1000
                    ? 'Significant rebalancing needed. Consider tax implications before making large moves.'
                    : 'Portfolio is well-balanced. Minor adjustments recommended.'}
                </p>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
                Generate Rebalancing Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other calculators */}
      {!['compound', 'retirement', 'portfolio'].includes(activeCalculator) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {calculators.find(c => c.id === activeCalculator)?.label} Calculator
          </h3>
          <p className="text-gray-600 mb-6">
            Advanced {calculators.find(c => c.id === activeCalculator)?.label.toLowerCase()} tools coming soon with AI-powered insights and recommendations.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
            Get Notified When Available
          </button>
        </div>
      )}
    </div>
  );
};

export default FinancialTools;