// components/overview-chart.tsx
"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

// Data that matches the exact design pattern from the image
const chartData = [
  { date: "Sep 15", sales: 28000 },
  { date: "Sep 18", sales: 32000 },
  { date: "Sep 21", sales: 35000 },
  { date: "Sep 24", sales: 38000 },
  { date: "Sep 27", sales: 34000 },
  { date: "Sep 30", sales: 30000 },
  { date: "Oct 03", sales: 32000 },
  { date: "Oct 06", sales: 28000 },
  { date: "Oct 09", sales: 26000 },
  { date: "Oct 12", sales: 32000 },
  { date: "Oct 15", sales: 36000 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#3b82f6", // Blue color matching the design
  },
} satisfies ChartConfig;

export function OverviewChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          {/* Define a gradient for the area fill matching the design */}
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            stroke="#6b7280"
            fontSize={12}
            fontFamily="var(--font-geist-sans)"
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            interval={0}
          />
          <YAxis
            hide
            domain={['dataMin - 2000', 'dataMax + 2000']}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent 
                indicator="dot"
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, ' Sales']}
                labelFormatter={(label) => label}
              />
            }
          />
          <Area
            dataKey="sales"
            type="monotone"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#colorSales)"
            activeDot={{ 
              r: 4, 
              fill: "#3b82f6",
              stroke: "#ffffff",
              strokeWidth: 2
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}