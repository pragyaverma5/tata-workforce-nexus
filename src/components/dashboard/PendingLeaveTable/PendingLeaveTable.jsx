import { NavLink } from "react-router-dom";
import styles from "./PendingLeaveTable.module.css";

import { leaveRecords } from "../../../data/leaveRecords";

function PendingLeaveTable() {
  const pendingLeaves = leaveRecords
    .filter((record) => record.leaveStatus === "Pending")
    .slice(0, 5);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Pending Leave Requests</h3>

        <NavLink to="/leave">
          View All →
        </NavLink>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Days</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {pendingLeaves.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.employee}>
                  <div className={styles.avatar}>
                    {employee.initials}
                  </div>

                  <div>
                    <h4>{employee.name}</h4>
                    <span>{employee.department}</span>
                  </div>
                </div>
              </td>

              <td>{employee.leaveType}</td>

              <td>{employee.days}</td>

              <td>
                <span className={styles.pending}>
                  {employee.leaveStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingLeaveTable;