import styles from "./TopDepartments.module.css";

const departments = [
  {
    name: "Manufacturing",
    score: 96,
  },
  {
    name: "Engineering",
    score: 94,
  },
  {
    name: "IT",
    score: 92,
  },
  {
    name: "HR",
    score: 90,
  },
  {
    name: "Finance",
    score: 88,
  },
];

function TopDepartments() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Top Performing Departments</h3>
        <span>This Month</span>
      </div>

      <div className={styles.list}>
        {departments.map((dept) => (
          <div key={dept.name} className={styles.item}>
            <div className={styles.top}>
              <span>{dept.name}</span>
              <strong>{dept.score}%</strong>
            </div>

            <div className={styles.progress}>
              <div
                className={styles.fill}
                style={{ width: `${dept.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDepartments;