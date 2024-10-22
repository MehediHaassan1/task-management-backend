import { ITask } from "./task.interface"
import Task from "./task.model";

const createTaskIntoDB = async(data:ITask) => {
  const result = await Task.create(data)
  return result;
}

const getTasksFromDB = async (search:string, status:string, priority:string, tag:string) =>{
  let query:any;

  if (search) {
      query.$or = [
          { title: { $regex: search, $options: 'i' } }, 
          { description: { $regex: search, $options: 'i' } }, 
      ];
  }

  // Filter by status (if not 'All')
  if (status !== 'All') {
      query.status = status;
  }

  // Filter by priority (if not 'All')
  if (priority !== 'All') {
      query.priority = priority;
  }

  // Filter by tags (if not 'All')
  if (tag !== 'All') {
      query.tags = { $in: [tag] };
  }

  // Fetch tasks from the database based on the constructed query
  const tasks = await Task.find(query).sort({ status: -1 }); 

  return tasks;
}

const updateTaskIntoDB = async(id:string, data:Partial<ITask>) =>{
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  return task;
}

const deleteTaskFromDB = async(id:string) =>{
  const task = await Task.findByIdAndDelete(id);
  return task;
}


export const TaskServices = {
  createTaskIntoDB,
  getTasksFromDB,
  updateTaskIntoDB,
  deleteTaskFromDB,
}