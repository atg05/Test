import Express from "express";
import loginRequired from "../../middleware/auth.js";
import { addProject } from "./project.controller.js";

export const projectRouter = Express.Router();

projectRouter.route("/").post(loginRequired, addProject);
