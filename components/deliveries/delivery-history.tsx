"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, CheckCircle, XCircle, Clock } from "lucide-react";

const deliveryHistory = [
  { id: "DEL998", customer: "Test Corp", status: "Completed", time: "2 hours ago", duration: "1.8 hrs" },
  { id: "DEL997", customer: "Sample Ltd", status: "Completed", time: "3 hours ago", duration: "2.1 hrs" },
  { id: "DEL996", customer: "Demo Inc", status: "Failed", time: "4 hours ago", duration: "N/A" },
  { id: "DEL995", customer: "Example Co", status: "Completed", time: "5 hours ago", duration: "1.5 hrs" }
];

export function DeliveryHistory() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="text-gray-900 dark:text-gray-100">Recent History</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {deliveryHistory.map((delivery) => (
            <div key={delivery.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  delivery.status === 'Completed'
                    ? 'bg-green-50 dark:bg-green-900/20'
                    : 'bg-red-50 dark:bg-red-900/20'
                }`}>
                  {delivery.status === 'Completed' ? (
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{delivery.id}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{delivery.customer}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  delivery.status === 'Completed'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                }`}>
                  {delivery.status}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{delivery.time}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{delivery.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
