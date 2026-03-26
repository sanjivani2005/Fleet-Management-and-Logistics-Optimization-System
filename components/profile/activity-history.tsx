"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, Package, Users, Settings } from "lucide-react";

const recentActivities = [
  {
    id: 1,
    action: "Updated fleet settings",
    time: "2 hours ago",
    icon: <Settings className="w-4 h-4" />,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    id: 2,
    action: "Completed route optimization",
    time: "5 hours ago",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-green-600 dark:text-green-400"
  },
  {
    id: 3,
    action: "Added new delivery",
    time: "1 day ago",
    icon: <Package className="w-4 h-4" />,
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    id: 4,
    action: "Updated driver assignments",
    time: "2 days ago",
    icon: <Users className="w-4 h-4" />,
    color: "text-orange-600 dark:text-orange-400"
  }
];

const stats = [
  { label: "Total Actions", value: "1,234", change: "+12%" },
  { label: "This Week", value: "47", change: "+8%" },
  { label: "This Month", value: "189", change: "+15%" }
];

export function ActivityHistory() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <span className="text-gray-900 dark:text-gray-100">Activity History</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-xs text-green-600 dark:text-green-400">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recent Activities</h4>
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${activity.color}`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
