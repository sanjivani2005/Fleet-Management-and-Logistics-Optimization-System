"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, TrendingUp, AlertTriangle, Wrench, MapPin, Fuel } from "lucide-react";

const fleetStats = [
  {
    title: "Total Vehicles",
    value: "24",
    change: "+2 this month",
    icon: <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    trend: "up"
  },
  {
    title: "Active Now",
    value: "18",
    change: "75% utilization",
    icon: <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />,
    trend: "up"
  },
  {
    title: "Maintenance",
    value: "3",
    change: "2 scheduled",
    icon: <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    trend: "neutral"
  },
  {
    title: "Alerts",
    value: "2",
    change: "1 critical",
    icon: <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />,
    trend: "down"
  }
];

const recentVehicles = [
  { id: "VH001", name: "Delivery Truck 1", status: "Active", location: "Downtown", fuel: 85 },
  { id: "VH002", name: "Delivery Truck 2", status: "Active", location: "Warehouse", fuel: 62 },
  { id: "VH003", name: "Delivery Truck 3", status: "Maintenance", location: "Service Center", fuel: 45 },
  { id: "VH004", name: "Delivery Truck 4", status: "Active", location: "Airport", fuel: 91 },
  { id: "VH005", name: "Delivery Truck 5", status: "Idle", location: "Depot", fuel: 78 }
];

export function FleetOverview() {
  return (
    <div className="space-y-6">
      {/* Fleet Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fleetStats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{stat.value}</p>
                  {stat.change && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.change}</p>
                  )}
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Vehicles */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="text-gray-900 dark:text-gray-100">Recent Vehicle Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{vehicle.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{vehicle.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{vehicle.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{vehicle.fuel}%</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    vehicle.status === 'Active' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                      : vehicle.status === 'Maintenance'
                      ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-600'
                  }`}>
                    {vehicle.status}
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
