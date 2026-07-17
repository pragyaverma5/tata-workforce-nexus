import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { attendanceData } from "../../../data/attendanceChartData";
import styles from "./AttendanceChart.module.css";

function AttendanceChart() {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>Attendance Overview</h3>
            </div>

            <ResponsiveContainer width="100%" height={310}>
                <LineChart data={attendanceData}>
                    <CartesianGrid vertical={false}
                        stroke="#ECECEC" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[5, 40]} />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="#005BAC"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AttendanceChart;