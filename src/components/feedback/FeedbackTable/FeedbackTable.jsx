import styles from "./FeedbackTable.module.css";

import {
  FiMoreVertical,
  FiEye,
  FiCheck,
  FiRefreshCw,
  FiTrash2,
} from "react-icons/fi";

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

function FeedbackTable({
  feedback,
  onStatusChange,
  onDelete,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Employee Feedback</h3>
        <button>View All →</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {feedback.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.employeeInfo}>
                  <div className={styles.avatar}>
                    {employee.initials}
                  </div>

                  <div>
                    <h4>{employee.name}</h4>
                    <span>{employee.designation}</span>
                  </div>
                </div>
              </td>

              <td>{employee.category}</td>

              <td>{"⭐".repeat(employee.rating)}</td>

              <td>{employee.date}</td>

              <td>
                <span
                  className={`${styles.badge} ${
                    styles[
                      employee.feedbackStatus
                        .replace(/\s+/g, "")
                        .toLowerCase()
                    ]
                  }`}
                >
                  {employee.feedbackStatus}
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
                  <MenuItem
                    onClick={() =>
                      alert(employee.feedback || "Feedback details coming soon.")
                    }
                  >
                    <FiEye /> View
                  </MenuItem>

                  {employee.feedbackStatus !== "Resolved" ? (
                    <MenuItem
                      className={styles.resolveItem}
                      onClick={() =>
                        onStatusChange(employee, "Resolved")
                      }
                    >
                      <FiCheck /> Mark Resolved
                    </MenuItem>
                  ) : (
                    <MenuItem
                      className={styles.pendingItem}
                      onClick={() =>
                        onStatusChange(employee, "Pending")
                      }
                    >
                      <FiRefreshCw /> Reopen
                    </MenuItem>
                  )}

                  <MenuItem
                    className={styles.deleteItem}
                    onClick={() => onDelete(employee)}
                  >
                    <FiTrash2 /> Delete
                  </MenuItem>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;