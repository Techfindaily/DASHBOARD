import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Newspaper, 
  BarChart3, 
  AlertTriangle, 
  PieChart, 
  Settings, 
  X,
  Activity,
  Target,
  BookOpen,
  Users,
  Zap,
  Globe,
  Calculator,
  Award
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: TrendingUp, label: 'Stock Tracker', path: '/dashboard/stocks' },
    { icon: Newspaper, label: 'News Summarizer', path: '/dashboard/news' },
    { icon: BarChart3, label: 'Predictive Charts', path: '/dashboard/charts' },
    { icon: AlertTriangle, label: 'AI Risk Feed', path: '/dashboard/risks' },
    { icon: PieChart, label: 'Portfolio Planner', path: '/dashboard/planner' },
    { icon: Target, label: 'Market Research', path: '/dashboard/research' },
    { icon: Calculator, label: 'Financial Tools', path: '/dashboard/tools' },
    { icon: BookOpen, label: 'AI Education Hub', path: '/dashboard/education' },
    { icon: Users, label: 'Social Trading', path: '/dashboard/social' },
    { icon: Zap, label: 'Alerts & Automation', path: '/dashboard/automation' },
    { icon: Globe, label: 'Global Markets', path: '/dashboard/global' },
    { icon: Award, label: 'Performance Analytics', path: '/dashboard/performance' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="TechFinDaily Logo" className="h-14 w-30" />
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-150 text-sm
                    ${isActive 
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-indigo-900 mb-1">AI Insights</h4>
              <p className="text-xs text-indigo-700">
                87% prediction accuracy this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;