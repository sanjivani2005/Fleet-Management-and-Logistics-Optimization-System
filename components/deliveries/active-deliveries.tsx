"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, MapPin, Clock, Truck } from "lucide-react";

const activeDeliveries = [
  { id: "DEL001", customer: "ABC Corp", destination: "Downtown Warehouse", status: "In Transit", eta: "15 min", driver: "John Doe" },
  { id: "DEL002", customer: "XYZ Ltd", destination: "Airport Terminal", status: "Loading", eta: "30 min", driver: "Jane Smith" },
  { id: "DEL003", customer: "123 Industries", destination: "Industrial Park", status: "In Transit", eta: "45 min", driver: "Mike Johnson" }
];

export function ActiveDeliveries() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">Active Deliveries</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {activeDeliveries.map((delivery) => (
            <div key={delivery.id} className="p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{delivery.id}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{delivery.customer}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  delivery.status === 'In Transit'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                    : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                }`}>
                  {delivery.status}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{delivery.destination}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>ETA: {delivery.eta}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Truck className="w-3 h-3" />
                  <span>{delivery.driver}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
