import styles from "./LeaveChart.module.css";

import { leaveChartData } from "../../../data/leaveChartData";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function LeaveChart() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Monthly Leave Requests</h3>

        <span>Last 6 Months</span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={leaveChartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="leaves"
            fill="#005BAC"
            radius={[8, 8, 0, 0]}
            barSize={80}
            barCategoryGap="30%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LeaveChart;