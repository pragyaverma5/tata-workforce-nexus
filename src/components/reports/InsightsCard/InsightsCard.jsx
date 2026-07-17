import styles from "./InsightsCard.module.css";

import {
  FiTrendingUp,
  FiTrendingDown,
  FiCheckCircle,
  FiAlertCircle,
  FiUsers,
} from "react-icons/fi";

const insights = [
  {
    icon: <FiTrendingUp />,
    title: "Attendance Increased",
    description: "Attendance improved by 4.2% compared to last month.",
    type: "positive",
  },
  {
    icon: <FiUsers />,
    title: "Best Performing Department",
    description: "Manufacturing recorded the highest attendance (96%).",
    type: "primary",
  },
  {
    icon: <FiAlertCircle />,
    title: "Pending Leave Requests",
    description: "HR currently has 8 leave requests awaiting approval.",
    type: "warning",
  },
  {
    icon: <FiCheckCircle />,
    title: "Employee Satisfaction",
    description: "Overall employee satisfaction remains above 4.8 / 5.",
    type: "success",
  },
  {
    icon: <FiTrendingDown />,
    title: "Sales Department",
    description: "Attendance decreased by 2% this week.",
    type: "danger",
  },
];

function InsightsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Workforce Insights</h3>
        <span>Live Summary</span>
      </div>

      <div className={styles.list}>
        {insights.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              className={`${styles.icon} ${styles[item.type]}`}
            >
              {item.icon}
            </div>

            <div className={styles.content}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightsCard;