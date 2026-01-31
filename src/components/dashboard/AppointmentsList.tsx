import { Clock, User, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Appointment {
  id: string;
  patientName: string;
  patientAvatar?: string;
  time: string;
  type: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  doctor?: string;
}

const appointments: Appointment[] = [
  {
    id: "1",
    patientName: "Sarah Johnson",
    time: "09:00 AM",
    type: "General Checkup",
    status: "confirmed",
    doctor: "Dr. Smith",
  },
  {
    id: "2",
    patientName: "Michael Chen",
    time: "10:30 AM",
    type: "Follow-up",
    status: "pending",
    doctor: "Dr. Williams",
  },
  {
    id: "3",
    patientName: "Emily Davis",
    time: "11:45 AM",
    type: "Consultation",
    status: "confirmed",
    doctor: "Dr. Brown",
  },
  {
    id: "4",
    patientName: "Robert Wilson",
    time: "02:00 PM",
    type: "Lab Results",
    status: "completed",
    doctor: "Dr. Smith",
  },
  {
    id: "5",
    patientName: "Lisa Anderson",
    time: "03:30 PM",
    type: "Vaccination",
    status: "cancelled",
    doctor: "Dr. Johnson",
  },
];

const statusStyles = {
  confirmed: "status-confirmed",
  pending: "status-pending",
  completed: "bg-muted text-muted-foreground",
  cancelled: "status-cancelled",
};

export const AppointmentsList = () => {
  return (
    <div className="medical-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold">Today's Appointments</h3>
          <p className="text-sm text-muted-foreground">
            {appointments.length} appointments scheduled
          </p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200 animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={appointment.patientAvatar} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {appointment.patientName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground truncate">
                  {appointment.patientName}
                </p>
                <Badge
                  variant="outline"
                  className={cn("shrink-0 capitalize text-xs", statusStyles[appointment.status])}
                >
                  {appointment.status}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {appointment.time}
                </span>
                <span>•</span>
                <span>{appointment.type}</span>
                {appointment.doctor && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {appointment.doctor}
                    </span>
                  </>
                )}
              </div>
            </div>

            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
