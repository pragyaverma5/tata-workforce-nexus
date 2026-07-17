import styles from "./LeaveSummary.module.css";
import {
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiCalendar,
} from "react-icons/fi";

function LeaveSummary() {
  const stats = [
    {
      title: "Pending",
      value: 12,
      subtitle: "Awaiting approval",
      icon: <FiClock />,
      color: "#EA580C",
      bg: "#FFEDD5",
    },
    {
      title: "Approved",
      value: 28,
      subtitle: "Approved requests",
      icon: <FiCheckCircle />,
      color: "#16A34A",
      bg: "#DCFCE7",
    },
    {
      title: "Rejected",
      value: 5,
      subtitle: "Rejected requests",
      icon: <FiXCircle />,
      color: "#DC2626",
      bg: "#FEE2E2",
    },
    {
      title: "On Leave",
      value: 15,
      subtitle: "Employees on leave",
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

export default LeaveSummary;