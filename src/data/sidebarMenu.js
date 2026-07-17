import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiClipboard,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: FiHome,
    path: "/dashboard",
  },
  {
    label: "Employees",
    icon: FiUsers,
    path: "/employees",
  },
  {
    label: "Attendance",
    icon: FiCalendar,
    path: "/attendance",
  },
  {
    label: "Leave Management",
    icon: FiClipboard,
    path: "/leave",
  },
  {
    label: "Feedback",
    icon: FiMessageSquare,
    path: "/feedback",
  },
  {
    label: "Reports",
    icon: FiBarChart2,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: FiSettings,
    path: "/settings",
  },


  {
    label: "Logout",
    icon: FiLogOut,
    action: "logout",
  },
];