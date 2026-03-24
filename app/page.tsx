"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FleetCards } from "@/components/dashboard/fleet-cards";
import { MapView } from "@/components/map/map-view";
import { AnalyticsCharts } from "@/components/dashboard/analytics-charts";
import { VehicleTable } from "@/components/dashboard/vehicle-table";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fleet Dashboard</h1>
          <p className="text-gray-600">Monitor and manage your autonomous fleet in real-time</p>
        </div>

        <FleetCards />

        <MapView />

        <AnalyticsCharts />

        <VehicleTable />
      </div>
    </MainLayout>
  );
}
