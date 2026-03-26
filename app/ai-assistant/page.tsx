"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { AIChatInterface } from "@/components/ai-assistant/ai-chat-interface";
import { AIAnalytics } from "@/components/ai-assistant/ai-analytics";
import { AISettings } from "@/components/ai-assistant/ai-settings";

export default function AIAssistantPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">AI Assistant</h1>
          <p className="text-gray-600 dark:text-gray-400">Intelligent fleet management with AI-powered insights</p>
        </div>

        {/* AI Chat Interface */}
        <AIChatInterface />

        {/* AI Analytics & Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIAnalytics />
          <AISettings />
        </div>
      </div>
    </MainLayout>
  );
}
