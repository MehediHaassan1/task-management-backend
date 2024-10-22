import { model,Schema } from "mongoose";
import { ITask } from "./task.interface";


const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Completed', 'Pending'],
    default: 'Pending'
  },
  dueDate: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low'
  },
  tags: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const Task = model('Task', taskSchema);

export default Task;