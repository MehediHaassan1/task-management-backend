import {Router} from "express";
import { TaskRoutes } from "../modules/task/task.routes";

const router = Router();

router.use('/tasks', TaskRoutes)

export default router;