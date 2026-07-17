import styles from "./AttendanceToolbar.module.css";

function AttendanceToolbar({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div className={styles.toolbar}>
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option>All Departments</option>
        <option>Manufacturing</option>
        <option>Engineering</option>
        <option>Sales</option>
        <option>Finance</option>
        <option>HR</option>
        <option>IT</option>
        <option>Marketing</option>
        <option>Support</option>
        <option>Business</option>
        <option>Data</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All Status</option>
        <option>Present</option>
        <option>Late</option>
        <option>Absent</option>
        <option>On Leave</option>
      </select>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button className={styles.exportBtn}>
        Export
      </button>
    </div>
  );
}

export default AttendanceToolbar;