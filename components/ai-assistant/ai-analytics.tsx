"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Target, Zap } from "lucide-react";

const aiInsights = [
  {
    title: "Route Optimization",
    description: "AI suggests 3 route changes that could save 15% fuel",
    impact: "High",
    status: "Ready to implement"
  },
  {
    title: "Maintenance Prediction",
    description: "Vehicle VH007 shows early signs of engine wear",
    impact: "Medium",
    status: "Monitoring"
  },
  {
    title: "Demand Forecast",
    description: "25% increase expected in downtown area next week",
    impact: "High",
    status: "Planning"
  }
];

const aiMetrics = [
  { label: "Predictions Accuracy", value: "94.2%", change: "+2.1%" },
  { label: "Processing Speed", value: "0.3s", change: "-0.1s" },
  { label: "Data Points Analyzed", value: "1.2M", change: "+150K" },
  { label: "Active Models", value: "8", change: "+2" }
];

export function AIAnalytics() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="text-gray-900 dark:text-gray-100">AI Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* AI Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {aiMetrics.map((metric, index) => (
            <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{metric.value}</p>
              <p className="text-xs text-green-600 dark:text-green-400">{metric.change}</p>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recent AI Recommendations</h4>
          {aiInsights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 dark:text-gray-100">{insight.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{insight.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    insight.impact === 'High'
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {insight.impact}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                    {insight.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
