"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { DriverOverview } from "@/components/drivers/driver-overview";
import { DriverPerformance } from "@/components/drivers/driver-performance";
import { DriverSchedule } from "@/components/drivers/driver-schedule";

export default function DriversPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Driver Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage drivers, schedules, and performance</p>
        </div>

        {/* Driver Overview */}
        <DriverOverview />

        {/* Driver Performance & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DriverPerformance />
          <DriverSchedule />
        </div>
      </div>
    </MainLayout>
  );
}
