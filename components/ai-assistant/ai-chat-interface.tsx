"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Send, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const aiSuggestions = [
  "Show me today's delivery performance",
  "What's the current fleet status?",
  "Optimize routes for tomorrow",
  "Check maintenance alerts"
];

export function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial message only on client side
    setMessages([{
      id: "1",
      text: "Hello! I'm your AI fleet assistant. I can help you analyze performance, optimize routes, and provide insights. How can I assist you today?",
      sender: "ai",
      timestamp: new Date()
    }]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: input,
        sender: "user",
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm analyzing your request. Based on current fleet data, I can provide you with detailed insights and recommendations.",
          sender: "ai",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);

      setInput("");
    }
  };

  if (!mounted) {
    return (
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-gray-100">AI Fleet Assistant</span>
            <div className="flex items-center space-x-1 ml-auto">
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-xs text-green-600 dark:text-green-400">Online</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400">Loading...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">AI Fleet Assistant</span>
          <div className="flex items-center space-x-1 ml-auto">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-xs text-green-600 dark:text-green-400">Online</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-start space-x-2 max-w-lg ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${message.sender === "user"
                  ? "bg-blue-600"
                  : "bg-gradient-to-r from-purple-500 to-blue-500"
                  }`}>
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`p-3 rounded-lg ${message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                    }`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about your fleet..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
