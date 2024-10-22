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

export const TaskController = {
  createTask,
}

// // Get all tasks
// exports.getTasks = async (req, res) => {
//     try {
//         const { search = '', status = 'All', priority = 'All', tag = 'All' } = req.query;
        
//         let query = {};

//         if (search) {
//             query.$or = [
//                 { title: { $regex: search, $options: 'i' } }, 
//                 { description: { $regex: search, $options: 'i' } }, 
//             ];
//         }

//         // Filter by status (if not 'All')
//         if (status !== 'All') {
//             query.status = status;
//         }

//         // Filter by priority (if not 'All')
//         if (priority !== 'All') {
//             query.priority = priority;
//         }

//         // Filter by tags (if not 'All')
//         if (tag !== 'All') {
//             query.tags = { $in: [tag] };
//         }

//         // Fetch tasks from the database based on the constructed query
//         const tasks = await Task.find(query).sort({ status: -1 }); 
        
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Update a task
// exports.updateTask = async (req, res) => {
//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!task) return res.status(404).json({ message: "Task not found" });
//         res.status(200).json(task);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete a task
// exports.deleteTask = async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id);
//         if (!task) return res.status(404).json({ message: "Task not found" });
//         res.status(200).json({ message: "Task deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
