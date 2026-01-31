import { useState } from "react";
import { Search, Plus, Package, AlertTriangle, TrendingDown, CheckCircle, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  sku: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unit: string;
  supplier: string;
  lastRestocked: string;
  expiryDate?: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const inventory: InventoryItem[] = [
  {
    id: "MED001",
    name: "Paracetamol 500mg",
    category: "Medication",
    sku: "PCM-500",
    currentStock: 45,
    minStock: 100,
    maxStock: 500,
    unit: "Tablets",
    supplier: "PharmaCorp",
    lastRestocked: "2024-01-10",
    expiryDate: "2025-06-15",
    status: "low-stock",
  },
  {
    id: "MED002",
    name: "Amoxicillin 250mg",
    category: "Medication",
    sku: "AMX-250",
    currentStock: 320,
    minStock: 150,
    maxStock: 600,
    unit: "Capsules",
    supplier: "MediSupply",
    lastRestocked: "2024-01-12",
    expiryDate: "2024-12-20",
    status: "in-stock",
  },
  {
    id: "SUP001",
    name: "Surgical Gloves (Medium)",
    category: "Supplies",
    sku: "SG-M",
    currentStock: 0,
    minStock: 50,
    maxStock: 200,
    unit: "Boxes",
    supplier: "MedEquip Ltd",
    lastRestocked: "2024-01-05",
    status: "out-of-stock",
  },
  {
    id: "MED003",
    name: "Ibuprofen 400mg",
    category: "Medication",
    sku: "IBU-400",
    currentStock: 280,
    minStock: 100,
    maxStock: 400,
    unit: "Tablets",
    supplier: "PharmaCorp",
    lastRestocked: "2024-01-14",
    expiryDate: "2025-03-10",
    status: "in-stock",
  },
  {
    id: "SUP002",
    name: "Syringes 5ml",
    category: "Supplies",
    sku: "SYR-5",
    currentStock: 75,
    minStock: 100,
    maxStock: 300,
    unit: "Pieces",
    supplier: "MedEquip Ltd",
    lastRestocked: "2024-01-08",
    status: "low-stock",
  },
];

const statusStyles = {
  "in-stock": "bg-success/10 text-success border-success/20",
  "low-stock": "bg-warning/10 text-warning border-warning/20",
  "out-of-stock": "bg-destructive/10 text-destructive border-destructive/20",
};

const statusLabels = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
};

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredInventory = inventory.filter(
    (item) =>
      (categoryFilter === "all" || item.category.toLowerCase() === categoryFilter) &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalItems = inventory.length;
  const lowStockItems = inventory.filter((i) => i.status === "low-stock").length;
  const outOfStockItems = inventory.filter((i) => i.status === "out-of-stock").length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Inventory Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Track medicine and supplies stock levels
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
          <Button className="gap-2">
            <Package className="h-4 w-4" />
            Restock Order
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Items</p>
              <p className="text-2xl font-display font-bold">{totalItems}</p>
            </div>
            <div className="p-3 rounded-xl bg-primary/10">
              <Package className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">In Stock</p>
              <p className="text-2xl font-display font-bold text-success">
                {totalItems - lowStockItems - outOfStockItems}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-success/10">
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Low Stock</p>
              <p className="text-2xl font-display font-bold text-warning">
                {lowStockItems}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-warning/10">
              <TrendingDown className="h-5 w-5 text-warning" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Out of Stock</p>
              <p className="text-2xl font-display font-bold text-destructive">
                {outOfStockItems}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
          </div>
        </div>
      </div>

      {/* Low Stock Alert */}
      {(lowStockItems > 0 || outOfStockItems > 0) && (
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground">Inventory Alert</h4>
            <p className="text-sm text-muted-foreground mt-0.5">
              {lowStockItems} item(s) are running low and {outOfStockItems} item(s) are out of stock.
              Consider placing a restock order.
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="medical-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="medication">Medication</SelectItem>
                <SelectItem value="supplies">Supplies</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="medical-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-semibold">Item</TableHead>
              <TableHead className="font-semibold">SKU</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">Stock Level</TableHead>
              <TableHead className="font-semibold">Supplier</TableHead>
              <TableHead className="font-semibold">Expiry</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.map((item, index) => {
              const stockPercentage = Math.min((item.currentStock / item.maxStock) * 100, 100);
              return (
                <TableRow
                  key={item.id}
                  className="hover:bg-muted/30 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.id}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1.5 min-w-[140px]">
                      <div className="flex justify-between text-sm">
                        <span>
                          {item.currentStock} / {item.maxStock}
                        </span>
                        <span className="text-muted-foreground">{item.unit}</span>
                      </div>
                      <Progress
                        value={stockPercentage}
                        className={`h-2 ${
                          item.status === "out-of-stock"
                            ? "[&>div]:bg-destructive"
                            : item.status === "low-stock"
                            ? "[&>div]:bg-warning"
                            : "[&>div]:bg-success"
                        }`}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.supplier}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.expiryDate || "-"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`capitalize ${statusStyles[item.status]}`}
                    >
                      {statusLabels[item.status]}
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Item</DropdownMenuItem>
                        <DropdownMenuItem>Restock</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default Inventory;
