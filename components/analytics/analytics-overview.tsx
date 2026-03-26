"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Target, DollarSign, Clock } from "lucide-react";

const overviewStats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />,
    description: "Monthly revenue"
  },
  {
    title: "Completed Deliveries",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    description: "This month"
  },
  {
    title: "Average Delivery Time",
    value: "2.4 hrs",
    change: "-15.3%",
    trend: "down",
    icon: <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    description: "Per delivery"
  },
  {
    title: "Fleet Efficiency",
    value: "87.3%",
    change: "+5.1%",
    trend: "up",
    icon: <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    description: "Overall performance"
  }
];

const kpiMetrics = [
  {
    category: "Operational",
    metrics: [
      { name: "Vehicle Utilization", value: 75.2, target: 80, unit: "%" },
      { name: "On-Time Delivery", value: 94.1, target: 95, unit: "%" },
      { name: "Route Efficiency", value: 88.7, target: 90, unit: "%" }
    ]
  },
  {
    category: "Financial",
    metrics: [
      { name: "Cost per Delivery", value: 12.50, target: 12.00, unit: "$" },
      { name: "Fuel Efficiency", value: 8.2, target: 9.0, unit: "km/l" },
      { name: "Maintenance Cost", value: 2.3, target: 2.5, unit: "%" }
    ]
  }
];

export function AnalyticsOverview() {
  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{stat.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />
                    )}
                    <span className={`text-sm ${
                      stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kpiMetrics.map((category, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <CardTitle className="text-gray-900 dark:text-gray-100">{category.category} KPIs</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.value}{metric.unit} / {metric.target}{metric.unit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          metric.value >= metric.target 
                            ? 'bg-green-500' 
                            : metric.value >= metric.target * 0.9 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
