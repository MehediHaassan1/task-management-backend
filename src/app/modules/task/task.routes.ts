import {Router} from "express";
import { TaskController } from "./task.controller";
const router = Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);


export const TaskRoutes =  router;