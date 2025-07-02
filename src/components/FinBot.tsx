import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const FinBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm FinBot, your AI investment assistant. I can provide insights, analysis, and answer questions about your portfolio.",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');

  const insights = [
    "Buy signal detected in mid-cap industrials sector",
    "Inflation-sensitive sectors showing pressure - consider defensive allocation",
    "Tech momentum building - NVDA showing strong technical patterns",
    "Energy transition plays gaining institutional interest",
    "Market volatility expected this week due to Fed announcements",
    "Semiconductor supply chain optimization creating opportunities"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    const botResponse = {
      id: messages.length + 2,
      text: insights[Math.floor(Math.random() * insights.length)],
      isBot: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputText('');
  };

  const handleQuickInsight = () => {
    const insight = insights[Math.floor(Math.random() * insights.length)];
    const botMessage = {
      id: messages.length + 1,
      text: insight,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([...messages, botMessage]);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
        {!isOpen && (
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold">FinBot Assistant</h3>
                <p className="text-xs opacity-90">AI Investment Intelligence</p>
              </div>
            </div>
            <button
              onClick={handleQuickInsight}
              className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full hover:bg-opacity-30 transition-colors"
            >
              Quick Insight
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white opacity-75'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about investments..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinBot;