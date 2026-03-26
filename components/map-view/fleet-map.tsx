"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsView } from "@/components/map/google-maps-view";
import { MapPin, Navigation, Layers } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  status: string;
  speed: number;
  fuel: number;
  destination: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: "VH001",
    name: "Delivery Truck 1",
    position: { lat: 40.7128, lng: -74.0060 },
    status: "Active",
    speed: 45,
    fuel: 85,
    destination: "Downtown Warehouse"
  },
  {
    id: "VH002", 
    name: "Delivery Truck 2",
    position: { lat: 40.7580, lng: -73.9855 },
    status: "Active",
    speed: 38,
    fuel: 62,
    destination: "Airport Terminal"
  },
  {
    id: "VH003",
    name: "Delivery Truck 3",
    position: { lat: 40.7489, lng: -73.9680 },
    status: "Idle",
    speed: 0,
    fuel: 45,
    destination: "Depot"
  }
];

export function FleetMap() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'hybrid'>('roadmap');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev => prev.map(vehicle => ({
        ...vehicle,
        position: {
          lat: vehicle.position.lat + (Math.random() - 0.5) * 0.001,
          lng: vehicle.position.lng + (Math.random() - 0.5) * 0.001
        },
        speed: vehicle.status === 'Active' ? 30 + Math.random() * 30 : 0,
        fuel: Math.max(0, vehicle.fuel - Math.random() * 0.1)
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full">
      <CardContent className="p-0">
        {/* Map Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Live Fleet Tracking</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMapType('roadmap')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  mapType === 'roadmap'
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                Road
              </button>
              <button
                onClick={() => setMapType('satellite')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  mapType === 'satellite'
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                Satellite
              </button>
              <button
                onClick={() => setMapType('hybrid')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  mapType === 'hybrid'
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                Hybrid
              </button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative h-[600px]">
          <GoogleMapsView vehicles={vehicles} selectedVehicle={selectedVehicle} mapType={mapType} />
          
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Vehicle Status</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Idle</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Maintenance</span>
              </div>
            </div>
          </div>

          {/* Selected Vehicle Info */}
          {selectedVehicle && (
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-64">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{selectedVehicle.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{selectedVehicle.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Speed:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{selectedVehicle.speed} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fuel:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{selectedVehicle.fuel}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Destination:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100 text-xs">{selectedVehicle.destination}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
