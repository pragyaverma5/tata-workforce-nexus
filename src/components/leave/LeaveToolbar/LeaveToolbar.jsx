import styles from "./LeaveToolbar.module.css";

function LeaveToolbar({
  search,
  setSearch,
  department,
  setDepartment,
  leaveType,
  setLeaveType,
  status,
  setStatus,
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
        value={leaveType}
        onChange={(e) => setLeaveType(e.target.value)}
      >
        <option>All Leave Types</option>
        <option>Casual Leave</option>
        <option>Sick Leave</option>
        <option>Privilege Leave</option>
        <option>Maternity Leave</option>
        <option>Paternity Leave</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All Status</option>
        <option>Pending</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>

      <button className={styles.exportBtn}>
        Export
      </button>
    </div>
  );
}

export default LeaveToolbar;