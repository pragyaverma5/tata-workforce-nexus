import { employeeData } from "./employeeData";

const categories = [
  "Work Environment",
  "Facilities",
  "Management",
  "Safety",
  "Salary",
  "Suggestions",
];

const ratings = [5, 4, 3, 5, 2];

const statuses = [
  "Reviewed",
  "Reviewed",
  "Pending",
  "Resolved",
];

const comments = [
  "Great workplace culture.",
  "Need better cafeteria facilities.",
  "Supportive management.",
  "Improve parking area.",
  "Need additional training sessions.",
];

export const feedbackRecords = employeeData.map((employee, index) => ({
  ...employee,

  category: categories[index % categories.length],

  rating: ratings[index % ratings.length],

  comment: comments[index % comments.length],

  date: `${10 + (index % 15)} Jul 2026`,

  feedbackStatus: statuses[index % statuses.length],
}));