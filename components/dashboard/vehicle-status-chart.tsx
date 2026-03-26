"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { PieChart as PieChartIcon, Truck, Clock, TrendingUp } from "lucide-react";

const vehicleStatusData = [
  { name: "Active", value: 18, color: "#10b981" },
  { name: "Idle", value: 3, color: "#f59e0b" },
  { name: "Maintenance", value: 3, color: "#ef4444" },
];

export function VehicleStatusChart() {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-b border-blue-100 dark:border-gray-600">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PieChartIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Fleet Status Distribution</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <Truck className="w-4 h-4" />
              <span className="text-gray-700 dark:text-gray-200">Total: 24</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-200">75% Active</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vehicleStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {vehicleStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:w-80 space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Status Breakdown</h4>
            {vehicleStatusData.map((status, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: status.color }}
                  ></div>
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{status.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vehicles</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{status.value}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({((status.value / 24) * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Updated: Just now</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
