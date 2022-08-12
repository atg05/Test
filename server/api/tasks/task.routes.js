import Express from "express";
import loginRequired from "../../middleware/auth.js";
import { addTask } from "./task.controller.js";

export const taskRouter = Express.Router();

taskRouter.route("/").post(loginRequired, addTask);
