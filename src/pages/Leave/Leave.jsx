import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import styles from "./Leave.module.css";
import { leaveRecords } from "../../data/leaveRecords";

import LeaveSummary from "../../components/leave/LeaveSummary/LeaveSummary";
import LeaveToolbar from "../../components/leave/LeaveToolbar/LeaveToolbar";
import LeaveTable from "../../components/leave/LeaveTable/LeaveTable";

function Leave() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All Departments");
    const [leaveType, setLeaveType] = useState("All Leave Types");
    const [status, setStatus] = useState("All Status");

    const [leaves, setLeaves] = useState(leaveRecords);

    const handleStatusChange = (record, newStatus) => {
        setLeaves((prev) =>
            prev.map((leave) =>
                leave.id === record.id
                    ? {
                        ...leave,
                        leaveStatus: newStatus,
                    }
                    : leave
            )
        );
    };
    const filteredLeaves = leaves.filter((employee) => {
        const matchesSearch =
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.id.toLowerCase().includes(search.toLowerCase()) ||
            employee.designation.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
            department === "All Departments" ||
            employee.department === department;

        const matchesLeaveType =
            leaveType === "All Leave Types" ||
            employee.leaveType === leaveType;

        const matchesStatus =
            status === "All Status" ||
            employee.leaveStatus === status;

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesLeaveType &&
            matchesStatus
        );
    });

    return (
        <DashboardLayout>
            <div className={styles.pageHeader}>
                <div>
                    <h1>Leave Management</h1>
                    <p>
                        Manage leave requests, approvals and workforce availability.
                    </p>
                </div>
            </div>

            <LeaveSummary />

            <LeaveToolbar
                search={search}
                setSearch={setSearch}
                department={department}
                setDepartment={setDepartment}
                leaveType={leaveType}
                setLeaveType={setLeaveType}
                status={status}
                setStatus={setStatus}
            />

            <LeaveTable
                leaves={filteredLeaves}
                onStatusChange={handleStatusChange}
            />
        </DashboardLayout>
    );
}

export default Leave;