import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Heart,
  LayoutDashboard,
  Users,
  Stethoscope,
  Calendar,
  FileText,
  DollarSign,
  Package,
  Settings,
  LogOut,
  ClipboardList,
  Activity,
  Video,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppSidebarProps {
  role: "admin" | "doctor" | "patient" | "receptionist";
}

const menuItems = {
  admin: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Patients", url: "/dashboard/patients", icon: Users },
    { title: "Doctors", url: "/dashboard/doctors", icon: Stethoscope },
    { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
    { title: "Medical Records", url: "/dashboard/records", icon: FileText },
    { title: "Billing", url: "/dashboard/billing", icon: DollarSign },
    { title: "Inventory", url: "/dashboard/inventory", icon: Package },
    { title: "Reports", url: "/dashboard/reports", icon: ClipboardList },
    { title: "Analytics", url: "/dashboard/analytics", icon: Activity },
  ],
  doctor: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "My Patients", url: "/dashboard/patients", icon: Users },
    { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
    { title: "Medical Records", url: "/dashboard/records", icon: FileText },
    { title: "Telemedicine", url: "/dashboard/telemedicine", icon: Video },
    { title: "Schedule", url: "/dashboard/schedule", icon: ClipboardList },
  ],
  patient: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
    { title: "Medical Records", url: "/dashboard/records", icon: FileText },
    { title: "Billing", url: "/dashboard/billing", icon: DollarSign },
    { title: "Telemedicine", url: "/dashboard/telemedicine", icon: Video },
  ],
  receptionist: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Patients", url: "/dashboard/patients", icon: Users },
    { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
    { title: "Billing", url: "/dashboard/billing", icon: DollarSign },
  ],
};

export function AppSidebar({ role }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const items = menuItems[role];

  return (
    <Sidebar
      className={cn(
        "sidebar-gradient border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sidebar-primary/20 shrink-0">
            <Heart className="h-6 w-6 text-sidebar-primary" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h1 className="text-lg font-display font-bold text-sidebar-foreground">
                MediCare
              </h1>
              <p className="text-xs text-sidebar-foreground/60 capitalize">{role} Portal</p>
            </div>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className={cn("text-sidebar-foreground/50 mb-2", collapsed && "sr-only")}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url || 
                  (item.url !== "/dashboard" && location.pathname.startsWith(item.url));
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                          isActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-5 w-5 shrink-0 transition-transform group-hover:scale-110",
                            isActive && "animate-scale-in"
                          )}
                        />
                        {!collapsed && (
                          <span className="font-medium text-sm animate-fade-in">
                            {item.title}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto pt-4">
          <SidebarGroupLabel className={cn("text-sidebar-foreground/50 mb-2", collapsed && "sr-only")}>
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/dashboard/notifications"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
                  >
                    <Bell className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="font-medium text-sm">Notifications</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/dashboard/settings"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
                  >
                    <Settings className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="font-medium text-sm">Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0 animate-fade-in">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Dr. John Doe
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                john.doe@medicare.com
              </p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
