"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Clock, DollarSign, TrendingUp } from "lucide-react";

const performanceData = [
  {
    title: "Delivery Performance",
    icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    metrics: [
      { label: "On-Time Rate", value: "94.2%", change: "+2.1%", status: "positive" },
      { label: "Average Time", value: "2.4 hrs", change: "-0.3 hrs", status: "positive" },
      { label: "Success Rate", value: "98.7%", change: "+0.5%", status: "positive" }
    ]
  },
  {
    title: "Financial Performance",
    icon: <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />,
    metrics: [
      { label: "Revenue per Delivery", value: "$45.20", change: "+$3.10", status: "positive" },
      { label: "Operating Cost", value: "$12.50", change: "-$0.80", status: "positive" },
      { label: "Profit Margin", value: "27.8%", change: "+1.2%", status: "positive" }
    ]
  },
  {
    title: "Operational Efficiency",
    icon: <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    metrics: [
      { label: "Vehicle Utilization", value: "75.3%", change: "+3.2%", status: "positive" },
      { label: "Fuel Efficiency", value: "8.2 km/l", change: "+0.4", status: "positive" },
      { label: "Downtime", value: "2.1%", change: "-0.8%", status: "positive" }
    ]
  }
];

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {performanceData.map((category, index) => (
        <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader className="border-b border-gray-200 dark:border-gray-700">
            <CardTitle className="flex items-center space-x-2">
              {category.icon}
              <span className="text-gray-900 dark:text-gray-100">{category.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {category.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{metric.value}</p>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.status === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    <TrendingUp className="w-3 h-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
