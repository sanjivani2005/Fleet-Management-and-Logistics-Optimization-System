"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { ProfileOverview } from "@/components/profile/profile-overview";
import { ProfileSettings } from "@/components/profile/profile-settings";
import { ActivityHistory } from "@/components/profile/activity-history";

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProfileOverview />
          <ProfileSettings />
          <ActivityHistory />
        </div>
      </div>
    </MainLayout>
  );
}
