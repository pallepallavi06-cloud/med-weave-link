import { useState } from "react";
import { Search, Plus, Download, DollarSign, CreditCard, Receipt, TrendingUp, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "cancelled";
  services: string[];
}

const invoices: Invoice[] = [
  {
    id: "INV-001",
    patientName: "John Smith",
    patientId: "P001",
    date: "2024-01-15",
    dueDate: "2024-01-30",
    amount: 450.00,
    status: "paid",
    services: ["General Consultation", "Blood Test"],
  },
  {
    id: "INV-002",
    patientName: "Emily Davis",
    patientId: "P004",
    date: "2024-01-14",
    dueDate: "2024-01-29",
    amount: 1250.00,
    status: "pending",
    services: ["MRI Scan", "Specialist Consultation"],
  },
  {
    id: "INV-003",
    patientName: "Robert Wilson",
    patientId: "P005",
    date: "2024-01-10",
    dueDate: "2024-01-25",
    amount: 320.00,
    status: "overdue",
    services: ["Follow-up", "Prescription"],
  },
  {
    id: "INV-004",
    patientName: "Sarah Johnson",
    patientId: "P002",
    date: "2024-01-12",
    dueDate: "2024-01-27",
    amount: 890.00,
    status: "paid",
    services: ["X-Ray", "Orthopedic Consultation"],
  },
  {
    id: "INV-005",
    patientName: "Michael Chen",
    patientId: "P003",
    date: "2024-01-08",
    dueDate: "2024-01-23",
    amount: 175.00,
    status: "cancelled",
    services: ["Lab Work"],
  },
];

const statusStyles = {
  paid: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  overdue: "bg-destructive/10 text-destructive border-destructive/20",
  cancelled: "bg-muted text-muted-foreground",
};

const statusIcons = {
  paid: CheckCircle,
  pending: Clock,
  overdue: XCircle,
  cancelled: XCircle,
};

const Billing = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRevenue = invoices.filter(i => i.status === "paid").reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = invoices.filter(i => i.status === "pending").reduce((sum, i) => sum + i.amount, 0);
  const overdueAmount = invoices.filter(i => i.status === "overdue").reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Billing & Invoices
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage invoices and payment tracking
          </p>
        </div>
        <Button className="gap-2 w-full md:w-auto">
          <Plus className="h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-display font-bold text-success">
                ${totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-success/10">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-display font-bold text-warning">
                ${pendingAmount.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-warning/10">
              <Clock className="h-5 w-5 text-warning" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Overdue</p>
              <p className="text-2xl font-display font-bold text-destructive">
                ${overdueAmount.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-destructive/10">
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="text-2xl font-display font-bold">
                {invoices.length}
              </p>
              <p className="text-xs text-muted-foreground">invoices</p>
            </div>
            <div className="p-3 rounded-xl bg-primary/10">
              <Receipt className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="medical-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="medical-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-semibold">Invoice</TableHead>
              <TableHead className="font-semibold">Patient</TableHead>
              <TableHead className="font-semibold">Services</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Due Date</TableHead>
              <TableHead className="font-semibold text-right">Amount</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice, index) => {
              const StatusIcon = statusIcons[invoice.status];
              return (
                <TableRow
                  key={invoice.id}
                  className="hover:bg-muted/30 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TableCell className="font-mono font-medium">
                    {invoice.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {invoice.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{invoice.patientName}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {invoice.services.join(", ")}
                    </span>
                  </TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell className="text-right font-semibold">
                    ${invoice.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`capitalize gap-1 ${statusStyles[invoice.status]}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      {invoice.status === "pending" && (
                        <Button variant="ghost" size="sm" className="text-primary">
                          <CreditCard className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Billing;
