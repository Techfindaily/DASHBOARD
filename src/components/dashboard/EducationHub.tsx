import React, { useState } from 'react';
import { BookOpen, Play, Clock, Award, Users, TrendingUp, Star, ChevronRight } from 'lucide-react';

const EducationHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('beginner');

  const categories = [
    { id: 'beginner', label: 'Beginner Basics' },
    { id: 'intermediate', label: 'Intermediate Strategies' },
    { id: 'advanced', label: 'Advanced Techniques' },
    { id: 'ai-trading', label: 'AI Trading' },
  ];

  const courses = {
    beginner: [
      {
        title: 'Investment Fundamentals',
        description: 'Learn the basics of investing, risk management, and portfolio building',
        duration: '2 hours',
        lessons: 12,
        rating: 4.8,
        students: 15420,
        level: 'Beginner',
        topics: ['Stocks', 'Bonds', 'ETFs', 'Risk Management'],
        instructor: 'AI Finance Tutor',
        progress: 0,
      },
      {
        title: 'Understanding Market Basics',
        description: 'How markets work, reading charts, and understanding market indicators',
        duration: '1.5 hours',
        lessons: 8,
        rating: 4.7,
        students: 12350,
        level: 'Beginner',
        topics: ['Market Structure', 'Charts', 'Indicators', 'Trading Hours'],
        instructor: 'AI Finance Tutor',
        progress: 25,
      },
      {
        title: 'Building Your First Portfolio',
        description: 'Step-by-step guide to creating a diversified investment portfolio',
        duration: '3 hours',
        lessons: 15,
        rating: 4.9,
        students: 18750,
        level: 'Beginner',
        topics: ['Diversification', 'Asset Allocation', 'Rebalancing', 'Dollar-Cost Averaging'],
        instructor: 'AI Finance Tutor',
        progress: 60,
      },
    ],
    intermediate: [
      {
        title: 'Technical Analysis Mastery',
        description: 'Advanced charting techniques and technical indicators for better timing',
        duration: '4 hours',
        lessons: 20,
        rating: 4.6,
        students: 8920,
        level: 'Intermediate',
        topics: ['Chart Patterns', 'Moving Averages', 'RSI', 'MACD'],
        instructor: 'AI Technical Analyst',
        progress: 0,
      },
      {
        title: 'Options Trading Strategies',
        description: 'Learn to use options for income generation and risk management',
        duration: '5 hours',
        lessons: 25,
        rating: 4.5,
        students: 6780,
        level: 'Intermediate',
        topics: ['Calls & Puts', 'Spreads', 'Greeks', 'Risk Management'],
        instructor: 'AI Options Expert',
        progress: 15,
      },
      {
        title: 'Sector Rotation Strategies',
        description: 'Understanding economic cycles and sector-based investment approaches',
        duration: '3.5 hours',
        lessons: 18,
        rating: 4.7,
        students: 5640,
        level: 'Intermediate',
        topics: ['Economic Cycles', 'Sector Analysis', 'Rotation Timing', 'ETF Selection'],
        instructor: 'AI Macro Analyst',
        progress: 40,
      },
    ],
    advanced: [
      {
        title: 'Quantitative Investment Strategies',
        description: 'Data-driven approaches to portfolio management and alpha generation',
        duration: '6 hours',
        lessons: 30,
        rating: 4.8,
        students: 3420,
        level: 'Advanced',
        topics: ['Factor Investing', 'Backtesting', 'Risk Models', 'Alpha Generation'],
        instructor: 'AI Quant Researcher',
        progress: 0,
      },
      {
        title: 'Alternative Investment Strategies',
        description: 'REITs, commodities, cryptocurrencies, and other alternative assets',
        duration: '4.5 hours',
        lessons: 22,
        rating: 4.4,
        students: 2890,
        level: 'Advanced',
        topics: ['REITs', 'Commodities', 'Crypto', 'Private Equity'],
        instructor: 'AI Alternative Assets Expert',
        progress: 20,
      },
      {
        title: 'Risk Management & Hedging',
        description: 'Advanced techniques for protecting and optimizing portfolio performance',
        duration: '5.5 hours',
        lessons: 28,
        rating: 4.9,
        students: 4150,
        level: 'Advanced',
        topics: ['VaR Models', 'Hedging Strategies', 'Stress Testing', 'Portfolio Insurance'],
        instructor: 'AI Risk Manager',
        progress: 75,
      },
    ],
    'ai-trading': [
      {
        title: 'AI-Powered Investment Analysis',
        description: 'Using artificial intelligence for market analysis and decision making',
        duration: '4 hours',
        lessons: 20,
        rating: 4.9,
        students: 7650,
        level: 'Intermediate',
        topics: ['Machine Learning', 'Sentiment Analysis', 'Pattern Recognition', 'Automated Trading'],
        instructor: 'AI Trading Specialist',
        progress: 0,
      },
      {
        title: 'Building Trading Algorithms',
        description: 'Create and deploy automated trading strategies using AI',
        duration: '8 hours',
        lessons: 40,
        rating: 4.7,
        students: 4320,
        level: 'Advanced',
        topics: ['Algorithm Design', 'Backtesting', 'Risk Controls', 'Deployment'],
        instructor: 'AI Algorithm Engineer',
        progress: 30,
      },
      {
        title: 'Natural Language Processing for Finance',
        description: 'Extract insights from news, reports, and social media using NLP',
        duration: '6 hours',
        lessons: 25,
        rating: 4.6,
        students: 2980,
        level: 'Advanced',
        topics: ['Text Analysis', 'Sentiment Scoring', 'News Impact', 'Social Trading'],
        instructor: 'AI NLP Researcher',
        progress: 10,
      },
    ],
  };

  const achievements = [
    { title: 'First Course Completed', icon: Award, earned: true },
    { title: 'Portfolio Builder', icon: TrendingUp, earned: true },
    { title: 'Technical Analyst', icon: BookOpen, earned: false },
    { title: 'AI Trading Expert', icon: Star, earned: false },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-orange-600 bg-orange-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">AI Education Hub</h1>
          <p className="mt-1 text-gray-600">Learn investing with AI-powered courses and tutorials</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">AI-Powered Learning</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Courses Completed</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <Award className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Hours Learned</p>
              <p className="text-2xl font-bold text-gray-900">12.5</p>
            </div>
            <Clock className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">7 days</p>
            </div>
            <TrendingUp className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">2/4</p>
            </div>
            <Star className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses[activeCategory as keyof typeof courses].map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Course Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">{course.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

              {/* Course Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Topics */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered</h4>
                <div className="flex flex-wrap gap-1">
                  {course.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructor & Students */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>By {course.instructor}</span>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>

            {/* Course Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
                <span>{course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className={`p-4 rounded-lg border-2 transition-all ${
                achievement.earned 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <Icon className={`h-8 w-8 mb-2 ${
                    achievement.earned ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <h4 className={`font-medium ${
                    achievement.earned ? 'text-green-900' : 'text-gray-600'
                  }`}>
                    {achievement.title}
                  </h4>
                  {achievement.earned && (
                    <span className="text-xs text-green-600 mt-1">Earned!</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Learning Assistant */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">AI Learning Assistant</h3>
            <p className="text-indigo-700 mb-4">
              Get personalized course recommendations based on your learning progress and investment goals. 
              Our AI analyzes your performance to suggest the most relevant next steps.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
              Get AI Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;