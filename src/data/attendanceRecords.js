import { employeeData } from "./employeeData";

const dates = [];

for (let i = 0; i < 7; i++) {
  const date = new Date();

  date.setDate(date.getDate() - i);

  dates.push(date.toISOString().split("T")[0]);
}

const statusPattern = [
  "Present",
  "Present",
  "Present",
  "Late",
  "Present",
  "Absent",
  "On Leave",
];

export const attendanceRecords = [];

employeeData.forEach((employee, employeeIndex) => {
  dates.forEach((date, dateIndex) => {
    const attendanceStatus =
      statusPattern[
        (employeeIndex + dateIndex) % statusPattern.length
      ];

    let checkIn = "--";
    let checkOut = "--";
    let hours = "--";

    if (attendanceStatus === "Present") {
      checkIn = ["08:52 AM", "08:58 AM", "09:01 AM", "09:06 AM"][
        employeeIndex % 4
      ];

      checkOut = ["05:58 PM", "06:03 PM", "06:08 PM", "06:15 PM"][
        employeeIndex % 4
      ];

      hours = ["9h 06m", "9h 12m", "9h 02m", "8h 57m"][
        employeeIndex % 4
      ];
    }

    if (attendanceStatus === "Late") {
      checkIn = ["09:22 AM", "09:35 AM"][
        employeeIndex % 2
      ];

      checkOut = ["06:28 PM", "06:42 PM"][
        employeeIndex % 2
      ];

      hours = ["8h 20m", "8h 05m"][
        employeeIndex % 2
      ];
    }

    attendanceRecords.push({
      ...employee,
      date,
      attendanceStatus,
      checkIn,
      checkOut,
      hours,
    });
  });
});