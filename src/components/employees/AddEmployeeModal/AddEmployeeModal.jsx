import { useState } from "react";
import styles from "./AddEmployeeModal.module.css";

function AddEmployeeModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    department: "",
    designation: "",
    status: "Present",
    joinDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (
      !formData.name ||
      !formData.id ||
      !formData.department ||
      !formData.designation ||
      !formData.joinDate
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newEmployee = {
      ...formData,
      initials: formData.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(),
    };

    onSave(newEmployee);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Add Employee</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="id"
            placeholder="Employee ID"
            value={formData.id}
            onChange={handleChange}
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
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

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Present</option>
            <option>Pending</option>
            <option>On Leave</option>
          </select>

          <input
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
          />
        </div>

        <div className={styles.footer}>
          <button
            className={styles.cancel}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className={styles.save}
            onClick={handleSave}
          >
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeModal;