"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";

const performanceMetrics = [
  {
    title: "Fleet Utilization",
    value: "75%",
    change: "+5%",
    trend: "up",
    icon: <Activity className="w-5 h-5" />,
    description: "Average daily utilization rate"
  },
  {
    title: "Fuel Efficiency",
    value: "8.2",
    change: "+0.3",
    trend: "up", 
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Average km/l across fleet"
  },
  {
    title: "Downtime",
    value: "2.3%",
    change: "-1.2%",
    trend: "down",
    icon: <TrendingDown className="w-5 h-5" />,
    description: "Monthly downtime percentage"
  },
  {
    title: "On-Time Performance",
    value: "94%",
    change: "+2%",
    trend: "up",
    icon: <Target className="w-5 h-5" />,
    description: "Delivery on-time rate"
  }
];

const topPerformers = [
  { id: "VH001", name: "Delivery Truck 1", score: 92, utilization: 85, efficiency: 9.1 },
  { id: "VH004", name: "Delivery Truck 4", score: 89, utilization: 92, efficiency: 8.8 },
  { id: "VH002", name: "Delivery Truck 2", score: 87, utilization: 78, efficiency: 8.5 },
  { id: "VH005", name: "Delivery Truck 5", score: 85, utilization: 81, efficiency: 8.3 }
];

export function FleetPerformance() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-gray-900 dark:text-gray-100">Fleet Performance</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-100 dark:border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  {metric.icon}
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metric.value}</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Top Performers */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Top Performers This Week</h4>
          <div className="space-y-3">
            {topPerformers.map((vehicle, index) => (
              <div key={vehicle.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{vehicle.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{vehicle.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{vehicle.score}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Score</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{vehicle.utilization}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Util</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{vehicle.efficiency}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">km/l</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
