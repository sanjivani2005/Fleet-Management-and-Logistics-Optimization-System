"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Lock, Globe, Palette } from "lucide-react";

export function ProfileSettings() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-gray-900 dark:text-gray-100">Quick Settings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Notifications */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <div className="flex items-center space-x-3">
              <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Notifications</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Email & push alerts</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
            </button>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <div className="flex items-center space-x-3">
              <Lock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Privacy</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Profile visibility</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Language</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">English</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <div className="flex items-center space-x-3">
              <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Theme</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Dark mode</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Button variant="default" className="w-full">
            View All Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
