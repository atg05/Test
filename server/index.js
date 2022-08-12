import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// import { userRoute } from "./api/users/userRoute";
import { userRouter } from "./api/users/userRoute.js";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bodyParser from "body-parser";
import { register } from "./api/users/userController.js";
import { taskRouter } from "./api/tasks/task.routes.js";
import { projectRouter } from "./api/projects/project.routes.js";

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = { credential: true, origin: process.env.URL || "*" };
app.use(cors(corsOptions));

const db = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(req?.headers?.authorization);
  if (req?.headers?.authorization?.split(" ")[0] === "Bearer") {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

//routes
app.use("/v1/api/user", userRouter);
app.use("/v1/api/task", taskRouter);
app.use("/v1/api/project", projectRouter);

app.listen(PORT, () => {
  console.log(`Server is started on: ${PORT}`);
});
