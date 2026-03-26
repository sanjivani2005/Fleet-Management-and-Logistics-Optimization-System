"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Star, Target } from "lucide-react";

const driverMetrics = [
  { name: "John Doe", rating: 4.9, deliveries: 47, onTime: 95, efficiency: 92 },
  { name: "Jane Smith", rating: 4.8, deliveries: 43, onTime: 93, efficiency: 89 },
  { name: "Mike Johnson", rating: 4.7, deliveries: 41, onTime: 91, efficiency: 87 },
  { name: "Sarah Wilson", rating: 4.6, deliveries: 38, onTime: 89, efficiency: 85 }
];

export function DriverPerformance() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          <span className="text-gray-900 dark:text-gray-100">Driver Performance</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {driverMetrics.map((driver, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{driver.name}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{driver.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{driver.deliveries}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Deliveries</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{driver.onTime}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">On-Time</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{driver.efficiency}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Efficiency</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>On-Time Performance</span>
                  <span>{driver.onTime}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${driver.onTime}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Route Efficiency</span>
                  <span>{driver.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${driver.efficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
