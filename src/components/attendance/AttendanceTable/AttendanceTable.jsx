import styles from "./AttendanceTable.module.css";

import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

function AttendanceTable({
  attendance,
  onEdit,
  onDelete,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Attendance History</h3>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Hours</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((employee) => (
            <tr key={`${employee.id}-${employee.date}`}>
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

              <td>
                <span
                  className={`${styles.department} ${styles[
                    employee.department
                      .replace(/\s+/g, "")
                      .toLowerCase()
                  ]
                    }`}
                >
                  {employee.department}
                </span>
              </td>
              <td>{employee.date}</td>
              <td>{employee.checkIn}</td>

              <td>{employee.checkOut}</td>

              <td>{employee.hours}</td>

              <td>
                <span
                  className={`${styles.badge} ${styles[
                    employee.attendanceStatus
                      .replace(/\s+/g, "")
                      .toLowerCase()
                  ]
                    }`}
                >
                  {employee.attendanceStatus}
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
                    onClick={() => onEdit(employee)}
                  >
                    <FiEdit2 /> Edit Attendance
                  </MenuItem>

                  <MenuItem
                    className={styles.deleteItem}
                    onClick={() => onDelete(employee)}
                  >
                    <FiTrash2 /> Delete Record
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

export default AttendanceTable;