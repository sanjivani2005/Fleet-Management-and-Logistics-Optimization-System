"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { DeliveryOverview } from "@/components/deliveries/delivery-overview";
import { ActiveDeliveries } from "@/components/deliveries/active-deliveries";
import { DeliveryHistory } from "@/components/deliveries/delivery-history";

export default function DeliveriesPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Delivery Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and manage all delivery operations</p>
        </div>

        {/* Delivery Overview */}
        <DeliveryOverview />

        {/* Active Deliveries & History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveDeliveries />
          <DeliveryHistory />
        </div>
      </div>
    </MainLayout>
  );
}
