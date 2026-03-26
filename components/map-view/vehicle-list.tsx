"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Fuel, Clock } from "lucide-react";

const vehicles = [
  { id: "VH001", name: "Delivery Truck 1", status: "Active", location: "Downtown", fuel: 85, speed: 45 },
  { id: "VH002", name: "Delivery Truck 2", status: "Active", location: "Airport", fuel: 62, speed: 38 },
  { id: "VH003", name: "Delivery Truck 3", status: "Idle", location: "Depot", fuel: 45, speed: 0 },
  { id: "VH004", name: "Delivery Truck 4", status: "Active", location: "Warehouse", fuel: 91, speed: 52 },
  { id: "VH005", name: "Delivery Truck 5", status: "Maintenance", location: "Service Center", fuel: 78, speed: 0 }
];

export function VehicleList() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">Vehicle List</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{vehicle.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{vehicle.id}</p>
                  </div>
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
              
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{vehicle.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Fuel className="w-3 h-3" />
                  <span>{vehicle.fuel}%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{vehicle.speed} km/h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
