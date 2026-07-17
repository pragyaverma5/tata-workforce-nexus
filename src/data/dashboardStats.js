import {
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiClipboard,
  FiBriefcase,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

import { employeeData } from "./employeeData";
import { attendanceRecords } from "./attendanceRecords";
import { leaveRecords } from "./leaveRecords";

export function getDashboardStats() {
  const totalEmployees = employeeData.length;

  // Today's date in the same format as attendanceRecords
  const today = new Date().toISOString().split("T")[0];

  // Records for today only
  const todayAttendance = attendanceRecords.filter(
    (record) => record.date === today
  );

  const presentToday = todayAttendance.filter(
    (record) => record.attendanceStatus === "Present"
  ).length;


  const lateToday = todayAttendance.filter(
    (record) => record.attendanceStatus === "Late"
  ).length;

  const onLeaveToday = todayAttendance.filter(
    (record) => record.attendanceStatus === "On Leave"
  ).length;

  const pendingLeaves = leaveRecords.filter(
    (leave) => leave.leaveStatus === "Pending"
  ).length;

  const departments = new Set(
    employeeData.map((employee) => employee.department)
  ).size;

  const attendanceRate = Math.round(
    ((presentToday + lateToday) / totalEmployees) * 100
  );

  return [
    {
      title: "Total Employees",
      value: totalEmployees,
      subtitle: `${totalEmployees} registered employees`,
      color: "#005BAC",
      icon: FiUsers,
    },
    {
      title: "Present Today",
      value: presentToday,
      subtitle: `${attendanceRate}% attendance`,
      color: "#16A34A",
      icon: FiUserCheck,
    },
    
    {
      title: "Late Today",
      value: lateToday,
      subtitle: `${lateToday} late arrivals`,
      color: "#F59E0B",
      icon: FiClock,
    },
    {
      title: "Pending Leaves",
      value: pendingLeaves,
      subtitle: "Awaiting approval",
      color: "#f50be9",
      icon: FiClipboard,
    },
    {
      title: "Departments",
      value: departments,
      subtitle: "Active departments",
      color: "#7C3AED",
      icon: FiBriefcase,
    },
    {
      title: "Attendance Rate",
      value: `${attendanceRate}%`,
      subtitle: "Today's attendance",
      color: "#0EA5E9",
      icon: FiTrendingUp,
    },
  ];
}