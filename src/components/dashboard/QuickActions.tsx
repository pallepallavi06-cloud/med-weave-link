import { Calendar, UserPlus, FileText, DollarSign, Video, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "New Appointment",
    description: "Schedule a patient visit",
    icon: Calendar,
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    title: "Add Patient",
    description: "Register new patient",
    icon: UserPlus,
    color: "bg-success/10 text-success hover:bg-success/20",
  },
  {
    title: "Create Record",
    description: "Add medical record",
    icon: FileText,
    color: "bg-accent/10 text-accent hover:bg-accent/20",
  },
  {
    title: "Generate Invoice",
    description: "Create billing invoice",
    icon: DollarSign,
    color: "bg-warning/10 text-warning hover:bg-warning/20",
  },
  {
    title: "Start Consultation",
    description: "Begin telemedicine call",
    icon: Video,
    color: "bg-chart-5/10 text-chart-5 hover:bg-chart-5/20",
  },
  {
    title: "Check Inventory",
    description: "View stock levels",
    icon: Package,
    color: "bg-muted-foreground/10 text-muted-foreground hover:bg-muted-foreground/20",
  },
];

export const QuickActions = () => {
  return (
    <div className="medical-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-display font-semibold">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common tasks at your fingertips</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <Button
            key={action.title}
            variant="ghost"
            className={`h-auto flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 ${action.color} animate-scale-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <action.icon className="h-6 w-6" />
            <div className="text-center">
              <p className="font-medium text-sm">{action.title}</p>
              <p className="text-xs opacity-70 mt-0.5">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
