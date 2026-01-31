import { useState } from "react";
import { Search, Plus, Filter, Stethoscope, Clock, MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  email: string;
  phone: string;
  experience: number;
  rating: number;
  patients: number;
  status: "available" | "busy" | "on-leave";
  schedule: string;
  avatar?: string;
}

const doctors: Doctor[] = [
  {
    id: "D001",
    name: "Dr. Sarah Williams",
    specialty: "Cardiology",
    department: "Cardiac Care",
    email: "s.williams@medicare.com",
    phone: "+1 (555) 123-4567",
    experience: 12,
    rating: 4.9,
    patients: 1250,
    status: "available",
    schedule: "Mon-Fri, 9 AM - 5 PM",
  },
  {
    id: "D002",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    department: "Neurosciences",
    email: "m.chen@medicare.com",
    phone: "+1 (555) 234-5678",
    experience: 15,
    rating: 4.8,
    patients: 980,
    status: "busy",
    schedule: "Mon-Thu, 8 AM - 4 PM",
  },
  {
    id: "D003",
    name: "Dr. Emily Wong",
    specialty: "Pediatrics",
    department: "Children's Health",
    email: "e.wong@medicare.com",
    phone: "+1 (555) 345-6789",
    experience: 8,
    rating: 4.9,
    patients: 1500,
    status: "available",
    schedule: "Mon-Fri, 10 AM - 6 PM",
  },
  {
    id: "D004",
    name: "Dr. James Brown",
    specialty: "Orthopedics",
    department: "Bone & Joint",
    email: "j.brown@medicare.com",
    phone: "+1 (555) 456-7890",
    experience: 20,
    rating: 4.7,
    patients: 890,
    status: "on-leave",
    schedule: "Tue-Sat, 9 AM - 5 PM",
  },
  {
    id: "D005",
    name: "Dr. Lisa Anderson",
    specialty: "Dermatology",
    department: "Skin Care",
    email: "l.anderson@medicare.com",
    phone: "+1 (555) 567-8901",
    experience: 10,
    rating: 4.8,
    patients: 720,
    status: "available",
    schedule: "Mon-Fri, 9 AM - 4 PM",
  },
  {
    id: "D006",
    name: "Dr. Robert Taylor",
    specialty: "General Medicine",
    department: "Internal Medicine",
    email: "r.taylor@medicare.com",
    phone: "+1 (555) 678-9012",
    experience: 18,
    rating: 4.6,
    patients: 2100,
    status: "busy",
    schedule: "Mon-Sat, 8 AM - 6 PM",
  },
];

const statusStyles = {
  available: "bg-success/10 text-success border-success/20",
  busy: "bg-warning/10 text-warning border-warning/20",
  "on-leave": "bg-muted text-muted-foreground",
};

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (departmentFilter === "all" || doctor.department === departmentFilter) &&
      (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const departments = [...new Set(doctors.map((d) => d.department))];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Doctors
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage doctor profiles and schedules
          </p>
        </div>
        <Button className="gap-2 w-full md:w-auto">
          <Plus className="h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      {/* Filters */}
      <div className="medical-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search doctors by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <Card
            key={doctor.id}
            className="medical-card overflow-hidden animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 shrink-0">
                  <AvatarImage src={doctor.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {doctor.name
                      .split(" ")
                      .slice(1)
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground truncate">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {doctor.specialty}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`shrink-0 capitalize ${statusStyles[doctor.status]}`}
                    >
                      {doctor.status.replace("-", " ")}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({doctor.patients} patients)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Stethoscope className="h-4 w-4 shrink-0" />
                  <span>{doctor.department}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{doctor.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{doctor.email}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
