"use client";

import React, { useState } from "react";
import { Search, Bell, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, title: "Low Fuel Alert", message: "Vehicle VH002 has less than 50% fuel", time: "5 min ago", unread: true },
    { id: 2, title: "Delivery Delay", message: "Vehicle VH002 is running 15 minutes behind", time: "15 min ago", unread: true },
    { id: 3, title: "Maintenance Scheduled", message: "Vehicle VH005 scheduled for maintenance", time: "1 hour ago", unread: false },
  ];

  return (
    <div className={cn("bg-white border-b border-gray-200 px-6 py-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search vehicles, drivers, deliveries..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer",
                        notification.unread && "bg-blue-50"
                      )}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={cn(
                          "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                          notification.unread ? "bg-blue-500" : "bg-gray-300"
                        )}></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                          <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </a>
                  <hr className="my-2" />
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
