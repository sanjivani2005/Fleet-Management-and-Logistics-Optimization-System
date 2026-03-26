"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, TrendingUp, AlertTriangle, Wrench } from "lucide-react";

interface OverviewCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
}

function OverviewCard({ title, value, change, icon, trend = "neutral" }: OverviewCardProps) {
  const trendColors = {
    up: "text-green-600 dark:text-green-400",
    down: "text-red-600 dark:text-red-400",
    neutral: "text-gray-600 dark:text-gray-400"
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{value}</p>
            {change && (
              <p className={`text-sm ${trendColors[trend]} flex items-center mt-1`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {change}
              </p>
            )}
          </div>
          <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function FleetOverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <OverviewCard
        title="Total Vehicles"
        value="24"
        change="+2 from last month"
        icon={<Truck className="w-6 h-6 text-blue-600" />}
        trend="up"
      />
      <OverviewCard
        title="Active Now"
        value="18"
        change="+75% utilization"
        icon={<TrendingUp className="w-6 h-6 text-green-600" />}
        trend="up"
      />
      <OverviewCard
        title="Maintenance Due"
        value="3"
        change="-1 from last week"
        icon={<Wrench className="w-6 h-6 text-orange-600" />}
        trend="down"
      />
      <OverviewCard
        title="Alerts Today"
        value="7"
        change="+3 new"
        icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
        trend="up"
      />
    </div>
  );
}
