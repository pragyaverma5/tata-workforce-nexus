import {
  FiFileText,
  FiTrendingUp,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

export const reportStats = [
  {
    title: "Total Reports",
    value: "128",
    subtitle: "Generated this month",
    icon: FiFileText,
    color: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    title: "Avg Attendance",
    value: "94.8%",
    subtitle: "Across all departments",
    icon: FiTrendingUp,
    color: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    title: "Leave Requests",
    value: "37",
    subtitle: "Pending & approved",
    icon: FiCalendar,
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    title: "Employee Satisfaction",
    value: "4.8",
    subtitle: "Average feedback rating",
    icon: FiStar,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
];