"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { Bot } from "lucide-react";
import { ChatbotPanel } from "@/components/chat/chatbot-panel";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const marginClass = sidebarCollapsed ? 'ml-20' : 'ml-64';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="flex">
        <Sidebar onCollapsedChange={setSidebarCollapsed} />
        <div className={`flex-1 flex flex-col ${marginClass} transition-all duration-300 ease-in-out`}>
          <Navbar />
          <main className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-950">
            {children}
          </main>
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <button
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        aria-label="AI Assistant"
        onClick={() => setShowChatbot(true)}
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <ChatbotPanel
          isVisible={true}
          onToggle={() => setShowChatbot(false)}
        />
      )}
    </div>
  );
}
