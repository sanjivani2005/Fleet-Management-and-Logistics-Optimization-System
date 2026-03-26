"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Calendar, Award } from "lucide-react";

export function ProfileOverview() {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center space-x-2">
          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-gray-100">Profile Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Profile Picture and Basic Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-white">JD</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">John Doe</h3>
          <p className="text-gray-600 dark:text-gray-400">Fleet Manager</p>
          <div className="flex items-center space-x-1 mt-2">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Premium Member</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">john.doe@fleetHub.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">New York, USA</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Joined March 2023</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Button variant="default" className="w-full">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full">
            View Public Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
