import styles from "./AttendanceChart.module.css";

import { attendanceTrend } from "../../../data/attendanceTrend";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function AttendanceChart() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Attendance Trend</h3>

        <span>This Week</span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={attendanceTrend}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            domain={[5, 35]}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#005BAC"
            strokeWidth={4}
            dot={{
              r: 6,
              fill: "#005BAC",
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;