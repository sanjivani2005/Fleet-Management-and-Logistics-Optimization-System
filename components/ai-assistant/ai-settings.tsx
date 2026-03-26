"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, RefreshCw, Database, Zap } from "lucide-react";

const aiSettings = [
  {
    title: "Auto-Optimization",
    description: "Automatically optimize routes and schedules",
    enabled: true,
    category: "Performance"
  },
  {
    title: "Predictive Maintenance",
    description: "AI predicts maintenance needs",
    enabled: true,
    category: "Maintenance"
  },
  {
    title: "Demand Forecasting",
    description: "Predict delivery demand patterns",
    enabled: false,
    category: "Planning"
  },
  {
    title: "Real-time Alerts",
    description: "Send instant notifications for issues",
    enabled: true,
    category: "Alerts"
  }
];

export function AISettings() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">AI Configuration</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* AI Settings */}
        <div className="space-y-4 mb-6">
          {aiSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 dark:text-gray-100">{setting.title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                <span className="text-xs text-gray-500 dark:text-gray-500">{setting.category}</span>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  setting.enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    setting.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* AI Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI Actions</h4>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Database className="w-4 h-4 mr-2" />
            Retrain Models
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Cache
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Zap className="w-4 h-4 mr-2" />
            Optimize Performance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
