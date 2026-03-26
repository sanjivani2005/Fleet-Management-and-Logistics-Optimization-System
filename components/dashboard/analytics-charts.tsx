"use client";

import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart as PieChartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalyticsChartsProps {
  className?: string;
}

export function AnalyticsCharts({ className }: AnalyticsChartsProps) {
  const deliveryTrendsData = [
    { name: "Mon", deliveries: 45, onTime: 42 },
    { name: "Tue", deliveries: 52, onTime: 48 },
    { name: "Wed", deliveries: 48, onTime: 45 },
    { name: "Thu", deliveries: 58, onTime: 55 },
    { name: "Fri", deliveries: 65, onTime: 60 },
    { name: "Sat", deliveries: 40, onTime: 38 },
    { name: "Sun", deliveries: 35, onTime: 34 },
  ];

  const fuelConsumptionData = [
    { vehicle: "VH001", consumption: 85, efficiency: 92 },
    { vehicle: "VH002", consumption: 78, efficiency: 85 },
    { vehicle: "VH003", consumption: 92, efficiency: 88 },
    { vehicle: "VH004", consumption: 88, efficiency: 90 },
    { vehicle: "VH005", consumption: 75, efficiency: 82 },
  ];

  return (
    <div className="space-y-6">
      {/* Full Width Delivery Trends Chart */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-gray-100">Delivery Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={deliveryTrendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px"
                }}
              />
              <Line
                type="monotone"
                dataKey="deliveries"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="onTime"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: "#10b981", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Total Deliveries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">On-Time Deliveries</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Width Fuel Consumption Chart */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-gray-100">Fuel Consumption</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={fuelConsumptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="vehicle"
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="consumption" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="efficiency" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Consumption (%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Efficiency (%)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
