import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import MainDashboard from '../components/dashboard/MainDashboard';
import StockTracker from '../components/dashboard/StockTracker';
import NewsSummarizer from '../components/dashboard/NewsSummarizer';
import PredictiveCharts from '../components/dashboard/PredictiveCharts';
import AIRiskFeed from '../components/dashboard/AIRiskFeed';
import Planner from '../components/dashboard/Planner';
import MarketResearch from '../components/dashboard/MarketResearch';
import FinancialTools from '../components/dashboard/FinancialTools';
import EducationHub from '../components/dashboard/EducationHub';
import SocialTrading from '../components/dashboard/SocialTrading';
import AlertsAutomation from '../components/dashboard/AlertsAutomation';
import GlobalMarkets from '../components/dashboard/GlobalMarkets';
import PerformanceAnalytics from '../components/dashboard/PerformanceAnalytics';
import Settings from '../components/dashboard/Settings';
import FinBot from '../components/FinBot';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/stocks" element={<StockTracker />} />
            <Route path="/news" element={<NewsSummarizer />} />
            <Route path="/charts" element={<PredictiveCharts />} />
            <Route path="/risks" element={<AIRiskFeed />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/research" element={<MarketResearch />} />
            <Route path="/tools" element={<FinancialTools />} />
            <Route path="/education" element={<EducationHub />} />
            <Route path="/social" element={<SocialTrading />} />
            <Route path="/automation" element={<AlertsAutomation />} />
            <Route path="/global" element={<GlobalMarkets />} />
            <Route path="/performance" element={<PerformanceAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      
      <FinBot />
    </div>
  );
};

export default Dashboard;