"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Mail, Smartphone, AlertTriangle } from "lucide-react";

const notificationTypes = [
  {
    title: "Email Notifications",
    description: "Receive updates via email",
    icon: <Mail className="w-4 h-4" />,
    enabled: true
  },
  {
    title: "Push Notifications",
    description: "Get instant browser notifications",
    icon: <Bell className="w-4 h-4" />,
    enabled: true
  },
  {
    title: "SMS Alerts",
    description: "Critical alerts via text message",
    icon: <Smartphone className="w-4 h-4" />,
    enabled: false
  },
  {
    title: "Emergency Alerts",
    description: "Urgent system notifications",
    icon: <AlertTriangle className="w-4 h-4" />,
    enabled: true
  }
];

export function NotificationSettings() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <span className="text-gray-900 dark:text-gray-100">Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {notificationTypes.map((notification, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {notification.icon}
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-gray-100">{notification.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{notification.description}</p>
                </div>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notification.enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notification.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        
        <div className="pt-4">
          <Button variant="default" className="w-full">
            Update Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
