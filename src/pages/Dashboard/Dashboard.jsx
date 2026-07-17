import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard/StatCard";
import { getDashboardStats } from "../../data/dashboardStats";
import styles from "./Dashboard.module.css";
import AttendanceChart from "../../components/dashboard/AttendanceChart/AttendanceChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart/DepartmentChart";
import PendingLeaveTable from "../../components/dashboard/PendingLeaveTable/PendingLeaveTable";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";

function Dashboard() {
  const dashboardStats = getDashboardStats();
  return (
    <DashboardLayout>
      <div className={styles.overviewCard}>
        <div className={styles.overviewHeader}>
          <div>
            <h2>Overview</h2>
            <p>Today's workforce summary</p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {dashboardStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      <div className={styles.chartSection}>
        <AttendanceChart />
        <DepartmentChart />
      </div>
      <div className={styles.bottomSection}>
        <PendingLeaveTable />
        <QuickActions />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;