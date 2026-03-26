"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, Minimize2, Maximize2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockChatMessages } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ChatbotPanelProps {
  className?: string;
  isVisible?: boolean;
  onToggle?: () => void;
}

export function ChatbotPanel({ className, isVisible: propIsVisible, onToggle }: ChatbotPanelProps) {
  const [messages, setMessages] = useState(mockChatMessages);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [internalIsVisible, setInternalIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isVisible = propIsVisible !== undefined ? propIsVisible : internalIsVisible;
  const setIsVisible = onToggle || setInternalIsVisible;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    if (mounted) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, mounted]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: `MSG${Date.now()}`,
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I've analyzed your fleet data. You have 2 vehicles that need fuel optimization.",
        "Based on current traffic patterns, I recommend rerouting vehicle VH002 to avoid delays.",
        "Your fuel efficiency has improved by 3% this week. Great job!",
        "I notice vehicle VH005 is due for maintenance. Would you like me to schedule it?",
        "The optimal delivery time for your next route would be 2:00 PM to avoid rush hour.",
      ];

      const botMessage = {
        id: `MSG${Date.now() + 1}`,
        role: "assistant" as const,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 w-96", className)}>
      {isVisible ? (
        <Card className={cn(
          "transition-all duration-300 shadow-2xl border-0",
          isMinimized ? "h-14" : "h-[600px]"
        )}>
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>AI Fleet Assistant</span>
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="flex-1 p-4 overflow-y-auto h-[480px]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start space-x-3",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className={cn(
                        "max-w-[70%] rounded-lg p-3",
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      )}>
                        <p className="text-sm">{message.content}</p>
                        <p className={cn(
                          "text-xs mt-1",
                          message.role === "user" ? "text-blue-100" : "text-gray-500"
                        )}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <div className="p-4 border-t bg-gray-50">
                <div className="space-y-3">
                  {/* Input Area */}
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        id="chat-input"
                        name="chat-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about your fleet..."
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
                        disabled={isTyping}
                      />
                      {input && (
                        <button
                          onClick={() => setInput("")}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={isTyping || input.trim() === ""}
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("What's the status of my fleet?")}
                      className="text-xs h-8 px-3 rounded-full border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      🚛 Fleet Status
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("Which vehicles need fuel?")}
                      className="text-xs h-8 px-3 rounded-full border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                    >
                      ⛽ Fuel Alert
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("Optimize my routes")}
                      className="text-xs h-8 px-3 rounded-full border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                    >
                      🗺️ Route Optimization
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Card>
      ) : (
        <Button
          onClick={() => setIsVisible(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl flex items-center justify-center"
          size="lg"
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </Button>
      )}
    </div>
  );
}
