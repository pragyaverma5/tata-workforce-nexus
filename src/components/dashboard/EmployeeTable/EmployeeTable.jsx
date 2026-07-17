import styles from "./EmployeeTable.module.css";

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import {
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function EmployeeTable({ employees }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Workforce Directory</h3>
        <button>View All →</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Department</th>
            <th>Join Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>

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

              <td>{employee.joinDate}</td>

              <td>
                <span
                  className={`${styles.badge} ${styles[
                    employee.status
                      .replace(/\s+/g, "")
                      .toLowerCase()
                    ]
                    }`}
                >
                  {employee.status}
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
                  <MenuItem>
                    <FiEye /> View
                  </MenuItem>

                  <MenuItem>
                    <FiEdit2 /> Edit
                  </MenuItem>

                  <MenuItem className={styles.deleteItem}>
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

export default EmployeeTable;