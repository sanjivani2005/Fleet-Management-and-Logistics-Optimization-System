"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { AnalyticsOverview } from "@/components/analytics/analytics-overview";
import { DetailedCharts } from "@/components/analytics/detailed-charts";
import { PerformanceMetrics } from "@/components/analytics/performance-metrics";

export default function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive insights and performance metrics</p>
        </div>

        {/* Analytics Overview */}
        <AnalyticsOverview />

        {/* Detailed Charts */}
        <DetailedCharts />

        {/* Performance Metrics */}
        <PerformanceMetrics />
      </div>
    </MainLayout>
  );
}
