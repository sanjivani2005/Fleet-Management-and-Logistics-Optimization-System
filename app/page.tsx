"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FleetCards } from "@/components/dashboard/fleet-cards";
import { FleetOverviewCards } from "@/components/dashboard/fleet-overview-cards";
import { GoogleMapsView } from "@/components/map/google-maps-view";
import { AnalyticsCharts } from "@/components/dashboard/analytics-charts";
import { VehicleTable } from "@/components/dashboard/vehicle-table";

import { VehicleStatusChart } from "@/components/dashboard/vehicle-status-chart";
import { RecentActivities } from "@/components/dashboard/recent-activities";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Fleet Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage your autonomous fleet in real-time</p>
        </div>

        {/* Top Row - Overview Cards */}
        <FleetOverviewCards />

        {/* Second Row - Full Width Map */}
        <GoogleMapsView />

        {/* Third Row - Analytics and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <AnalyticsCharts />
          </div>
          <div className="space-y-6">
            {/* Pie Chart above Recent Activities */}
            <VehicleStatusChart />
            <RecentActivities />
          </div>
        </div>

        {/* Bottom Row - Vehicle Table */}
        <div>
          <VehicleTable />
        </div>
      </div>
    </MainLayout>
  );
}
