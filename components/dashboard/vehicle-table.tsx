"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, ArrowUpDown, MoreVertical, MapPin, Fuel, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockVehicles } from "@/lib/data";
import { cn } from "@/lib/utils";

interface VehicleTableProps {
  className?: string;
}

export function VehicleTable({ className }: VehicleTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const filteredAndSortedVehicles = useMemo(() => {
    let filtered = mockVehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.location.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];

        if (aValue !== undefined && bValue !== undefined) {
          if (aValue < bValue) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortConfig]);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-100 text-green-800 border-green-200",
      idle: "bg-yellow-100 text-yellow-800 border-yellow-200",
      delayed: "bg-red-100 text-red-800 border-red-200",
      maintenance: "bg-gray-100 text-gray-800 border-gray-200",
    };

    return (
      <span className={cn(
        "px-2 py-1 rounded-full text-xs font-medium border",
        styles[status as keyof typeof styles]
      )}>
        {status}
      </span>
    );
  };

  const getFuelColor = (fuel: number) => {
    if (fuel > 50) return "text-green-600 dark:text-green-400";
    if (fuel > 25) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Card className={cn("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700", className)}>
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 dark:text-gray-100">Vehicle Fleet</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                id="vehicle-search"
                name="vehicle-search"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              id="status-filter"
              name="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="idle">Idle</option>
              <option value="delayed">Delayed</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => handleSort("id")}
                    className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <span className="text-gray-900 dark:text-gray-100">Vehicle ID</span>
                    <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <span className="text-gray-900 dark:text-gray-100">Name</span>
                    <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => handleSort("status")}
                    className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <span className="text-gray-900 dark:text-gray-100">Status</span>
                    <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Driver</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => handleSort("fuel")}
                    className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <span className="text-gray-900 dark:text-gray-100">Fuel</span>
                    <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => handleSort("lastSeen")}
                    className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <span className="text-gray-900 dark:text-gray-100">Last Seen</span>
                    <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Last Update</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900 dark:text-gray-100">{vehicle.id}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-900 dark:text-gray-100">{vehicle.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    {getStatusBadge(vehicle.status)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-900 dark:text-gray-100">{vehicle.driver}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Fuel className={cn("w-4 h-4", getFuelColor(vehicle.fuel))} />
                      <span className={cn("font-medium", getFuelColor(vehicle.fuel))}>
                        {vehicle.fuel}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-gray-600 dark:text-gray-400">{vehicle.location.address}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {formatTime(new Date(vehicle.lastUpdate))}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredAndSortedVehicles.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-500">No vehicles found matching your criteria</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
