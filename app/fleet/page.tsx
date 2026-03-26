"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FleetOverview } from "@/components/fleet/fleet-overview";
import { FleetMaintenance } from "@/components/fleet/fleet-maintenance";
import { FleetPerformance } from "@/components/fleet/fleet-performance";

export default function FleetPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Fleet Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage your entire vehicle fleet</p>
        </div>

        {/* Fleet Overview */}
        <FleetOverview />

        {/* Fleet Performance & Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FleetPerformance />
          <FleetMaintenance />
        </div>
      </div>
    </MainLayout>
  );
}
