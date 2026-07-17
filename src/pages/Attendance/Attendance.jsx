import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import styles from "./Attendance.module.css";
import MarkAttendanceModal from "../../components/attendance/MarkAttendanceModal/MarkAttendanceModal";
import AttendanceSummary from "../../components/attendance/AttendanceSummary/AttendanceSummary";
import AttendanceToolbar from "../../components/attendance/AttendanceToolbar/AttendanceToolbar";
import AttendanceTable from "../../components/attendance/AttendanceTable/AttendanceTable";

import { attendanceRecords } from "../../data/attendanceRecords";

function Attendance() {
  const today = new Date().toISOString().split("T")[0];

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");
  const [selectedDate, setSelectedDate] = useState(today);
  const [attendance, setAttendance] = useState(attendanceRecords);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleMarkAttendance = (record) => {
    if (editMode) {
      setAttendance((prev) =>
        prev.map((item) =>
          item.id === record.id && item.date === record.date
            ? record
            : item
        )
      );
    } else {
      setAttendance((prev) => [record, ...prev]);
    }

    setShowModal(false);
    setSelectedRecord(null);
    setEditMode(false);
  };
  const handleDelete = (record) => {
    if (!window.confirm("Delete this attendance record?")) return;

    setAttendance((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === record.id &&
            item.date === record.date
          )
      )
    );
  };

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setEditMode(true);
    setShowModal(true);
  };
  const filteredAttendance = attendance.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.designation.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All Departments" ||
      employee.department === department;

    const matchesStatus =
      status === "All Status" ||
      employee.attendanceStatus === status;

    const matchesDate =
      selectedDate === "" ||
      employee.date === selectedDate;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus &&
      matchesDate
    );
  }
  );

  return (
    <DashboardLayout>
      <div className={styles.pageHeader}>
        <div>
          <h1>Attendance Management</h1>
          <p>
            Monitor attendance, working hours and daily workforce availability.
          </p>
        </div>

        <button
          className={styles.markBtn}
          onClick={() => setShowModal(true)}
        >
          + Mark Attendance
        </button>
      </div>

      <AttendanceSummary attendance={filteredAttendance} />

      <AttendanceToolbar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <p className={styles.totalEmployees}>
        Showing <strong>{filteredAttendance.length}</strong> attendance records
      </p>

      <AttendanceTable
        attendance={filteredAttendance}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showModal && (
        <MarkAttendanceModal
          record={selectedRecord}
          editMode={editMode}
          onClose={() => {
            setShowModal(false);
            setSelectedRecord(null);
            setEditMode(false);
          }}
          onSave={handleMarkAttendance}
        />
      )}

    </DashboardLayout>
  );
}

export default Attendance;