import Express from "express";
import { register, logIn } from "./userController.js";

export const userRouter = Express.Router();

userRouter.route("/register").post(register);
userRouter.route("/login").post(logIn);
