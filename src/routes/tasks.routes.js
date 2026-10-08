import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  listTasks,
  replaceTask,
  updateTask
} from "../controller/tasks.controller.js";

export const tasksRouter = Router();

tasksRouter.get("/", listTasks);
tasksRouter.get("/:id", getTask);
tasksRouter.post("/", createTask);
tasksRouter.put("/:id", replaceTask);
tasksRouter.patch("/:id", updateTask);
tasksRouter.delete("/:id", deleteTask);