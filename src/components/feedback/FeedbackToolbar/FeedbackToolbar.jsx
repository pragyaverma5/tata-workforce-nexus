import styles from "./FeedbackToolbar.module.css";

function FeedbackToolbar({
  search,
  setSearch,
  department,
  setDepartment,
  category,
  setCategory,
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
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All Categories</option>
        <option>Work Environment</option>
        <option>Facilities</option>
        <option>Management</option>
        <option>Safety</option>
        <option>Salary</option>
        <option>Suggestions</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All Status</option>
        <option>Reviewed</option>
        <option>Pending</option>
        <option>Resolved</option>
      </select>

      <button className={styles.exportBtn}>
        Export
      </button>
    </div>
  );
}

export default FeedbackToolbar;