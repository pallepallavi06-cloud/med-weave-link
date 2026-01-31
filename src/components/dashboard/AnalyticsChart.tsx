import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", patients: 120, appointments: 98, revenue: 45000 },
  { month: "Feb", patients: 145, appointments: 125, revenue: 52000 },
  { month: "Mar", patients: 162, appointments: 142, revenue: 58000 },
  { month: "Apr", patients: 178, appointments: 156, revenue: 62000 },
  { month: "May", patients: 195, appointments: 178, revenue: 71000 },
  { month: "Jun", patients: 210, appointments: 195, revenue: 78000 },
  { month: "Jul", patients: 225, appointments: 208, revenue: 82000 },
];

export const AnalyticsChart = () => {
  return (
    <div className="medical-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-display font-semibold">Patient & Revenue Trends</h3>
        <p className="text-sm text-muted-foreground">Monthly performance overview</p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(187, 75%, 35%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(187, 75%, 35%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(158, 64%, 40%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(158, 64%, 40%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 25%, 88%)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(210, 25%, 88%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px hsl(210 40% 11% / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="patients"
              stroke="hsl(187, 75%, 35%)"
              strokeWidth={2}
              fill="url(#colorPatients)"
              name="Patients"
            />
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="hsl(158, 64%, 40%)"
              strokeWidth={2}
              fill="url(#colorAppointments)"
              name="Appointments"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Patients</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Appointments</span>
        </div>
      </div>
    </div>
  );
};
