import { useState } from "react";
import styles from "./MarkAttendanceModal.module.css";

import { employeeData } from "../../../data/employeeData";

function MarkAttendanceModal({ onClose, onSave }) {
  const today = new Date().toISOString().split("T")[0];

  const [employeeId, setEmployeeId] = useState(employeeData[0].id);
  const [attendanceStatus, setAttendanceStatus] = useState("Present");
  const [date, setDate] = useState(today);
  const [checkIn, setCheckIn] = useState("09:00");
  const [checkOut, setCheckOut] = useState("18:00");

  const calculateHours = () => {
    const start = new Date(`2000-01-01T${checkIn}`);
    const end = new Date(`2000-01-01T${checkOut}`);

    const diff = end - start;

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hrs}h ${mins}m`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = employeeData.find(
      (emp) => emp.id === employeeId
    );

    onSave({
      ...employee,
      date,
      attendanceStatus,
      checkIn:
        attendanceStatus === "Absent" ||
        attendanceStatus === "On Leave"
          ? "--"
          : checkIn,

      checkOut:
        attendanceStatus === "Absent" ||
        attendanceStatus === "On Leave"
          ? "--"
          : checkOut,

      hours:
        attendanceStatus === "Absent" ||
        attendanceStatus === "On Leave"
          ? "--"
          : calculateHours(),
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Mark Attendance</h2>

        <form onSubmit={handleSubmit}>

          <label>Employee</label>

          <select
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          >
            {employeeData.map((employee) => (
              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>
            ))}
          </select>

          <label>Status</label>

          <select
            value={attendanceStatus}
            onChange={(e) =>
              setAttendanceStatus(e.target.value)
            }
          >
            <option>Present</option>
            <option>Late</option>
            <option>Absent</option>
            <option>On Leave</option>
          </select>

          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Check In</label>

          <input
            type="time"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label>Check Out</label>

          <input
            type="time"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          <label>Total Hours</label>

          <input
            value={calculateHours()}
            readOnly
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.save}
            >
              Save Attendance
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default MarkAttendanceModal;