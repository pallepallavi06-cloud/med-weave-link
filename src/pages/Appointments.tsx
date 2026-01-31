import { useState } from "react";
import { Search, Plus, Filter, Clock, User, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  duration: string;
}

const appointments: Appointment[] = [
  {
    id: "A001",
    patientName: "John Smith",
    doctorName: "Dr. Sarah Williams",
    date: "2024-01-20",
    time: "09:00 AM",
    type: "General Checkup",
    status: "confirmed",
    duration: "30 min",
  },
  {
    id: "A002",
    patientName: "Emily Davis",
    doctorName: "Dr. Michael Chen",
    date: "2024-01-20",
    time: "10:30 AM",
    type: "Follow-up",
    status: "pending",
    duration: "15 min",
  },
  {
    id: "A003",
    patientName: "Robert Wilson",
    doctorName: "Dr. Sarah Williams",
    date: "2024-01-20",
    time: "11:00 AM",
    type: "Consultation",
    status: "confirmed",
    duration: "45 min",
  },
  {
    id: "A004",
    patientName: "Sarah Johnson",
    doctorName: "Dr. James Brown",
    date: "2024-01-20",
    time: "02:00 PM",
    type: "Lab Results",
    status: "completed",
    duration: "20 min",
  },
  {
    id: "A005",
    patientName: "Michael Chen",
    doctorName: "Dr. Emily Wong",
    date: "2024-01-20",
    time: "03:30 PM",
    type: "Vaccination",
    status: "cancelled",
    duration: "15 min",
  },
];

const statusStyles = {
  confirmed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30"
];

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"list" | "calendar">("list");

  const filteredAppointments = appointments.filter(
    (apt) =>
      apt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.doctorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Appointments
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and schedule patient appointments
          </p>
        </div>
        <Button className="gap-2 w-full md:w-auto">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* View Tabs */}
      <Tabs defaultValue="list" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="list" onClick={() => setView("list")}>
              List View
            </TabsTrigger>
            <TabsTrigger value="calendar" onClick={() => setView("calendar")}>
              Calendar View
            </TabsTrigger>
          </TabsList>

          {/* Filters */}
          <div className="flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* List View */}
        <TabsContent value="list" className="space-y-4">
          <div className="medical-card p-4">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Today - January 20, 2024</h3>
              <Badge variant="outline" className="ml-2">
                {appointments.length} appointments
              </Badge>
            </div>

            <div className="space-y-3">
              {filteredAppointments.map((appointment, index) => (
                <div
                  key={appointment.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-20 text-center shrink-0">
                    <p className="font-semibold text-primary">{appointment.time}</p>
                    <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                  </div>

                  <div className="h-12 w-px bg-border" />

                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {appointment.patientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{appointment.patientName}</p>
                      <Badge
                        variant="outline"
                        className={`shrink-0 capitalize ${statusStyles[appointment.status]}`}
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {appointment.doctorName}
                      </span>
                      <span>•</span>
                      <span>{appointment.type}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Calendar View */}
        <TabsContent value="calendar">
          <div className="medical-card p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-lg font-semibold">January 2024</h3>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
              </div>
            </div>

            {/* Time Grid */}
            <div className="grid grid-cols-8 gap-px bg-border rounded-lg overflow-hidden">
              {/* Header Row */}
              <div className="bg-muted/30 p-3 font-medium text-center text-sm">Time</div>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="bg-muted/30 p-3 font-medium text-center text-sm">
                  {day}
                </div>
              ))}

              {/* Time Slots */}
              {timeSlots.slice(0, 6).map((time) => (
                <>
                  <div key={time} className="bg-card p-2 text-xs text-muted-foreground text-center border-t">
                    {time}
                  </div>
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={`${time}-${day}`}
                      className="bg-card p-1 min-h-[60px] border-t hover:bg-muted/30 transition-colors cursor-pointer"
                    >
                      {time === "09:00" && day === 1 && (
                        <div className="bg-primary/10 text-primary rounded p-1 text-xs">
                          <p className="font-medium truncate">John Smith</p>
                          <p className="text-[10px]">Checkup</p>
                        </div>
                      )}
                      {time === "10:30" && day === 3 && (
                        <div className="bg-warning/10 text-warning rounded p-1 text-xs">
                          <p className="font-medium truncate">Emily Davis</p>
                          <p className="text-[10px]">Follow-up</p>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Appointments;
