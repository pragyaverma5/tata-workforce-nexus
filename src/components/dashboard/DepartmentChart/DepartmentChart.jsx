import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { departmentData } from "../../../data/departmentData";
import styles from "./DepartmentChart.module.css";

const COLORS = [
  "#005BAC",
  "#3B82F6",
  "#8B5CF6",
  "#F59E0B",
  "#16A34A",
  "#CBD5E1",
];

function DepartmentChart() {
  return (
    <div className={styles.card}>
      <h3>Employees by Department</h3>

      <div className={styles.chartContainer}>

        <ResponsiveContainer width="60%" height={280}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.legend}>
          {departmentData.map((item, index) => (
            <div key={item.name} className={styles.legendItem}>

              <span
                className={styles.dot}
                style={{
                  background: COLORS[index],
                }}
              />

              <span>{item.name}</span>

              <strong>{item.value}</strong>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DepartmentChart;