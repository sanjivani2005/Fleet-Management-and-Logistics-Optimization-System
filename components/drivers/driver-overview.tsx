"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const driverStats = [
  {
    title: "Total Drivers",
    value: "18",
    change: "+2 this month",
    icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    trend: "up"
  },
  {
    title: "On Duty",
    value: "14",
    change: "78% active",
    icon: <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />,
    trend: "up"
  },
  {
    title: "On Break",
    value: "3",
    change: "2 scheduled",
    icon: <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    trend: "neutral"
  },
  {
    title: "Alerts",
    value: "1",
    change: "Performance issue",
    icon: <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />,
    trend: "down"
  }
];

const topDrivers = [
  { name: "John Doe", id: "DRV001", deliveries: 47, rating: 4.9, status: "Active" },
  { name: "Jane Smith", id: "DRV002", deliveries: 43, rating: 4.8, status: "Active" },
  { name: "Mike Johnson", id: "DRV003", deliveries: 41, rating: 4.7, status: "On Break" }
];

export function DriverOverview() {
  return (
    <div className="space-y-6">
      {/* Driver Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {driverStats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Performers */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="text-gray-900 dark:text-gray-100">Top Performers This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topDrivers.map((driver, index) => (
              <div key={driver.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{driver.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{driver.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{driver.deliveries}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Deliveries</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{driver.rating}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    driver.status === 'Active'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                      : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                  }`}>
                    {driver.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
