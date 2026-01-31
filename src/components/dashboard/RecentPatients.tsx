import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  avatar?: string;
  age: number;
  lastVisit: string;
  condition: string;
  status: "stable" | "critical" | "recovering";
}

const patients: Patient[] = [
  {
    id: "1",
    name: "John Smith",
    age: 45,
    lastVisit: "Today",
    condition: "Hypertension",
    status: "stable",
  },
  {
    id: "2",
    name: "Emma Wilson",
    age: 32,
    lastVisit: "Yesterday",
    condition: "Diabetes Type 2",
    status: "recovering",
  },
  {
    id: "3",
    name: "David Brown",
    age: 58,
    lastVisit: "2 days ago",
    condition: "Cardiac Arrhythmia",
    status: "critical",
  },
  {
    id: "4",
    name: "Sophie Lee",
    age: 28,
    lastVisit: "3 days ago",
    condition: "Asthma",
    status: "stable",
  },
];

const statusStyles = {
  stable: "bg-success/10 text-success border-success/20",
  critical: "bg-destructive/10 text-destructive border-destructive/20",
  recovering: "bg-warning/10 text-warning border-warning/20",
};

export const RecentPatients = () => {
  return (
    <div className="medical-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold">Recent Patients</h3>
          <p className="text-sm text-muted-foreground">Latest patient activities</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {patients.map((patient, index) => (
          <div
            key={patient.id}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 cursor-pointer group animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Avatar className="h-11 w-11 shrink-0">
              <AvatarImage src={patient.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground truncate">{patient.name}</p>
                <Badge
                  variant="outline"
                  className={`shrink-0 capitalize text-xs ${statusStyles[patient.status]}`}
                >
                  {patient.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-sm text-muted-foreground">
                <span>{patient.age} yrs</span>
                <span>•</span>
                <span className="truncate">{patient.condition}</span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
              <ChevronRight className="h-4 w-4 text-muted-foreground mt-1 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
