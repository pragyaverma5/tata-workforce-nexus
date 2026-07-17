import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import EmployeeTable from "../../components/dashboard/EmployeeTable/EmployeeTable";
import { employeeData } from "../../data/employeeData";
import styles from "./Employees.module.css";
import AddEmployeeModal from "../../components/employees/AddEmployeeModal/AddEmployeeModal";

function Employees() {
    const [employees, setEmployees] = useState(employeeData);

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All Departments");
    const [status, setStatus] = useState("All Status");
    const [showModal, setShowModal] = useState(false);

    const handleAddEmployee = (newEmployee) => {
        setEmployees((prev) => [newEmployee, ...prev]);
        setShowModal(false);
    };

    const filteredEmployees = employees.filter((employee) => {

        const matchesSearch =
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.id.toLowerCase().includes(search.toLowerCase()) ||
            employee.designation.toLowerCase().includes(search.toLowerCase()) ||
            employee.department.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
            department === "All Departments" ||
            employee.department === department;

        const matchesStatus =
            status === "All Status" ||
            employee.status === status;

        return matchesSearch &&
            matchesDepartment &&
            matchesStatus;
    });

    return (
        <DashboardLayout>
            <div className={styles.pageHeader}>
                <div>
                    <h1>Employees</h1>
                    <p>Manage workforce across all departments.</p>
                </div>

                <button className={styles.addEmployee}
                    onClick={() => setShowModal(true)}>
                    + Add Employee
                </button>
            </div>

            <div className={styles.toolbar}>
                <input
                    type="text"
                    placeholder="Search employees..."
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
                    <option>Active</option>
                    <option>Probation</option>
                    <option>Inactive</option>
                </select>

                <button className={styles.exportBtn}>
                    Export
                </button>
            </div>

            <p className={styles.totalEmployees}>
                Showing <strong>{filteredEmployees.length}</strong> employees
            </p>

            <EmployeeTable employees={filteredEmployees} />
            {showModal && (
                <AddEmployeeModal
                    onClose={() => setShowModal(false)}
                    onSave={handleAddEmployee}
                />
            )}
        </DashboardLayout>
    );
}

export default Employees;