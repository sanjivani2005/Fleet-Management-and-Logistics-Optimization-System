"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Navigation, Filter, RefreshCw } from "lucide-react";

export function MapControls() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">Map Controls</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {/* View Options */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">View Options</h4>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Navigation className="w-4 h-4 mr-2" />
              Center on Fleet
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Layers className="w-4 h-4 mr-2" />
              Traffic Layer
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Filter className="w-4 h-4 mr-2" />
              Heat Map
            </Button>
          </div>
        </div>

        {/* Filter Options */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Filter Vehicles</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-gray-600 dark:text-gray-400">Idle</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Maintenance</span>
            </label>
          </div>
        </div>

        {/* Refresh */}
        <Button variant="default" size="sm" className="w-full">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Map
        </Button>
      </CardContent>
    </Card>
  );
}
