import { useState } from "react";
import { Search, Plus, Filter, FileText, Download, Eye, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MedicalRecord {
  id: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  date: string;
  type: "diagnosis" | "prescription" | "lab-report" | "imaging";
  title: string;
  description: string;
  attachments: number;
}

const records: MedicalRecord[] = [
  {
    id: "R001",
    patientName: "John Smith",
    patientId: "P001",
    doctorName: "Dr. Sarah Williams",
    date: "2024-01-15",
    type: "diagnosis",
    title: "Hypertension Assessment",
    description: "Initial diagnosis and treatment plan for stage 1 hypertension",
    attachments: 2,
  },
  {
    id: "R002",
    patientName: "Emily Davis",
    patientId: "P004",
    doctorName: "Dr. Michael Chen",
    date: "2024-01-14",
    type: "lab-report",
    title: "Complete Blood Count",
    description: "Routine CBC with differential and platelet count",
    attachments: 1,
  },
  {
    id: "R003",
    patientName: "Robert Wilson",
    patientId: "P005",
    doctorName: "Dr. James Brown",
    date: "2024-01-13",
    type: "prescription",
    title: "Cardiac Medication Update",
    description: "Updated prescription for cardiac management medications",
    attachments: 0,
  },
  {
    id: "R004",
    patientName: "Sarah Johnson",
    patientId: "P002",
    doctorName: "Dr. Emily Wong",
    date: "2024-01-12",
    type: "imaging",
    title: "Chest X-Ray Results",
    description: "Routine chest X-ray, no abnormalities detected",
    attachments: 3,
  },
  {
    id: "R005",
    patientName: "Michael Chen",
    patientId: "P003",
    doctorName: "Dr. Sarah Williams",
    date: "2024-01-11",
    type: "diagnosis",
    title: "Diabetes Management Review",
    description: "Quarterly review of type 2 diabetes management plan",
    attachments: 1,
  },
];

const typeStyles = {
  diagnosis: "bg-primary/10 text-primary",
  prescription: "bg-success/10 text-success",
  "lab-report": "bg-warning/10 text-warning",
  imaging: "bg-accent/10 text-accent",
};

const typeLabels = {
  diagnosis: "Diagnosis",
  prescription: "Prescription",
  "lab-report": "Lab Report",
  imaging: "Imaging",
};

const MedicalRecords = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredRecords = records.filter(
    (record) =>
      (selectedType === "all" || record.type === selectedType) &&
      (record.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Medical Records
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage patient medical records
          </p>
        </div>
        <Button className="gap-2 w-full md:w-auto">
          <Plus className="h-4 w-4" />
          New Record
        </Button>
      </div>

      {/* Filters */}
      <div className="medical-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search records by patient or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="diagnosis">Diagnosis</SelectItem>
                <SelectItem value="prescription">Prescription</SelectItem>
                <SelectItem value="lab-report">Lab Report</SelectItem>
                <SelectItem value="imaging">Imaging</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Records Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredRecords.map((record, index) => (
            <div
              key={record.id}
              className="medical-card p-5 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${typeStyles[record.type]}`}>
                  <FileText className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground">
                          {record.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={typeStyles[record.type]}
                        >
                          {typeLabels[record.type]}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {record.description}
                      </p>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {record.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{record.patientName}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {record.doctorName}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {record.date}
                    </div>
                    {record.attachments > 0 && (
                      <>
                        <span>•</span>
                        <span>{record.attachments} attachment(s)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="recent">
          <div className="text-center py-12 text-muted-foreground">
            Recent records from the last 7 days
          </div>
        </TabsContent>

        <TabsContent value="flagged">
          <div className="text-center py-12 text-muted-foreground">
            No flagged records
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MedicalRecords;
