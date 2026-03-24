export interface Vehicle {
  id: string;
  name: string;
  status: "active" | "idle" | "delayed" | "maintenance";
  fuel: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  driver: string;
  lastUpdate: Date;
  route?: {
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
    progress: number;
  };
}

export interface Delivery {
  id: string;
  vehicleId: string;
  customer: string;
  status: "pending" | "in_progress" | "completed" | "delayed";
  estimatedTime: Date;
  actualTime?: Date;
  priority: "low" | "medium" | "high";
}

export interface Alert {
  id: string;
  type: "warning" | "error" | "info" | "success";
  title: string;
  message: string;
  timestamp: Date;
  vehicleId?: string;
  read: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "VH001",
    name: "Truck Alpha",
    status: "active",
    fuel: 85,
    location: { lat: 40.7128, lng: -74.0060, address: "123 Main St, New York, NY" },
    driver: "John Smith",
    lastUpdate: new Date(),
    route: {
      start: { lat: 40.7128, lng: -74.0060 },
      end: { lat: 40.7580, lng: -73.9855 },
      progress: 65
    }
  },
  {
    id: "VH002",
    name: "Van Beta",
    status: "delayed",
    fuel: 42,
    location: { lat: 40.7580, lng: -73.9855, address: "456 Broadway, New York, NY" },
    driver: "Sarah Johnson",
    lastUpdate: new Date(Date.now() - 30 * 60000),
    route: {
      start: { lat: 40.7580, lng: -73.9855 },
      end: { lat: 40.7489, lng: -73.9680 },
      progress: 30
    }
  },
  {
    id: "VH003",
    name: "Truck Gamma",
    status: "idle",
    fuel: 67,
    location: { lat: 40.7489, lng: -73.9680, address: "789 5th Ave, New York, NY" },
    driver: "Mike Wilson",
    lastUpdate: new Date(Date.now() - 15 * 60000)
  },
  {
    id: "VH004",
    name: "Van Delta",
    status: "active",
    fuel: 91,
    location: { lat: 40.7282, lng: -73.9942, address: "321 Hudson St, New York, NY" },
    driver: "Emily Brown",
    lastUpdate: new Date(),
    route: {
      start: { lat: 40.7282, lng: -73.9942 },
      end: { lat: 40.7128, lng: -74.0060 },
      progress: 45
    }
  },
  {
    id: "VH005",
    name: "Truck Epsilon",
    status: "maintenance",
    fuel: 23,
    location: { lat: 40.7614, lng: -73.9776, address: "654 Madison Ave, New York, NY" },
    driver: "David Lee",
    lastUpdate: new Date(Date.now() - 120 * 60000)
  }
];

export const mockDeliveries: Delivery[] = [
  {
    id: "DEL001",
    vehicleId: "VH001",
    customer: "Acme Corp",
    status: "in_progress",
    estimatedTime: new Date(Date.now() + 45 * 60000),
    priority: "high"
  },
  {
    id: "DEL002",
    vehicleId: "VH002",
    customer: "Beta Industries",
    status: "delayed",
    estimatedTime: new Date(Date.now() - 15 * 60000),
    actualTime: new Date(Date.now() + 30 * 60000),
    priority: "medium"
  },
  {
    id: "DEL003",
    vehicleId: "VH004",
    customer: "Gamma Solutions",
    status: "in_progress",
    estimatedTime: new Date(Date.now() + 60 * 60000),
    priority: "low"
  }
];

export const mockAlerts: Alert[] = [
  {
    id: "ALT001",
    type: "warning",
    title: "Low Fuel Alert",
    message: "Vehicle VH002 has less than 50% fuel remaining",
    timestamp: new Date(Date.now() - 30 * 60000),
    vehicleId: "VH002",
    read: false
  },
  {
    id: "ALT002",
    type: "error",
    title: "Delivery Delay",
    message: "Vehicle VH002 is running 15 minutes behind schedule",
    timestamp: new Date(Date.now() - 15 * 60000),
    vehicleId: "VH002",
    read: false
  },
  {
    id: "ALT003",
    type: "info",
    title: "Maintenance Scheduled",
    message: "Vehicle VH005 scheduled for maintenance tomorrow",
    timestamp: new Date(Date.now() - 60 * 60000),
    vehicleId: "VH005",
    read: true
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: "MSG001",
    role: "assistant",
    content: "Hello! I'm your fleet management assistant. How can I help you optimize your operations today?",
    timestamp: new Date(Date.now() - 5 * 60000)
  }
];
