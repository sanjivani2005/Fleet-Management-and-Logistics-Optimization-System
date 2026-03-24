"use client";

import React, { useState } from "react";
import {
  Truck,
  Map,
  BarChart3,
  MessageSquare,
  Settings,
  Bell,
  Menu,
  X,
  Home,
  Package,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: <Home className="w-5 h-5" />, label: "Dashboard", href: "/", active: true },
  { icon: <Truck className="w-5 h-5" />, label: "Fleet", href: "/fleet" },
  { icon: <Map className="w-5 h-5" />, label: "Map View", href: "/map" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", href: "/analytics" },
  { icon: <Package className="w-5 h-5" />, label: "Deliveries", href: "/deliveries" },
  { icon: <Users className="w-5 h-5" />, label: "Drivers", href: "/drivers" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "AI Assistant", href: "/chat" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  className?: string;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function Sidebar({ className, onCollapsedChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapsedChange?.(newCollapsed);
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-40",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">FleetHub</h1>
                <p className="text-xs text-gray-500">Management System</p>
              </div>
            </div>
          )}
          <button
            onClick={handleToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                item.active
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <div className={cn("flex-shrink-0", item.active && "text-blue-600")}>
                {item.icon}
              </div>
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@fleethub.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
