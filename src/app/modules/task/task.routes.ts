import {Router} from "express";
import { TaskController } from "./task.controller";
const router = Router();

router.post('/', TaskController.createTask);
// router.get('/', getTasks);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);


export const TaskRoutes =  router;