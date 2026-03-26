"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const maintenanceSchedule = [
  {
    id: "MT001",
    vehicle: "VH003",
    type: "Regular Service",
    date: "2024-03-28",
    status: "Scheduled",
    priority: "Medium",
    description: "Oil change and tire rotation"
  },
  {
    id: "MT002", 
    vehicle: "VH007",
    type: "Engine Check",
    date: "2024-03-30",
    status: "Scheduled",
    priority: "High",
    description: "Engine diagnostic and performance check"
  },
  {
    id: "MT003",
    vehicle: "VH012",
    type: "Brake Service",
    date: "2024-04-02",
    status: "Scheduled",
    priority: "High",
    description: "Brake pads replacement and fluid check"
  }
];

const maintenanceStats = [
  { label: "Scheduled", value: "3", color: "text-blue-600 dark:text-blue-400" },
  { label: "In Progress", value: "1", color: "text-orange-600 dark:text-orange-400" },
  { label: "Completed", value: "12", color: "text-green-600 dark:text-green-400" },
  { label: "Overdue", value: "0", color: "text-red-600 dark:text-red-400" }
];

export function FleetMaintenance() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <span className="text-gray-900 dark:text-gray-100">Maintenance Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Maintenance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {maintenanceStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Maintenance List */}
        <div className="space-y-4">
          {maintenanceSchedule.map((maintenance) => (
            <div key={maintenance.id} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`p-2 rounded-lg ${
                maintenance.priority === 'High' 
                  ? 'bg-red-50 dark:bg-red-900/20'
                  : 'bg-orange-50 dark:bg-orange-900/20'
              }`}>
                <Wrench className={`w-4 h-4 ${
                  maintenance.priority === 'High' 
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-orange-600 dark:text-orange-400'
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{maintenance.type}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{maintenance.vehicle} • {maintenance.date}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    maintenance.status === 'Scheduled'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                      : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                  }`}>
                    {maintenance.status}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{maintenance.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
