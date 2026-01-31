import { Users, Calendar, DollarSign, Activity, TrendingUp, Clock, AlertCircle, Stethoscope } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";
import { RecentPatients } from "@/components/dashboard/RecentPatients";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Welcome back, Dr. John
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening at your hospital today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: Just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Patients"
          value="2,847"
          change="+12.5% from last month"
          changeType="positive"
          icon={Users}
          iconColor="bg-primary/10 text-primary"
        />
        <StatCard
          title="Today's Appointments"
          value="48"
          change="8 pending confirmation"
          changeType="neutral"
          icon={Calendar}
          iconColor="bg-success/10 text-success"
        />
        <StatCard
          title="Revenue (This Month)"
          value="$128,450"
          change="+8.2% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-warning/10 text-warning"
        />
        <StatCard
          title="Active Doctors"
          value="24"
          change="3 on leave"
          changeType="neutral"
          icon={Stethoscope}
          iconColor="bg-accent/10 text-accent"
        />
      </div>

      {/* Alerts Banner */}
      <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 flex items-start gap-3 animate-slide-up">
        <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-foreground">Low Inventory Alert</h4>
          <p className="text-sm text-muted-foreground mt-0.5">
            5 medicines are below minimum stock levels.{" "}
            <a href="/dashboard/inventory" className="text-primary hover:underline">
              View inventory →
            </a>
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Appointments & Patients */}
        <div className="lg:col-span-2 space-y-6">
          <AppointmentsList />
          <AnalyticsChart />
        </div>

        {/* Right Column - Quick Actions & Recent Patients */}
        <div className="space-y-6">
          <QuickActions />
          <RecentPatients />
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="medical-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-success/10">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              <p className="text-2xl font-display font-bold">94.8%</p>
              <p className="text-xs text-success">+2.3% this month</p>
            </div>
          </div>
        </div>

        <div className="medical-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Wait Time</p>
              <p className="text-2xl font-display font-bold">12 min</p>
              <p className="text-xs text-success">-3 min from last week</p>
            </div>
          </div>
        </div>

        <div className="medical-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Appointment Rate</p>
              <p className="text-2xl font-display font-bold">89%</p>
              <p className="text-xs text-muted-foreground">Show-up rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
