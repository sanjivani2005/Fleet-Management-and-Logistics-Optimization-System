"use client";

import React, { useEffect, useRef, useState } from "react";
import { Truck, Navigation, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockVehicles } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
}

export function GoogleMapsView({ className }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [google, setGoogle] = useState<any>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setGoogle(window.google);
      setMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && google && mapRef.current && !map) {
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.0060 }, // New York coordinates
        zoom: 12,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });
      
      setMap(mapInstance);

      // Add markers for vehicles
      mockVehicles.forEach((vehicle) => {
        const marker = new google.maps.Marker({
          position: {
            lat: 40.7128 + (Math.random() - 0.5) * 0.1,
            lng: -74.0060 + (Math.random() - 0.5) * 0.1
          },
          map: mapInstance,
          title: vehicle.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: getStatusColor(vehicle.status),
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
          }
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; font-family: system-ui;">
              <div style="font-weight: bold; margin-bottom: 4px;">${vehicle.name}</div>
              <div style="font-size: 12px; color: #666;">${vehicle.id}</div>
              <div style="font-size: 12px; color: #666;">Driver: ${vehicle.driver}</div>
              <div style="font-size: 12px; color: #666;">Fuel: ${vehicle.fuel}%</div>
              <div style="font-size: 12px; color: #666;">Status: ${vehicle.status}</div>
              <div style="font-size: 12px; color: #666; margin-top: 4px;">${vehicle.location.address}</div>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
          setSelectedVehicle(vehicle.id);
        });
      });
    }
  }, [mapLoaded, google, map]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "#10b981";
      case "idle": return "#f59e0b";
      case "delayed": return "#ef4444";
      case "maintenance": return "#6b7280";
      default: return "#6b7280";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <Navigation className="w-4 h-4" />;
      case "delayed": return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className={cn("flex flex-col lg:flex-row gap-6 h-full", className)}>
      <div className="flex-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Live Fleet Tracking (Google Maps)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <div 
                ref={mapRef} 
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              />
              
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Google Maps...</h3>
                  </div>
                </div>
              )}

              <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-3">
                <div className="text-xs font-medium text-gray-600 mb-2">Vehicle Status</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor("active") }}></div>
                    <span className="text-xs text-gray-600">Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor("idle") }}></div>
                    <span className="text-xs text-gray-600">Idle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor("delayed") }}></div>
                    <span className="text-xs text-gray-600">Delayed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor("maintenance") }}></div>
                    <span className="text-xs text-gray-600">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full lg:w-80 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Vehicles</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[250px] overflow-y-auto">
            <div className="space-y-3">
              {mockVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={cn(
                    "p-3 rounded-lg border cursor-pointer transition-all duration-200",
                    selectedVehicle === vehicle.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        getStatusColor(vehicle.status)
                      )}></div>
                      <span className="font-medium text-sm">{vehicle.id}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      {getStatusIcon(vehicle.status)}
                      <span className="text-xs capitalize">{vehicle.status}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">
                    Driver: {vehicle.driver}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Fuel: {vehicle.fuel}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        vehicle.fuel > 50 ? "bg-green-500" : vehicle.fuel > 25 ? "bg-yellow-500" : "bg-red-500"
                      )}
                      style={{ width: `${vehicle.fuel}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">
                  {mockVehicles.filter(v => v.status === "active").length}
                </div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
              <div className="text-center p-2 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">
                  {mockVehicles.filter(v => v.status === "delayed").length}
                </div>
                <div className="text-xs text-gray-600">Delayed</div>
              </div>
              <div className="text-center p-2 bg-yellow-50 rounded-lg">
                <div className="text-xl font-bold text-yellow-600">
                  {mockVehicles.filter(v => v.status === "idle").length}
                </div>
                <div className="text-xs text-gray-600">Idle</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-600">
                  {mockVehicles.filter(v => v.status === "maintenance").length}
                </div>
                <div className="text-xs text-gray-600">Maintenance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
