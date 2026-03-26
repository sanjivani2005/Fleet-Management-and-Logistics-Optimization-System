"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, BarChart3 } from "lucide-react";

const monthlyData = [
  { month: "Jan", revenue: 45000, deliveries: 850, efficiency: 82 },
  { month: "Feb", revenue: 52000, deliveries: 920, efficiency: 85 },
  { month: "Mar", revenue: 48000, deliveries: 880, efficiency: 83 },
  { month: "Apr", revenue: 61000, deliveries: 1050, efficiency: 87 },
  { month: "May", revenue: 58000, deliveries: 980, efficiency: 86 },
  { month: "Jun", revenue: 67000, deliveries: 1150, efficiency: 89 }
];

const routePerformance = [
  { route: "Downtown", avgTime: 2.1, successRate: 94, fuelEff: 8.2 },
  { route: "Airport", avgTime: 3.2, successRate: 91, fuelEff: 7.8 },
  { route: "Industrial", avgTime: 2.8, successRate: 96, fuelEff: 8.5 },
  { route: "Residential", avgTime: 1.9, successRate: 92, fuelEff: 8.0 },
  { route: "Commercial", avgTime: 2.5, successRate: 93, fuelEff: 8.3 }
];

export function DetailedCharts() {
  return (
    <div className="space-y-6">
      {/* Revenue & Deliveries Chart */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-gray-100">Revenue & Delivery Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="deliveries" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Route Performance Chart */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-900 dark:text-gray-100">Route Performance Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={routePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="route" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="successRate" fill="#8b5cf6" />
              <Bar dataKey="fuelEff" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
