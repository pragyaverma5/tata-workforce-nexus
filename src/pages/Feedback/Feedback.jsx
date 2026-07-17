import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import FeedbackSummary from "../../components/feedback/FeedbackSummary/FeedbackSummary";
import FeedbackToolbar from "../../components/feedback/FeedbackToolbar/FeedbackToolbar";
import FeedbackTable from "../../components/feedback/FeedbackTable/FeedbackTable";

import { feedbackRecords } from "../../data/feedbackRecords";

import styles from "./Feedback.module.css";

function Feedback() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const [feedback, setFeedback] = useState(feedbackRecords);

  const handleStatusChange = (record, newStatus) => {
    setFeedback((prev) =>
      prev.map((item) =>
        item.id === record.id
          ? {
            ...item,
            feedbackStatus: newStatus,
          }
          : item
      )
    );
  };

  const handleDelete = (record) => {
    if (!window.confirm("Delete this feedback?")) return;

    setFeedback((prev) =>
      prev.filter((item) => item.id !== record.id)
    );
  };
  const filteredFeedback = feedback.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.designation.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All Departments" ||
      employee.department === department;

    const matchesCategory =
      category === "All Categories" ||
      employee.category === category;

    const matchesStatus =
      status === "All Status" ||
      employee.feedbackStatus === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesCategory &&
      matchesStatus
    );
  });

  return (
    <DashboardLayout>
      <div className={styles.pageHeader}>
        <div>
          <h1>Feedback</h1>
          <p>
            Monitor employee feedback and workplace suggestions.
          </p>
        </div>
      </div>

      <FeedbackSummary feedback={feedback} />

      <FeedbackToolbar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      <FeedbackTable
        feedback={filteredFeedback}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </DashboardLayout>
  );
}

export default Feedback;