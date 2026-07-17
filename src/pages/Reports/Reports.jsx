import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import styles from "./Reports.module.css";

import ReportSummary from "../../components/reports/ReportSummary/ReportSummary";
import AttendanceChart from "../../components/reports/AttendanceChart/AttendanceChart";
import DepartmentChart from "../../components/reports/DepartmentChart/DepartmentChart";
import LeaveChart from "../../components/reports/LeaveChart/LeaveChart";
import TopDepartments from "../../components/reports/TopDepartments/TopDepartments";
import InsightsCard from "../../components/reports/InsightsCard/InsightsCard";

function Reports() {
  return (
    <DashboardLayout>
      <div className={styles.pageHeader}>
        <div>
          <h1>Reports & Analytics</h1>
          <p>
            Monitor workforce performance with real-time analytics and insights.
          </p>
        </div>

        <button className={styles.exportBtn}>
          Export Report
        </button>
      </div>

      <ReportSummary />

      <div className={styles.topCharts}>
        <AttendanceChart />
        <DepartmentChart />
      </div>

      <LeaveChart />

      <div className={styles.bottomSection}>
        <TopDepartments />
        <InsightsCard />
      </div>
    </DashboardLayout>
  );
}

export default Reports;