import styles from "./QuickActions.module.css";
import { useNavigate } from "react-router-dom";

import {
  FiUserPlus,
  FiCalendar,
  FiClipboard,
  FiBarChart2,
} from "react-icons/fi";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <FiUserPlus />,
      title: "Add Employee",
      description: "Create a new employee profile",
      path: "/employees",
    },
    {
      icon: <FiCalendar />,
      title: "Mark Attendance",
      description: "Record today's attendance",
      path: "/attendance",
    },
    {
      icon: <FiClipboard />,
      title: "Review Leave",
      description: "Approve pending requests",
      path: "/leave",
    },
    {
      icon: <FiBarChart2 />,
      title: "View Reports",
      description: "Open workforce analytics",
      path: "/reports",
    },
  ];

  return (
    <div className={styles.card}>
      <h3>Quick Actions</h3>

      <div className={styles.list}>
        {actions.map((action) => (
          <button
            key={action.title}
            className={styles.action}
            onClick={() => navigate(action.path)}
          >
            <div className={styles.icon}>
              {action.icon}
            </div>

            <div>
              <h4>{action.title}</h4>
              <p>{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;