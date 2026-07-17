import { employeeData } from "./employeeData";

const leaveTypes = [
  "Casual Leave",
  "Sick Leave",
  "Privilege Leave",
  "Casual Leave",
  "Work From Home",
];

const fromDates = [
  "10 Jul 2026",
  "12 Jul 2026",
  "15 Jul 2026",
  "18 Jul 2026",
  "20 Jul 2026",
];

const toDates = [
  "11 Jul 2026",
  "13 Jul 2026",
  "17 Jul 2026",
  "20 Jul 2026",
  "21 Jul 2026",
];

const totalDays = [
  "2 Days",
  "2 Days",
  "3 Days",
  "3 Days",
  "1 Day",
];

export const leaveRecords = employeeData.map((employee, index) => {
  let leaveStatus = "Approved";

  if (index === 2 || index === 8 || index === 18) {
    leaveStatus = "Pending";
  } else if (index === 5 || index === 14) {
    leaveStatus = "Rejected";
  }

  return {
    ...employee,

    leaveType: leaveTypes[index % leaveTypes.length],

    from: fromDates[index % fromDates.length],

    to: toDates[index % toDates.length],

    days: totalDays[index % totalDays.length],

    leaveStatus,
  };
});