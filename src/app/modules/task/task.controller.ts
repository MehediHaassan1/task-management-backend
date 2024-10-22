import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskServices } from "./task.service";

const createTask = catchAsync(async(req, res) => {
  const task = await TaskServices.createTaskIntoDB(req.body)

  sendResponse(res, {
    status: 201,
    success: true,
    message: "Task created successfully!",
    data: task
  })
})

 // Get all tasks
const getTasks = catchAsync(async (req, res) => {
    console.log(req.query)
      const { search = '', status = 'All', priority = 'All', tag = 'All' } = req.query;
      
      const tasks = await TaskServices.getTasksFromDB( 
        search as string, 
        status as string, 
        priority as string, 
        tag as string 
      )

      sendResponse(res, {
        status: 200,
        success: true,
        message: "Task retrieved successfully!",
        data: tasks
      })

  
})

// Update a task
const updateTask = catchAsync(async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const result = await  TaskServices.updateTaskIntoDB(id, data)
      sendResponse(res, {
        status: 200,
        success: true,
        message: "Task updated successfully!",
        data: result
      })  
})

// Delete a task
const deleteTask = catchAsync(async (req, res) => {

      const task = await TaskServices.deleteTaskFromDB(req.params.id)
      sendResponse(res, {
        status: 200,
        success: true,
        message: "Task deleted successfully!",
        data: task
      })  
})

export const TaskController = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
}
