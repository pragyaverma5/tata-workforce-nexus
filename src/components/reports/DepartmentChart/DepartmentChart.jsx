import styles from "./DepartmentChart.module.css";

import { departmentDistribution } from "../../../data/departmentDistribution";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#005BAC",
  "#3B82F6",
  "#16A34A",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function DepartmentChart() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Department Distribution</h3>

        <span>Employees</span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>
          <Pie
            data={departmentDistribution}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={105}
            paddingAngle={3}
            dataKey="value"
          >
            {departmentDistribution.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={40}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DepartmentChart;