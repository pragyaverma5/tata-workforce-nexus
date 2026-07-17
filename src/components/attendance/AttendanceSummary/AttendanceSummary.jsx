import styles from "./AttendanceSummary.module.css";
import {
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiCalendar,
} from "react-icons/fi";

function AttendanceSummary({ attendance }) {
  const present = attendance.filter(
    (e) => e.attendanceStatus === "Present"
  ).length;

  const late = attendance.filter(
    (e) => e.attendanceStatus === "Late"
  ).length;

  const absent = attendance.filter(
    (e) => e.attendanceStatus === "Absent"
  ).length;

  const onLeave = attendance.filter(
    (e) => e.attendanceStatus === "On Leave"
  ).length;

  const stats = [
    {
      title: "Present",
      value: present,
      subtitle: "Checked in today",
      icon: <FiCheckCircle />,
      color: "#16A34A",
      bg: "#DCFCE7",
    },
    {
      title: "Late",
      value: late,
      subtitle: "Arrived late",
      icon: <FiClock />,
      color: "#EA580C",
      bg: "#FFEDD5",
    },
    {
      title: "Absent",
      value: absent,
      subtitle: "No check-in",
      icon: <FiXCircle />,
      color: "#DC2626",
      bg: "#FEE2E2",
    },
    {
      title: "On Leave",
      value: onLeave,
      subtitle: "Approved leave",
      icon: <FiCalendar />,
      color: "#7C3AED",
      bg: "#EDE9FE",
    },
  ];

  return (
    <div className={styles.grid}>
      {stats.map((item) => (
        <div key={item.title} className={styles.card}>
          <div
            className={styles.icon}
            style={{
              background: item.bg,
              color: item.color,
            }}
          >
            {item.icon}
          </div>

          <div>
            <span>{item.title}</span>
            <h2>{item.value}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AttendanceSummary;