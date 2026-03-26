"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin } from "lucide-react";

const schedules = [
  { driver: "John Doe", shift: "Morning", time: "6:00 AM - 2:00 PM", route: "Downtown", status: "Active" },
  { driver: "Jane Smith", shift: "Afternoon", time: "2:00 PM - 10:00 PM", route: "Airport", status: "Scheduled" },
  { driver: "Mike Johnson", shift: "Night", time: "10:00 PM - 6:00 AM", route: "Industrial", status: "On Break" },
  { driver: "Sarah Wilson", shift: "Morning", time: "6:00 AM - 2:00 PM", route: "Residential", status: "Active" }
];

export function DriverSchedule() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">Today's Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {schedules.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{schedule.driver}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>{schedule.shift}</span>
                    <span>•</span>
                    <span>{schedule.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{schedule.route}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  schedule.status === 'Active'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                    : schedule.status === 'Scheduled'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                    : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                }`}>
                  {schedule.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
