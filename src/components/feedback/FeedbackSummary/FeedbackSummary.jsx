import styles from "./FeedbackSummary.module.css";
import {
  FiSmile,
  FiMeh,
  FiFrown,
  FiStar,
} from "react-icons/fi";

function FeedbackSummary() {
  const stats = [
    {
      title: "Positive",
      value: 29,
      subtitle: "Positive feedback",
      icon: <FiSmile />,
      color: "#16A34A",
      bg: "#DCFCE7",
    },
    {
      title: "Neutral",
      value: 12,
      subtitle: "Needs attention",
      icon: <FiMeh />,
      color: "#D97706",
      bg: "#FEF3C7",
    },
    {
      title: "Negative",
      value: 6,
      subtitle: "Reported issues",
      icon: <FiFrown />,
      color: "#DC2626",
      bg: "#FEE2E2",
    },
    {
      title: "Avg Rating",
      value: "4.3",
      subtitle: "Overall rating",
      icon: <FiStar />,
      color: "#2563EB",
      bg: "#DBEAFE",
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

export default FeedbackSummary;