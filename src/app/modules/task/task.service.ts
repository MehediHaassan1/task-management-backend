import { ITask } from "./task.interface"
import Task from "./task.model";

const createTaskIntoDB = async(data:ITask) => {
  const result = await Task.create(data)
  return result;
}

export const TaskServices = {
  createTaskIntoDB,
}