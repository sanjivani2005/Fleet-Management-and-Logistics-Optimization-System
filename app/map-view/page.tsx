"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FleetMap } from "@/components/map-view/fleet-map";
import { MapControls } from "@/components/map-view/map-controls";
import { VehicleList } from "@/components/map-view/vehicle-list";

export default function MapViewPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Live Fleet Map</h1>
          <p className="text-gray-600 dark:text-gray-400">Real-time tracking and monitoring of all vehicles</p>
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Map */}
          <div className="lg:col-span-3">
            <FleetMap />
          </div>
          
          {/* Side Panel */}
          <div className="space-y-6">
            <MapControls />
            <VehicleList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
