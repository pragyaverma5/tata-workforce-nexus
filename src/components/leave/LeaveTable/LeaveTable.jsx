import styles from "./LeaveTable.module.css";

import {
  FiMoreVertical,
  FiCheck,
  FiX,
} from "react-icons/fi";

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
function LeaveTable({
  leaves,
  onStatusChange,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Leave Requests</h3>
        <button>View All →</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>
                <div className={styles.employeeInfo}>
                  <div className={styles.avatar}>
                    {leave.initials}
                  </div>

                  <div>
                    <h4>{leave.name}</h4>
                    <span>{leave.designation}</span>
                  </div>
                </div>
              </td>

              <td>{leave.leaveType}</td>

              <td>{leave.from}</td>

              <td>{leave.to}</td>

              <td>{leave.days}</td>

              <td>
                <span
                  className={`${styles.badge} ${styles[
                    leave.leaveStatus
                      .replace(/\s+/g, "")
                      .toLowerCase()
                  ]
                    }`}
                >
                  {leave.leaveStatus}
                </span>
              </td>

              <td>
                <Menu
                  menuButton={
                    <button className={styles.actionBtn}>
                      <FiMoreVertical />
                    </button>
                  }
                >
                  {leave.leaveStatus !== "Pending" && (
                    <MenuItem
                      onClick={() =>
                        onStatusChange(leave, "Pending")
                      }
                    >
                      ↩ Mark Pending
                    </MenuItem>
                  )}

                  {leave.leaveStatus !== "Approved" && (
                    <MenuItem
                      className={styles.approveItem}
                      onClick={() =>
                        onStatusChange(leave, "Approved")
                      }
                    >
                      <FiCheck /> Approve
                    </MenuItem>
                  )}

                  {leave.leaveStatus !== "Rejected" && (
                    <MenuItem
                      className={styles.rejectItem}
                      onClick={() =>
                        onStatusChange(leave, "Rejected")
                      }
                    >
                      <FiX /> Reject
                    </MenuItem>
                  )}
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveTable;