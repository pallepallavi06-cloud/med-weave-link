import { useState } from "react";
import { Search, Plus, Filter, Download, MoreHorizontal, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  bloodType: string;
  lastVisit: string;
  status: "active" | "inactive" | "critical";
  address: string;
}

const patients: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    age: 45,
    gender: "Male",
    bloodType: "A+",
    lastVisit: "2024-01-15",
    status: "active",
    address: "123 Main St, New York, NY",
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    age: 32,
    gender: "Female",
    bloodType: "O-",
    lastVisit: "2024-01-14",
    status: "active",
    address: "456 Oak Ave, Los Angeles, CA",
  },
  {
    id: "P003",
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 345-6789",
    age: 58,
    gender: "Male",
    bloodType: "B+",
    lastVisit: "2024-01-13",
    status: "critical",
    address: "789 Pine Rd, Chicago, IL",
  },
  {
    id: "P004",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+1 (555) 456-7890",
    age: 28,
    gender: "Female",
    bloodType: "AB+",
    lastVisit: "2024-01-10",
    status: "active",
    address: "321 Elm St, Houston, TX",
  },
  {
    id: "P005",
    name: "Robert Wilson",
    email: "r.wilson@email.com",
    phone: "+1 (555) 567-8901",
    age: 65,
    gender: "Male",
    bloodType: "O+",
    lastVisit: "2024-01-08",
    status: "inactive",
    address: "654 Maple Dr, Phoenix, AZ",
  },
];

const statusStyles = {
  active: "bg-success/10 text-success border-success/20",
  inactive: "bg-muted text-muted-foreground",
  critical: "bg-destructive/10 text-destructive border-destructive/20",
};

const Patients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Patients
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage patient records and information
          </p>
        </div>
        <Button className="gap-2 w-full md:w-auto">
          <Plus className="h-4 w-4" />
          Add New Patient
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="medical-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patients by name, email, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="medical-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-semibold">Patient</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold">Age / Gender</TableHead>
              <TableHead className="font-semibold">Blood Type</TableHead>
              <TableHead className="font-semibold">Last Visit</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow
                key={patient.id}
                className="hover:bg-muted/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="truncate max-w-[160px]">{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{patient.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span>
                    {patient.age} yrs / {patient.gender}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-mono">
                    {patient.bloodType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{patient.lastVisit}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`capitalize ${statusStyles[patient.status]}`}
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Medical History</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete Patient
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPatients.length} of {patients.length} patients
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
