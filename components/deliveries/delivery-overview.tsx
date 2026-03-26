"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const deliveryStats = [
  {
    title: "Active Deliveries",
    value: "18",
    change: "+3 from yesterday",
    icon: <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    trend: "up"
  },
  {
    title: "Completed Today",
    value: "47",
    change: "+12% increase",
    icon: <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />,
    trend: "up"
  },
  {
    title: "Delayed",
    value: "2",
    change: "-1 from yesterday",
    icon: <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />,
    trend: "down"
  },
  {
    title: "Avg Delivery Time",
    value: "2.4 hrs",
    change: "-15 min improvement",
    icon: <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    trend: "up"
  }
];

export function DeliveryOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {deliveryStats.map((stat, index) => (
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
  );
}
