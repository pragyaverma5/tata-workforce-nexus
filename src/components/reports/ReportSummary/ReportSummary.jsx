import styles from "./ReportSummary.module.css";
import { reportStats } from "../../../data/reportStats";

function ReportSummary() {
  return (
    <div className={styles.grid}>
      {reportStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={styles.card}
          >
            <div
              className={styles.icon}
              style={{
                background: item.bg,
                color: item.color,
              }}
            >
              <Icon />
            </div>

            <div className={styles.content}>
              <span>{item.title}</span>

              <h2>{item.value}</h2>

              <p>{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReportSummary;