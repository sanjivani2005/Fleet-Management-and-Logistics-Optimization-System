"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, AlertCircle, CheckCircle } from "lucide-react";

interface Activity {
  id: string;
  type: "delivery" | "alert" | "maintenance" | "completed";
  title: string;
  description: string;
  time: string;
  status: "info" | "warning" | "success";
}

const recentActivities: Activity[] = [
  {
    id: "1",
    type: "delivery",
    title: "Delivery Completed",
    description: "Vehicle VH-003 completed route to downtown warehouse",
    time: "2 minutes ago",
    status: "success"
  },
  {
    id: "2",
    type: "alert",
    title: "Low Fuel Alert",
    description: "Vehicle VH-007 fuel level below 20%",
    time: "15 minutes ago",
    status: "warning"
  },
  {
    id: "3",
    type: "maintenance",
    title: "Scheduled Maintenance",
    description: "Vehicle VH-002 due for service tomorrow",
    time: "1 hour ago",
    status: "info"
  },
  {
    id: "4",
    type: "completed",
    title: "Route Optimized",
    description: "AI optimized route for 5 vehicles, saved 12% fuel",
    time: "2 hours ago",
    status: "success"
  },
  {
    id: "5",
    type: "delivery",
    title: "New Delivery Assigned",
    description: "3 deliveries assigned to vehicle VH-005",
    time: "3 hours ago",
    status: "info"
  }
];

const statusConfig = {
  success: {
    icon: <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />,
    bgColor: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
  },
  warning: {
    icon: <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />,
    bgColor: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
  },
  info: {
    icon: <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    bgColor: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
  }
};

export function RecentActivities() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-gray-900 dark:text-gray-100">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`p-2 rounded-lg ${statusConfig[activity.status].bgColor}`}>
                {statusConfig[activity.status].icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-400 dark:text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
