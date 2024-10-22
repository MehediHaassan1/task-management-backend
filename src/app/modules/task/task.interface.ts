export interface ITask {
  title: string;
  description: string;
  status: "Pending" |  "Completed";
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  tags: string[];
}