"use client";

import React from "react";
import { Truck, Package, AlertTriangle, TrendingUp, Fuel, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockVehicles, mockDeliveries } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FleetCardsProps {
  className?: string;
}

export function FleetCards({ className }: FleetCardsProps) {
  const totalVehicles = mockVehicles.length;
  const activeDeliveries = mockDeliveries.filter(d => d.status === "in_progress").length;
  const delayedVehicles = mockVehicles.filter(v => v.status === "delayed").length;
  const avgFuelEfficiency = Math.round(mockVehicles.reduce((acc, v) => acc + v.fuel, 0) / totalVehicles);

  const cards = [
    {
      title: "Total Vehicles",
      value: totalVehicles,
      icon: <Truck className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      change: "+2 from last week",
      changeType: "positive" as const,
    },
    {
      title: "Active Deliveries",
      value: activeDeliveries,
      icon: <Package className="w-6 h-6" />,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      change: "+5 from yesterday",
      changeType: "positive" as const,
    },
    {
      title: "Delayed Vehicles",
      value: delayedVehicles,
      icon: <AlertTriangle className="w-6 h-6" />,
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-500",
      change: "-1 from last hour",
      changeType: "negative" as const,
    },
    {
      title: "Fuel Efficiency",
      value: `${avgFuelEfficiency}%`,
      icon: <Fuel className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500",
      change: "+3% from last week",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {cards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center",
                card.bgColor
              )}>
                <div className={cn("text-white", card.iconBg)}>
                  {card.icon}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className={cn(
                  "w-4 h-4",
                  card.changeType === "positive" ? "text-green-500" : "text-red-500"
                )} />
                <span className={cn(
                  "text-xs font-medium",
                  card.changeType === "positive" ? "text-green-500" : "text-red-500"
                )}>
                  {card.change}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
              <p className="text-sm text-gray-600">{card.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
